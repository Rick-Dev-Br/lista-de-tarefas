$('form').on('submit', function(e) { //.on evento ao enviar(submit) function(e) ativa esse evento
    e.preventDefault(); // personaliza o evento 

    const novaTarefa = $('#nova-tarefa').val(); //cria const e salva oque foi escrito no input do html
    const linhaTarefa = $('<li></li>').text(novaTarefa); //li cria uma nova linha na OL .text diz que é um texto
    $('#lista-tarefas').append(linhaTarefa); //append adiciona o elemento na const 
    $('#nova-tarefa').val(''); //limpa o input depois de add
    $('#lista li').eq(1).remove();
});

$(document).ready(function() { 
    $('#lista-tarefas').on('click', 'li', function() { // Somente com o 'click' ele seleciona todos os li com o 'li' somente o clicado
        $(this).toggleClass('riscado'); //this refere-se ao #lista-tarefas ou ao seletor atual toggleClass add a class
    });
});


