var Carte = null;
var layer;

function lineTerminus(){
    document.getElementById('question').innerHTML = `Quels sont les terminus de la ligne <em class="bus" style="background: #${Game.answer[0].color};">${Game.answer[0].num}</em> ?`;
    for (let index = 0; index < 4; index++) {
        document.getElementById(index).innerHTML = Game.options[0][index].name;               
    }

}

function terminusLine(){
    document.getElementById('question').innerHTML = `Quel est la ligne qui relie ces terminus ?`;
    document.getElementById('station1').innerHTML = Game.answer[0].terminus[0];
    document.getElementById('station2').innerHTML = Game.answer[0].terminus[1];
    for (let index = 0; index < 4; index++) {
        document.getElementById(index).innerHTML = `<em class="bus" style="background: #${Game.options[0][index].color};">${Game.options[0][index].num}</em>`;            
    }
}

function carteMys(map = Carte){
    if(Carte === null){
        Carte = map;
    }

    layer = L.geoJSON(Game.answer[0].shape, {
        /*style: {"color": `#${Game.answer[0].color}`}*/
    }).addTo(map);
    
    Carte.fitBounds(layer.getBounds(), {
        padding: [20, 20]
    });

    document.getElementById('question').innerHTML = 'Quelle ligne correspond à cette carte ?';
    for (let index = 0; index < 4; index++) {
        document.getElementById(index).innerHTML = `<em class="bus" style="background: #${Game.options[0][index].color};">${Game.options[0][index].num}</em>`;            
    }
}