var buttonElement = document.querySelector('.button-welcome')

buttonElement.addEventListener (
    'click', 
    function (){
        if (buttonElement.classList.contains('button-red')) {
            buttonElement.classList.remove('button-red')
        } else{
            buttonElement.classList.add('button-red')
        }
    }
)