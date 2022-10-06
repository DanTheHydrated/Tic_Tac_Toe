let i = 0;
// let v = 0;

const gameState = {
    turncount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    winCon: [[TL, TC, TR], [ML, MC, MR], [BL, BC, BR], [TL, ML, BL], [TC, MC, BC], [TR, MR, BR], [TL, MC, BR], [TR, MC, BL]],
    xState: [],
    oState: []
};

if(i<1){
    TL.disabled= true;
    TC.disabled= true;
    TR.disabled= true;
    ML.disabled= true;
    MC.disabled= true;
    MR.disabled= true;
    BL.disabled= true;
    BC.disabled= true;
    BR.disabled= true;
};

start.addEventListener('click', () => {
    if(i>0){
        i=0
    start.innerHTML='start';
    startBack();
    }else{
    i++;
    console.log(i);
    start.innerHTML='Reset';
    startPLay();
}});

function startPLay(){
    TL.disabled= false;
    TC.disabled= false;
    TR.disabled= false;
    ML.disabled= false;
    MC.disabled= false;
    MR.disabled= false;
    BL.disabled= false;
    BC.disabled= false;
    BR.disabled= false;
    gameState.xState.length= 0;
    console.log(gameState.xState);
    gameState.oState.length= 0;
    console.log(gameState.oState);
};

function startBack() {
    TL.disabled = true;
    TC.disabled = true;
    TR.disabled = true;
    ML.disabled = true;
    MC.disabled = true;
    MR.disabled = true;
    BL.disabled = true;
    BC.disabled = true;
    BR.disabled = true;
    gameState.xState.length = 0;
    console.log(gameState.xState);
    gameState.oState.length = 0;
    console.log(gameState.oState)
};





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
        // console.log(i);
    }else if (i%2 === 0){
        gameState.oState.push(name);
        console.log(gameState.oState);
        turnCount();
        // console.log(i);
    }
    (tile).disabled = true;
};




// let w = 0;

// if(w===3){
//     console.log('Winner!')
// }


function winCheck(){
            gameState.winCon.forEach(e => testWinn(e));
            // sum = gameState.xState.reduce((a, b) => a + b);
            
            function testWinn(e){
                if(e.every(r => gameState.xState.includes(r))){
                    console.log('X WINS!');
                } else if (e.every(r => gameState.oState.includes(r))){
                    console.log('O WINS!');
                }
            }
    };

    // function testWinn(e, sum){
    //     if (e === sum)
    // }

//     function testWinn(e){
//     e.forEach(x => please(x) )
//     };

//     function please(x){
//         if(gameState.xState.includes(x)){
//             w++;
//         }
//     }

