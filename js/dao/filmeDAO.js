// Initialize Firebase

$(document).ready(function(){
	
	iniciarSelectCinemas();
	iniciarListenersFilmes();


});

function cadastrarFilme(nome, nomeoriginal, imagem, descricao, cinemas, idade, genero, tempo){
	firebase
	.database()
	.ref('filmes')
	.push()
	.set({
			"nome" : nome,
			"nome-original" : nomeoriginal,
			"imagem" : imagem,
			"sinopse" : descricao,
			"cinemas" : cinemas,
			"idade" : idade,
			"genero" : genero,
			"tempo" : tempo
		});
	
	console.log('FILME - cadastrado com sucesso!');
}

function excluirFilme(key){
	firebase
	.database()
	.ref('filmes/' + key)
	.remove();
	
	console.log('FILME - excluido com sucesso!');
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

function iniciarSelectCinemas(){
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

		var component = `<div class="item" data-value="${cinemaObj.id}">
						 	${cinemaObj.nome}
						 </div>`

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

function iniciarListenersFilmes(){
	//Lista Filmes

	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('filmes')
	.orderByChild("nome")
	.on("child_added", function(filme) {
		console.log("Aqui");

		var filmeObj = filme.val();
		filmeObj.id = filme.key;

		var component =
                `<tr id='${filmeObj.id}'>`+
                  "<td>" + filmeObj.nome + "</td>"  +
                  "<td>" + filmeObj.cinema + "</td>"  +
                  "<td>" + filmeObj.idade + "</td>"+
                  "<td>" + filmeObj.genero + "</td>"  +
                  "<td>" + filmeObj.tempo + "</td>"  +
                  "<td>"+
                      "<a class='btn btn-info' href='#''>Editar</a>"+
                      "<a class='btn btn-danger' href='#'"+
                      		`onclick="excluirFilme('${filmeObj.id}')">Excluir</a>`+
                  "</td>"+
                "</tr>";

		$("#tableFilme").append(component);

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
	
	 // * Query principal que retorna os cinemas exluidos ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('filmes')
	.orderByChild("nome")
	.on("child_removed", function(filme) {

		var keyFilme = filme.key;
		var dom = "#" + keyFilme;

		$(dom).remove();

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
}