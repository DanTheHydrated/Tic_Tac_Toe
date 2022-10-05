let i = 0;

const gameState = {
    turncount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    winCon: [[TL, TC, TR], [ML, MC, MR], [BL, BC, BR], [TL, ML, BL], [TC, MC, BC], [TR, MR, BR], [TL, MC, BR], [TR, MC, BL]],
    xState: [],
    oState: []
};

start.addEventListener('click', () => {
    if(i>0){
        i=0
    start.innerHTML='start';
    }else{
    i++;
    console.log(i);
    start.innerHTML='Reset';
}});

TL.addEventListener('click', () => {
    

});

function turnCount(){
    if(i>=5){
        winCheck();
    }
    i++;
    if(i>9){
        draw();
    }
};

function tileClick(tile){
    if(i%2 !== 0){
        gameState.xState.push(tile);
        console.log(gameState.xState);
    }else{
        gameState.oState.push(tile);
        console.log(gameState.oState);
    }
    document.getElementById('tile').disabled = true;
    turnCount();
};