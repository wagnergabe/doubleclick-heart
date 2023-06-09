const loved = document.querySelector('.loved');
const times = document.querySelector('#times');

let clickTime = 0;

loved.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            console.log('test')
        } else {
            clickTime = new Date().getTime()
        }
    }
})