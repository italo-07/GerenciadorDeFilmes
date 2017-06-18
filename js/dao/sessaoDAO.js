// Initialize Firebase

$(document).ready(function(){
	
	iniciarSelectFilmes();
	iniciarListenersSessao();

});


function cadastrarSessao(nomeFilme, cinemaFilme, tipo, modo, sala, horario){
	firebase
	.database()
	.ref('sessao')
	.push()
	.set({
			"filme" : nomeFilme,
			"cinema" : cinemaFilme,
			"tipo" : tipo,
			"modo" : modo,
			"sala" : sala,
			"horario" : horario
		});
	
	console.log('SESSÃO - cadastrado com sucesso!');
}

function excluirSessao(key){
	firebase
	.database()
	.ref('sessao/' + key)
	.remove();
	
	console.log('SESSÃO - excluido com sucesso!');
}

// function atualizarCinema(nome, endereco, preco){
// 	firebase
// 	.database()
// 	.ref('cinema')
// 	.push()
// 	.update({
// 			"nome" : nome,
// 			"endereco" : endereco,
// 			"preco" : preco
// 		});
	
// 	console.log('atualizar com sucesso!');
// }

function iniciarSelectFilmes(){
	//Lista Filme
	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('filme')
	.orderByChild("nomeFilme")
	.on("child_added", function(filme) {

		var filmeObj = filme.val();
		filmeObj.id = filme.key;

		console.log("iniciou sessao")

		var component = `<option value="${filmeObj.id}">
								${filmeObj.nomeFilme}
						 </option>`;

		$("#nomeFilme").append(component);

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
	
	 // * Query principal que retorna os cinemas exluidos ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('filme')
	.orderByChild("nomeFilme")
	.on("child_removed", function(filme) {
		
		$(`option[value='${filme.key}']`).remove();

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});

	//ListaCinema

	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('cinema')
	.orderByChild("nome")
	.on("child_added", function(cinema) {

		var cinemaObj = cinema.val();
		cinemaObj.id = cinema.key;

		console.log("iniciou")

		var component = `<option value="${cinemaObj.id}">
								${cinemaObj.nome}
						 </option>`;

		$("#cinemaFilme").append(component);

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
	
	 // * Query principal que retorna os cinemas exluidos ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('cinema')
	.orderByChild("nome")
	.on("child_removed", function(cinema) {
		
		$(`option[value='${cinema.key}']`).remove();

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});

}


function iniciarListenersSessao(){
	//Lista Sessões

	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('sessao')
	.orderByChild("nomeFilme")
	.on("child_added", function(sessao) {
		console.log("Aqui");

		var sessaoObj = sessao.val();
		sessaoObj.id = sessao.key;

		var component =
                `<tr id='${sessaoObj.id}'>`+
                  "<td>" + sessaoObj.nomeFilme + "</td>"  +
                  "<td>" + sessaoObj.cinemaFilme + "</td>"  +
                  "<td>" + sessaoObj.tipo + "</td>"+
                  "<td>" + sessaoObj.modo + "</td>"  +
                  "<td>" + sessaoObj.sala + "</td>"  +
                  "<td>" + sessaoObj.horario + "</td>"  +
                  "<td>"+
                      "<a class='btn btn-info' href='#''>Editar</a>"+
                      "<a class='btn btn-danger' href='#'"+
                      		`onclick="excluirSessao('${sessaoObj.id}')">Excluir</a>`+
                  "</td>"+
                "</tr>";

		$("#tableSessao").append(component);

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
	
	 // * Query principal que retorna os cinemas exluidos ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('sessao')
	.orderByChild("nomeFilme")
	.on("child_removed", function(sessao) {

		var keySessao = sessao.key;
		var dom = "#" + keySessao;

		$(dom).remove();

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
}
