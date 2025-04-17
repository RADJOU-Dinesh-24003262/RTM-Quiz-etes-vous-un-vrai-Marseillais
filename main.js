var Game = {};
Game.score = 0 ;
Game.options = [];
Game.answer = [];

var mode;

async function startGame(mode1) {
    mode = mode1;
    console.log("Démarrage du jeu en mode :", mode);
    document.getElementById('landing').style.display = 'none';

    var quiz = document.createElement('section');
    quiz.id = 'quiz';

    var head = document.createElement('div');
    head.className = 'head';

    var h1 = document.createElement('h1');
    h1.textContent = document.querySelector('section').children[1].children[mode].textContent;
    
    var descquiz = document.createElement('p');

    var progres = document.createElement('p');
    progres.id = 'progres';
    progres.textContent = '1/10';

    head.appendChild(h1);
    head.appendChild(descquiz);
    head.appendChild(progres);
    quiz.appendChild(head);
    document.body.appendChild(quiz);

    var question = document.createElement('p');
    question.id = 'question';
    
    var options = document.createElement('ul');
    options.id = 'reponses';
    
    for (let i = 0; i < 4; i++) {
        var option = document.createElement('li');
        option.id = "Option " + (i + 1);

        var btn = document.createElement('button');
        btn.id = i;
        btn.className = "option";
        option.appendChild(btn);
        btn.onclick = () => selectOption(i);

        options.appendChild(option);
    }

    var suivant = document.createElement('button');
    suivant.innerHTML = 'Suivant';
    suivant.id = 'next';
    suivant.classList = 'bouton';
    suivant.disabled = true;
    

    quiz.appendChild(question);
    quiz.appendChild(options);
    quiz.appendChild(suivant);

    generateQestion();
    switch (mode) {
        case 0:
            descquiz.textContent = 'Devinez les terminus de la ligne';
            lineTerminus();
            break;
    
        case 1 :
            descquiz.textContent = 'Trouvez la ligne qui relie ces terminus';
            terminusLine();
            break;

        default :
            descquiz.textContent = 'Devinez la ligne à partir de la carte';
            carteMys();
            break;
    }
}

