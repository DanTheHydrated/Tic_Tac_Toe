let i = 0;
// let v = 0;

const gameState = {
    turncount: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    winCon: [7.53, 3.6, 7.56, 11.46, 7.55, 7.86, 7.54, 7.22],
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
    tileClick(TL, 1.1);
});

TC.addEventListener('click', () => {
    tileClick(TC, 1.2);
});

TR.addEventListener('click', () => {
    tileClick(TR, 1.3);
});

ML.addEventListener('click', () => {
    tileClick(ML, 2.41);
});

MC.addEventListener('click', () => {
    tileClick(MC, 2.52);
});

MR.addEventListener('click', () => {
    tileClick(MR, 2.63);
});

BL.addEventListener('click', () => {
    tileClick(BL, 3.71);
});

BC.addEventListener('click', () => {
    tileClick(BC, 3.82);
});

BR.addEventListener('click', () => {
    tileClick(BR, 3.93);
});



function turnCount(){
    i++;
    if(i>=5){
        winCheck();
    }
    if(i>9){
        draw();
    }
    console.log(i);
};

function tileClick(tile, v){
    if(i%2 !== 0){
        gameState.xState.push(v);
        console.log(gameState.xState);
        turnCount();
        // console.log(i);
    }else if (i%2 === 0){
        gameState.oState.push(v);
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
                let now = gameState.xState.reduce((a, b) => a + b);
                let sum = Math.round(now * 10) / 10;
                if (e === sum){
                    if(i%2 !== 0){
                        console.log('X WON!');
                    }else if (i%2 === 0){
                        console.log('O WON!');
                    }
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

