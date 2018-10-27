let ePiece = {
    x: 300, 
    y: 300
};
window.onload = function(){
    let pArea = document.getElementById("puzzlearea");
    let pPiece = pArea.getElementsByTagName("div");
    for (let index = 0; index < pPiece.length; index++){
        pPiece[index].setAttribute("class", "puzzlepiece");
        pPiece[index].style.backgroundImage = "url(background.jpg)";
        pPiece[index].style.top = (Math.floor(index / 4)) * 100 + "px";
        pPiece[index].style.left = ( index % 4 ) * 100 + "px";
        pPiece[index].style.backgroundPosition = "-"+pPiece[index].style.left+" "+"-"+pPiece[index].style.top;

        pPiece[index].addEventListener("mouseover", function(){
            if (Math.abs(parseInt(pPiece[index].style.left) - ePiece.x) === 100 && parseInt(pPiece[index].style.top) === ePiece.y){
                pPiece[index].setAttribute("class", "puzzlepiece movablepiece");
            } else {
                if (Math.abs(parseInt(pPiece[index].style.top) - ePiece.y) === 100 && parseInt(pPiece[index].style.left) === ePiece.x){
                    pPiece[index].setAttribute("class", "puzzlepiece movablepiece");
                } else {
                    pPiece[index].setAttribute("class", "puzzlepiece");
                }
            }
        });
        pPiece[index].addEventListener("click",function(){
            if(pPiece[index].className === "puzzlepiece movablepiece"){
                move_piece(pPiece[index]);
            }
        });
    }
    function move_piece(piece){
        //moves piece by swapping moveable piece with empty piece
        let swap_piece = { x: ePiece.x, y: ePiece.y};
        ePiece = {x : parseInt(piece.style.left), y : parseInt(piece.style.top)};
        piece.style.left = swap_piece.x+"px";
        piece.style.top = swap_piece.y+"px";
    }
    let shuffle_button = document.getElementById("shufflebutton");
    shuffle_button.addEventListener("click",function(){
        let shuffle_count = 100;
        for(let count = 0; count < shuffle_count; count++){
            let moveable_pieces = []; //stores the moveable pieces
            for(let index = 0; index < pPiece.length; index++){
                if (Math.abs(parseInt(pPiece[index].style.left) - ePiece.x) === 100 && parseInt(pPiece[index].style.top) === ePiece.y){
                    moveable_pieces.push(pPiece[index]);
                } else {
                    if (Math.abs(parseInt(pPiece[index].style.top) - ePiece.y) === 100 && parseInt(pPiece[index].style.left) === ePiece.x){
                        moveable_pieces.push(pPiece[index]);
                    }
                }
            }
            let random_index = Math.floor(Math.random() * moveable_pieces.length); //random selects a moveable piece from the array
            move_piece(moveable_pieces[random_index]); //moves the selected piece.
        }
    });
}