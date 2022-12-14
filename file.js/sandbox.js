let i = 0;   //This is what controles the turn and the page generation
// let v = 0;

const gameState = {             //This is the board state that is manipulated
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    winCon: [[TL, TC, TR], [ML, MC, MR], [BL, BC, BR], [TL, ML, BL], [TC, MC, BC], [TR, MR, BR], [TL, MC, BR], [TR, MC, BL]],
    xState: [],
    oState: [],
    buttons: [TL, TC, TR, ML, MC, MR, BL, BC, BR]
};


if(i<1){      //This is what disables all the buttons if the game isn't being played 
    gameState.buttons.forEach(e => shutDown(e));
    function shutDown(e){
        e.disabled = true;
    };
    // TL.disabled= true;
    // TC.disabled= true;
    // TR.disabled= true;
    // ML.disabled= true;
    // MC.disabled= true;
    // MR.disabled= true;
    // BL.disabled= true;
    // BC.disabled= true;
    // BR.disabled= true;
};

start.addEventListener('click', () => {   //This controles the startbutton and makes it either start the game or reset it
    if(i>0){
        i=0
    start.innerHTML='start';
    startBack();
    }else{
    i++;
    console.log(i);
    start.innerHTML='Reset';
    startPLay();
    whosTurn();
}});

function startPLay(){      //This is what opens the game for play and enables the buttons to be manipulated 
    gameState.buttons.forEach(e => shutDown(e));
    function shutDown(e){
        e.disabled = false;
    };
    // TL.disabled= false;
    // TC.disabled= false;
    // TR.disabled= false;
    // ML.disabled= false;
    // MC.disabled= false;
    // MR.disabled= false;
    // BL.disabled= false;
    // BC.disabled= false;
    // BR.disabled= false;
    gameState.xState.length= 0;
    console.log(gameState.xState);
    gameState.oState.length= 0;
    console.log(gameState.oState);
};

function startBack() {    //This is what bloacks the buttons from being pressed again after they have been clicked once 
    i=0;    
    start.innerHTML='start';
    gameState.buttons.forEach(e => shutDown(e));
    function shutDown(e){
        e.disabled = true;
        if (!e.classList.contains('active')){
            e.classList.add('active');
        }
    };
    gameState.xState.length = 0;
    console.log(gameState.xState);
    gameState.oState.length = 0;
    console.log(gameState.oState);
    gameState.images.forEach(x => shutUp(x));
    function shutUp(x){
        document.getElementById(x).src = "./images/IMG_0801.jpg";
    };
};



    // TL.disabled = true;
    // TC.disabled = true;
    // TR.disabled = true;
    // ML.disabled = true;
    // MC.disabled = true;
    // MR.disabled = true;
    // BL.disabled = true;
    // BC.disabled = true;
    // BR.disabled = true;
    // document.getElementById(1).src = "./images/IMG_0801.jpg";
    // document.getElementById(2).src = "./images/IMG_0801.jpg";
    // document.getElementById(3).src = "./images/IMG_0801.jpg";
    // document.getElementById(4).src = "./images/IMG_0801.jpg";
    // document.getElementById(5).src = "./images/IMG_0801.jpg";
    // document.getElementById(6).src = "./images/IMG_0801.jpg";
    // document.getElementById(7).src = "./images/IMG_0801.jpg";
    // document.getElementById(8).src = "./images/IMG_0801.jpg";
    // document.getElementById(9).src = "./images/IMG_0801.jpg";



//This is where all my dumb event listeners are, and they also work in tandom with my hover effect

TL.addEventListener('click', () => {
    if (TL.classList.contains('active')) {
        TL.classList.remove('active');
    }
    tileClick(TL, TL, 1);
});

TC.addEventListener('click', () => {
    if (TC.classList.contains('active')) {
        TC.classList.remove('active');
    }
    tileClick(TC, TC, 2);
});

TR.addEventListener('click', () => {
    if (TR.classList.contains('active')) {
        TR.classList.remove('active');
    }
    tileClick(TR, TR, 3);
});

