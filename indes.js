const menuBtn = document.querySelector('.menu')
    panel = document.querySelector('.filter')
    panelStyle = window.getComputedStyle(panel);
    hearts = document.querySelectorAll('.far')

menuBtn.addEventListener('click', () => {
    if(panelStyle.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)'){
        panel.style.clipPath = 'circle(100% at 50% 50%)'
    } else {
        panel.style.clipPath = 'circle(0% at 100% 0%)'
    }
})

document.addEventListener('mouseup', event => {
    if(panelStyle.getPropertyValue('clip-path') === 'circle(100% at 50% 50%)'){
        if (!panel.contains(event.target))
            panel.style.clipPath = 'circle(0% at 100% 0%)'
    }
})

function changeHeart(x) {
    x.classList.toggle('fas')
    x.classList.toggle('far')
}