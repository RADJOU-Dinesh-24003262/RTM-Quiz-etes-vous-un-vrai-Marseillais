function generateQestion(mode){
    for (let index = 0; index < 10; index++) {
        var options = [];
        for (let j = 0; j < 4; j++) {
            var option = busData[Math.floor(Math.random()*130)];
            options.push(option);
        }
        Game.options.push(options);
        Game.answer.push(options[Math.floor(Math.random()*4)]);
    }
    console.log(Game);
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
    btn.onclick = () => selectOption(i);
}