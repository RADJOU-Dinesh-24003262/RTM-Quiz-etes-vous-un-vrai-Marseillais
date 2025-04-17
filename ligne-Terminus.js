function lineTerminus(){
    document.getElementById('question').innerHTML = `Quels sont les terminus de la ligne <em class="bus">${Game.answer[0].num}</em> ?`;
    for (let index = 0; index < 4; index++) {
        document.getElementById(index).innerHTML = Game.options[0][index].name;               
    }

}