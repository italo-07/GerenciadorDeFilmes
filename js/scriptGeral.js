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
		var cinemaNomeFilme = [];
		
		var inputs = $('#formCinema').serializeArray();
		inputs.forEach(function(obj){

			if(obj.name === 'nome')
				cinemaNome = obj.value;
			else if(obj.name === 'endereco')
				cinemaEndereco = obj.value;
			else if(obj.name === 'nomeFilme')
				cinemaNomeFilme = obj.value;

		});

		var arraycinemafilmeNome = cinemaNomeFilme.split(',');
		console.log(arraycinemafilmeNome);
		var filmes = {};

		arraycinemafilmeNome.forEach(function(obj){
			filmes[obj] = true
		});

		cadastrarCinema(cinemaNome, cinemaEndereco, filmes);

		alert("Cadastrado com Sucesso");
	});

	/*
	 * Cadastrar Filme
	 */
	$('#btnCadastrarFilme').click(function(event){
		event.preventDefault();
		/*
		 * Variaveis
		 */
		var filmeNome;
		var filmeNomeOriginal;
		var filmeImagemCartaz;
		var filmeSinopse;
		var filmeCinemaNome = [];
		var filmeClassificacao;
		var filmeGenero;
		var filmeDuracao;
		
		var inputs = $('#formFilme').serializeArray();
		inputs.forEach(function(obj){

			if(obj.name === 'nomeFilme')
				filmeNome = obj.value;
			else if(obj.name === 'nomeOriginal')
				filmeNomeOriginal = obj.value;
			else if(obj.name === 'cartaz')
				filmeImagemCartaz = obj.value;
			else if(obj.name === 'descricao')
				filmeSinopse = obj.value;
			else if(obj.name === 'cinemaFilme')
				filmeCinemaNome = obj.value;
			else if(obj.name === 'classificacao')
				filmeClassificacao = obj.value;
			else if(obj.name === 'genero')
				filmeGenero = obj.value;
			else if(obj.name === 'duracao')
				filmeDuracao = obj.value;

		});

		var arrayfilmeCinemaNome = filmeCinemaNome.split(',');
		
		var cinemas = {};

		arrayfilmeCinemaNome.forEach(function(obj){
			cinemas[obj] = true
		});

		console.log(cinemas)

		cadastrarFilme(filmeNome, filmeNomeOriginal, filmeImagemCartaz, filmeSinopse, cinemas, filmeClassificacao, filmeGenero, filmeDuracao);

		alert("FILME - Cadastrado com Sucesso");
	});

	
	/*
	 * Cadastrar Sessão
	 */
	$('#btnCadastrarSessao').click(function(event){
		event.preventDefault();
		/*
		 * Variaveis
		 */
		var sessaoFilme;
		var sessaoCinema;
		var sessaoTipo;
		var sessaoModo;
		var sessaoSala;
		var sessaoHorario;
		
		var inputs = $('#formSessao').serializeArray();
		inputs.forEach(function(obj){

			if(obj.name === 'nomeFilme')
				sessaoFilme = obj.value;
			else if(obj.name === 'cinemaFilme')
				sessaoCinema = obj.value;
			else if(obj.name === 'tipo')
				sessaoTipo = obj.value;
			else if(obj.name === 'modo')
				sessaoModo = obj.value;
			else if(obj.name === 'sala')
				sessaoSala = obj.value;
			else if(obj.name === 'horario')
				sessaoHorario = obj.value;

		});

		cadastrarSessao(sessaoFilme, sessaoCinema, sessaoTipo, sessaoModo, sessaoSala, sessaoHorario);

		alert("SESSAO - Cadastrado com Sucesso");
	});
});