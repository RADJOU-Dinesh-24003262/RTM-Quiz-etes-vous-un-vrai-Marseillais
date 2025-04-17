function generateQestion(){
    const d = new Date();
    for (let index = 0; index < 10; index++) {
        var options = [];
        for (let j = 0; j < 4; j++) {
            var option = busData[Math.floor(Math.random()*d.getTime())%130];
            options.push(option);
        }
        Game.options.push(options);
        Game.answer.push(options[Math.floor(Math.random()*d.getTime())%4]);
    }
    /*console.log(Game);*/
}

function selectOption(index) {
    
    for (let i = 0; i < 4; i++) {
        document.getElementById(i).classList.remove('selected');
    }
    document.getElementById(index).classList.add('selected');
    document.getElementById('next').disabled = false;
    document.getElementById('next').onclick = () => VerifyAnswer(index);
}

function VerifyAnswer(index){
    let i = 0;
    while (i < 4) {
        document.getElementById(i).disabled = true;
        if(Game.answer[0].id === Game.options[0][i].id)
            var answIndex = i;
        ++i;
    }

    document.getElementById(answIndex).classList.add('correct');
    
    if (index !== answIndex) {
        let optionselect = document.getElementById(index);
        optionselect.classList.add('incorrect');
    } else {
        ++Game.score;
    }
    Game.answer.shift();
    Game.options.shift();



    document.getElementById('next').textContent = Game.answer.length > 0 ? 'Suivant' : 'Terminer';
    document.getElementById('next').onclick = () => nextQuestion();
}

function nextQuestion(){

    let i = 0;
    while (i < 4) {
        document.getElementById(i).disabled = false;
        document.getElementById(i).classList.remove('correct');
        document.getElementById(i).classList.remove('incorrect');
        document.getElementById(i).classList.remove('selected');
        ++i;
    }
    document.getElementById('next').disabled = true;
    document.getElementById('progres').innerHTML = 10-Game.answer.length+1 + '/10';
    if(Game.answer.length > 0){
        switch (mode) {
            case 0:
                lineTerminus();
                break;
        
            case 1 :
                terminusLine();
                break;

            default :
                carteMys();
                break;
        }
    }else{            
        const percent = Math.round((Game.score / 10) * 100);
        let message = '';
        
        if (percent >= 90) message = 'Expert RTM !';
        else if (percent >= 70) message = 'Très bon score !';
        else if (percent >= 50) message = 'Pas mal !';
        else message = 'À améliorer !';

        document.getElementById('reponses').remove();
        document.getElementById('question').remove();
        document.getElementById('Terminus').remove();


        document.getElementById('progres').innerHTML = 'Quiz Fini !'

        const head = document.getElementsByClassName('head')[1];
        
        const score = document.createElement('p');
        score.innerHTML = `
            ${message}<br>
            Score: ${Game.score}/10<br>
            (${percent}%)
        `;
        score.style.margin = '30px';    

        head.parentNode.insertBefore(score, head.nextElementSibling );


        let btn =  document.getElementById('next')
        btn.onclick = () => reinitGame();
        btn.innerHTML = 'Nouveau Quiz';
        btn.disabled = false;

        Game.score = 0 ;
        Game.options = [];
        Game.answer = [];
    }

}