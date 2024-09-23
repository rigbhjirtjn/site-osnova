const textElement = document.getElementById (text);
const button = document.getElementById(changeTextButton);


function changeText() {
    textElement.innerText = "Текст змінено!";

}



button.addEventListener( 'click' , changeText)

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue"; 

}


button.addEventListener( 'click' , changeBackgroundColor);