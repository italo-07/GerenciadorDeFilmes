// Initialize Firebase
var config = {
	apiKey: "AIzaSyAJZdcQnRB6V7FLRAg7Z48vb_T60k9sdYQ",
	authDomain: "gerenciadordefilmes.firebaseapp.com",
	databaseURL: "https://gerenciadordefilmes.firebaseio.com",
	projectId: "gerenciadordefilmes",
	storageBucket: "gerenciadordefilmes.appspot.com",
	messagingSenderId: "871382889008"
};
firebase.initializeApp(config);

$(document).ready(function(){
	
	iniciarListenersCinemas();


});

function cadastrarCinema(nome, endereco, preco){
	firebase
	.database()
	.ref('cinema')
	.push()
	.set({
			"nome" : nome,
			"endereco" : endereco,
			"preco" : preco
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

function atualizarCinema(nome, endereco, preco){
	firebase
	.database()
	.ref('cinema')
	.push()
	.update({
			"nome" : nome,
			"endereco" : endereco,
			"preco" : preco
		});
	
	console.log('atualizar com sucesso!');
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
                  "<td>" + cinemaObj.endereco + "</td>"  +
                  "<td>" + cinemaObj.preco + "</td>"+
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


/*function editarContato(id, nome, telefone, imagem){
	url.child("Contatos").child(id).update({
			"nome" : nome,
			"telefone" : telefone
		});
}

/*function removerContato(id){
	url.child("Contatos").child(id).remove();
}*/