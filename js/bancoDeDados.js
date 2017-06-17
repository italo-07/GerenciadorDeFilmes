var url = new Firebase("https://gerenciadordefilmes.firebaseio.com/");

/*
$(document).ready(function(){
	retornarContatos("");
	$("input[name='pesquisa']").keydown(function(){
		retornarContatos($(this).val());
	});
});

function retornarContatos(pesquisa){
	/*
	 * Query principal que retorna os contatos ordenados pelo nome
	 * iniciados pela variavel pesquisa.
	 *
	url.child("Contatos").orderByChild("nome").startAt(pesquisa).on("value", function(snapshot) {
		$('#listarContatos').empty();
		$('#load').remove();
		snapshot.forEach(function(childSnapshot){
		var contato = childSnapshot.val();
		var component = "<div class='ui card modal-edit'>"+
							"<input class='id-contato' type='hidden' value='"+ childSnapshot.key() +"'/>"+
							"<a class='small image' href='#'>"+
						      "<img class='ui tiny circular image img-contato' src='data:image/png;base64,"+ contato.imagem + "'>"+
						    "</a>"+
						    "<div class='content'>"+
						      "<span class='header nom-contato'>"+ contato.nome + "</span>"+
						      "<div class='meta'>"+
							      "<div class='ui label'>"+
							      	"<i class='phone icon'></i>"+
							      "</div>"+
						          "<span class='date tel-contato'>"+ contato.telefone + "</span>"+
						      "</div>"+
						    "</div>"+
						"</div>";
		$("#listarContatos").append(component);
		});
	}, function (errorObject){
	  console.log("The read failed: " + errorObject.code);
	});
}
*/

/*function editarContato(id, nome, telefone, imagem){
	url.child("Contatos").child(id).update({
			"nome" : nome,
			"telefone" : telefone
		});
}*/

function cadastrarCinema(nome, telefone, imagem){
	url.child("Contatos").push().set({
			"nome" : nome,
			"telefone" : telefone,
			"imagem" : "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAaNJREFUWIXt1UFrE0EUB/D//81g2yBEpaVQ8BZ68RCGBOMePdb2I3htPfhd/BB+imJB8ZSDrFmCAQ/xIAhFEWwOpYk7O68HPZS0281q5yDmf5x5+96PYdgBlllmmf89/JOPer3eZlEUeyGEbQC5iHzw3h9mWXYSHdButx9Ya5+RXLm4rqpnAF6mafq+Tj+pOZ/W2v354QBAck1VD7rd7sNogCRJ7pJcK20mQlV9FA3gvb9TVUPyXjSAMebS0c9HVU00QJ7nWlVDchoNICKnVTWq+iMawFr7PYRw7Smo6nE0QL/fPwNQNeBTNAAAiEhWtqeq09ls9jEqwHv/FkBeAjgajUY/owKyLDtR1a9X7ZF8XbdfbQB+vR9lP6RGdIBzrkPydsn2bt1+C7+GzrkNAF2ST0TkVlmdqo4AvErTdKHLeC2g0+k0QgiJiCQk7y+K/Q35AuDNZDJ5Nx6PZ7UArVZrpdls7gB4THK1zuArINMQQloUxeFwOPxWCXDObRljngNY/5vBJZAXg8Hg88X1S5fQGHNw08MBgOSqMebpTfdd5t/POYU9k2jaY20eAAAAAElFTkSuQmCC"
		});
}

/*function removerContato(id){
	url.child("Contatos").child(id).remove();
}*/