window.onload = function(){

    let pArea = document.getElementById("puzzlearea");
    let pPiece = pArea.getElementsByTagName("div");
    for (let index = 0; index < pPiece.length; index++){
        pPiece[index].setAttribute("class", "puzzlepiece");
        pPiece[index].style.backgroundImage = "url(background.jpg)";
        pPiece[index].style.top = (Math.floor(index / 4)) * 100 + "px";
        pPiece[index].style.left = ( index % 4 ) * 100 + "px";
        pPiece[index].style.backgroundPosition = "-"+pPiece[index].style.left+" "+"-"+pPiece[index].style.top;
    }

}