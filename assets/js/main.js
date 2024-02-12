/*=============== DISPLAY SMALL SQUARES ===============*/
const mainContainer = document.getElementById("container"),
    mainBoxes = document.querySelectorAll('.color__box')

mainBoxes.forEach(box=> {
    console.log("rdispaly small");
    for(var i = 0; i < 100; i++){
        var newSmallSquare = document.createElement('div')
        box.appendChild(newSmallSquare)
        newSmallSquare.classList.add('smaller-square')
        
    }
    }
)

/*=============== SELECTING SQUARES ===============*/
const smallBoxes = document.querySelectorAll(".color__box:not(#color__box-result-rgb, #color__box-result-cmyk) .smaller-square");
smallBoxes.forEach(box => box.addEventListener('click', ()=>{
    if(box.classList.contains('selected-square')) {
        box.classList.remove('selected-square');
    } else {

        box.classList.add('selected-square');
    }
    updateResultRGBSquare();
    updateResultCMYKSquare()
}))


/*=============== RESULT RGB SQUARE ===============*/
function updateResultRGBSquare(){

    const mainBoxes = document.querySelectorAll('#rgb__container .color__box')

    mainBoxes.forEach((box) => {

        const isResultBox = box.id === 'color__box-result-rgb';
        const resultBox = document.getElementById('color__box-result-rgb')
        if(!isResultBox){
            const childrenColorBox = box.querySelectorAll('.smaller-square');
            const childrenResultBox = resultBox.querySelectorAll('.smaller-square');
            if(childrenColorBox.length === childrenResultBox.length){
                console.log(childrenColorBox.length, childrenResultBox.length);

                childrenColorBox.forEach((smallBoxColor, index) =>{
                    smallBoxResult = childrenResultBox[index];
                    if(smallBoxColor.classList.contains('selected-square')){
                        if(box.id === "color__box-red"){
                            smallBoxResult.classList.add('selected-square-red')
                        }
                        if(box.id === "color__box-blue"){
                            smallBoxResult.classList.add('selected-square-blue')
                        }
                        if(box.id === "color__box-green"){
                            smallBoxResult.classList.add('selected-square-green')
                        }
                        
                    } else {
                        console.log(box.id);
                        if(box.id === "color__box-red"){
                            smallBoxResult.classList.remove('selected-square-red')
                        }
                        if(box.id === "color__box-blue"){
                            smallBoxResult.classList.remove('selected-square-blue')
                        }
                        if(box.id === "color__box-green"){
                            smallBoxResult.classList.remove('selected-square-green')
                        }
                    }
                });
            }
            else{
            console.error('Length of children is not the same.');
        }
        }
    });
}



/*=============== RESULT CMYK SQUARE ===============*/
const cmykMainBoxes = document.querySelectorAll('#cmyk__container .color__box');

function updateResultCMYKSquare() {
    const colorBoxCyan = document.getElementById('color__box-cyan');
    const colorBoxMagenta = document.getElementById(`color__box-magenta`);
    const colorBoxYellow = document.getElementById(`color__box-yellow`);
    const colorBoxBlack = document.getElementById(`color__box-black`);
    const colorBoxResultCMYK = document.getElementById(`color__box-result-cmyk`);
    const childrenColorBoxCyan = colorBoxCyan.querySelectorAll('.smaller-square');
    const childrenColorBoxMagenta = colorBoxMagenta.querySelectorAll('.smaller-square');
    const childrenColorBoxYellow = colorBoxYellow.querySelectorAll('.smaller-square');
    const childrenColorBoxBlack = colorBoxBlack.querySelectorAll('.smaller-square');
    const childrenColorBoxResultCMYK = colorBoxResultCMYK.querySelectorAll('.smaller-square');
    // Pętla po indeksach od 0 do 99
    for (let i = 0; i < 60; i++) {
        // Pobierz kolor z każdego obszaru
        const cyanColor = childrenColorBoxCyan[i].classList.contains('selected-square') ? '1' : '0';
        const magentaColor = childrenColorBoxMagenta[i].classList.contains('selected-square') ? '1' : '0';
        const yellowColor = childrenColorBoxYellow[i].classList.contains('selected-square') ? '1' : '0';
        const blackColor = childrenColorBoxBlack[i].classList.contains('selected-square') ? '1' : '0';

        const [r, g, b] = cmykToRgb(cyanColor, magentaColor, yellowColor, blackColor);

        // Kombinacja kolorów i ustawienie w obszarze wynikowym CMYK
        // Ustaw kolor w obszarze wynikowym CMYK
         // Ustaw kolor w obszarze wynikowym CMYK
        //childrenColorBoxResultCMYK[i].style.backgroundColor = "rgb(32,22,2)"
        console.log(r);
        console.log(g);
        console.log(b);
        childrenColorBoxResultCMYK[i].style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";

    }

}

function cmykToRgb(c, m, y, k) {
    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);

    return [r, g, b];
}
