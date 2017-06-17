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
	/*
	 * Cadastrar Cinema
	 */
	$('#btnCadastrarCinema').click(function(event){
		event.preventDefault();
		/*
		 * Variaveis
		 */
		var cinemaNome;
		var cinemaEndereco;
		var cinemaPreco;
		
		var inputs = $('#formCinema').serializeArray();
		inputs.forEach(function(obj){

			if(obj.name === 'nome')
				cinemaNome = obj.value;
			else if(obj.name === 'endereco')
				cinemaEndereco = obj.value;
			else if(obj.name === 'preco')
				cinemaPreco = obj.value;

		});

		cadastrarCinema(cinemaNome, cinemaEndereco, cinemaPreco);
	});
});