ML.addEventListener('click', () => {
    if (ML.classList.contains('active')) {
        ML.classList.remove('active');
    }
    tileClick(ML, ML, 4);
});

MC.addEventListener('click', () => {
    if (MC.classList.contains('active')) {
        MC.classList.remove('active');
    }
    tileClick(MC, MC, 5);
});

MR.addEventListener('click', () => {
    if (MR.classList.contains('active')) {
        MR.classList.remove('active');
    }
    tileClick(MR, MR, 6);
});

BL.addEventListener('click', () => {
    if (BL.classList.contains('active')) {
        BL.classList.remove('active');
    }
    tileClick(BL, BL, 7);
});

BC.addEventListener('click', () => {
    if (BC.classList.contains('active')) {
        BC.classList.remove('active');
    }
    tileClick(BC, BC, 8);
});

BR.addEventListener('click', () => {
    if (BR.classList.contains('active')) {
        BR.classList.remove('active');
    }
    tileClick(BR, BR, 9);
});

//This is where the hover image is populated 
function changeImg(img) {
    document.getElementById(img).src = "./images/IMG_0805.jpg";
};
function changeImg2(img) {
    document.getElementById(img).src = "./images/IMG_0801.jpg";
};

//This is what counts the turn
function turnCount(){
    i++;
    if(i>5){
        winCheck();
    } 
    console.log(i);
};

//This is what counts the turn and displays it 
function whosTurn(){
    if(i%2 !== 0){
        document.getElementById('turn').innerHTML='X turn!';
    }else if (i%2 === 0) {
        document.getElementById('turn').innerHTML='O turn!'
    };
};

//This is what is controling the Tile that is pushed and sets it to not be hoverable 
function tileClick(tile, name, picId){
    if(i%2 !== 0){
        gameState.xState.push(name);
        console.log(gameState.xState);
        document.getElementById(picId).src = './images/IMG_0804.jpg';
        turnCount();
        whosTurn();
        // console.log(i);
    }else if (i%2 === 0){
        gameState.oState.push(name);
        console.log(gameState.oState);
        document.getElementById(picId).src = './images/IMG_0802.jpg';
        turnCount();
        whosTurn();
        // console.log(i);
    }
    (tile).disabled = true;
};




// let w = 0;

// if(w===3){
//     console.log('Winner!')
// }

//This is what checks for a Winn and either ends the game or not 
function winCheck() {
    gameState.winCon.forEach(e => testWinn(e));
    // sum = gameState.xState.reduce((a, b) => a + b);

    function testWinn(e) {
        if (e.every(r => gameState.xState.includes(r))) { //bug on play 9, can still win but its going past it.

            Swal.fire({
                title: 'X WINS!',
                width: 600,
                text: 'O is mid...',
                padding: '3em',
                color: '#716add',
                background: '#fff url(./images/confefiiTransparent.gif)',
                backdrop: `
                            rgba(0,0,123,0.4)
                            url("./images/finish.gif")
                            center top
                            no-repeat
                        `
            });

            
            console.log('X WINS!');
        } else if (e.every(r => gameState.oState.includes(r))) {

            Swal.fire({
                title: 'O WINS!',
                width: 600,
                text: 'X is mid...',
                padding: '3em',
                color: '#716add',
                background: '#fff url(./images/confefiiTransparent.gif)',
                backdrop: `
                            rgba(0,0,123,0.4)
                            url("./images/finish.gif")
                            center top
                            no-repeat
                        `
            });

            
            console.log('O WINS!');
        } else if(!e.every(r => gameState.oState.includes(r))) {
            if (!e.every(r => gameState.xState.includes(r))) {
                if(i>9){

                Swal.fire({
                    title: 'YOU BOTH ARE JUST THE WORST!',
                    width: 600,
                    text: 'X and O are mid...',
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(./images/confefiiTransparent.gif)',
                    backdrop: `
                            rgba(0,0,123,0.4)
                            url("./images/finish.gif")
                            center top
                            no-repeat
                        `
                });
                startBack();
            };
            };
        };
    };
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

