$(document).ready(function(){
	
	iniciarListenersCinemas();
	iniciarSelectFilmes();


});

function cadastrarCinema(nome, bairro, filmes){
	firebase
	.database()
	.ref('cinema')
	.push()
	.set({
			"nome" : nome,
			"bairro" : bairro,
			"filmes" : filmes
		});
	
	console.log('cadastrado com sucesso!');
}

function excluirCinema(key){
	firebase
	.database()
	.ref('cinema/' + key)
	.remove();
	
	console.log('excluido com sucesso!');
}

function atualizarCinema(nome, bairro, filmes){
	firebase
	.database()
	.ref('cinema')
	.push()
	.update({
			"nome" : nome,
			"bairro" : bairro,
			"filmes" : filmes
		});
	
	console.log('atualizar com sucesso!');
}


function iniciarSelectFilmes(){
	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('filme')
	.orderByChild("nomeFilme")
	.on("child_added", function(filme) {

		var filmeObj = filme.val();
		filmeObj.id = filme.key;

		console.log("iniciou")

		var component = `<div class="item" data-value="${filmeObj.id}">
						 	${filmeObj.nomeFilme}
						 </div>`

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

}


function iniciarListenersCinemas(){
	
	 // * Query principal que retorna os cinemas ordenados pelo nome
	 // *
	firebase
	.database()
	.ref('cinema')
	.orderByChild("nome")
	.on("child_added", function(cinema) {

		var cinemaObj = cinema.val();
		cinemaObj.id = cinema.key;

		var component =
                `<tr id='${cinemaObj.id}'>`+
                  "<td>" + cinemaObj.nome + "</td>"  +
                  "<td>" + cinemaObj.bairro + "</td>"  +
                  "<td>" + cinemaObj.filmes + "</td>"+
                  "<td>"+
                      "<a class='btn btn-info' href='#''>Editar</a>"+
                      "<a class='btn btn-danger' href='#'"+
                      		`onclick="excluirCinema('${cinemaObj.id}')">Excluir</a>`+
                  "</td>"+
                "</tr>";

		$("#tableCinema").append(component);

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

		var keyCinema = cinema.key;
		var dom = "#" + keyCinema;

		$(dom).remove();

	}, function (errorObject){
		console.log("The read failed: " + errorObject.code);
	});
}
