async function startGame(mode) {
    console.log("Démarrage du jeu en mode :", mode);
    document.getElementById('landing').style.display = 'none';

    var quiz = document.createElement('section');

    var head = document.createElement('div');
    head.className = 'head';

    var  h1 = document.createElement('h1');
    h1.textContent = document.querySelector('section').children[1].children[mode].textContent;
    
    var  descquiz = document.createElement('p');

    var  progres = document.createElement('p');
    progres.textContent = '0/10';

    head.appendChild(h1);
    head.appendChild(descquiz);
    head.appendChild(progres);
    quiz.appendChild(head);
    document.body.appendChild(quiz);

    
  

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

