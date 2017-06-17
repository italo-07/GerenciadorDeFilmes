// Initialize Firebase

$(document).ready(function(){
	
	iniciarSelectCinemas();


});

// function cadastrarCinema(nome, endereco, preco){
// 	firebase
// 	.database()
// 	.ref('cinema')
// 	.push()
// 	.set({
// 			"nome" : nome,
// 			"endereco" : endereco,
// 			"preco" : preco
// 		});
	
// 	console.log('cadastrado com sucesso!');
// }

// function excluirCinema(key){
// 	firebase
// 	.database()
// 	.ref('cinema/' + key)
// 	.remove();
	
// 	console.log('excluido com sucesso!');
// }

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