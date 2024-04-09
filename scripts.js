var headerText = document.querySelector('.spanInHeader');
headerText.style.opacity = '0';

function fadeInHeader(arg){
    if(arg == 1){
        var btn = document.querySelector('.backToHome');
        btn.style.opacity = '0';
        btn.style.transitionDuration = '1s';
        btn.style.opacity = '1';
    }
    headerText.style.transitionDuration = '3s';
    headerText.style.opacity = '1';
}