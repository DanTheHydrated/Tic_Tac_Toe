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
    tileClick(TL, TL);
});

TC.addEventListener('click', () => {
    tileClick(TC, TC);
});

TR.addEventListener('click', () => {
    tileClick(TR, TR);
});

ML.addEventListener('click', () => {
    tileClick(ML, ML);
});

MC.addEventListener('click', () => {
    tileClick(MC, MC);
});

MR.addEventListener('click', () => {
    tileClick(MR, MR);
});

BL.addEventListener('click', () => {
    tileClick(BL, BL);
});

BC.addEventListener('click', () => {
    tileClick(BC, BC);
});

BR.addEventListener('click', () => {
    tileClick(BR, BR);
});

function turnCount(){
    i++;
    if(i>5){
        winCheck();
    }
    if(i>9){
        draw();
    }
    console.log(i);
};

function tileClick(tile, name){
    if(i%2 !== 0){
        gameState.xState.push(name);
        console.log(gameState.xState);
        turnCount();
    }else if (i%2 === 0){
        gameState.oState.push(name);
        console.log(gameState.oState);
        turnCount();
    }
    (tile).disabled = true;
};


function winCheck(){
            gameState.winCon.forEach(e => testWinn(e));
            function testWinn(e){
                if(e.every(r => gameState.xState.includes(r))){
                    console.log('X WINS!');
                } else if (e.every(r => gameState.oState.includes(r))){
                    console.log('O WINS!');
                }
            }
    };
