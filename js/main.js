function burgerMenu(){
    const menu=document.querySelector('#menu')
    const burger=document.querySelector('.burger')

    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    })
}
burgerMenu()

document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)


const modeBtn=document.querySelector('#mode')
modeBtn.addEventListener('click', ()=>{
    document.querySelector('html').classList.toggle('dark')
    if(document.querySelector('html').classList.contains('dark')){
        localStorage.theme='dark'
    } else {
        localStorage.theme='light'
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const mainImage = container.querySelector('#mainImage');
        const altImage = container.querySelector('#altImage');

        function swapImages() {
            altImage.classList.toggle('opacity-0');
            mainImage.classList.toggle('opacity-0');
        }

        container.addEventListener('mouseenter', swapImages);
        container.addEventListener('mouseleave', swapImages);
        container.addEventListener('click', swapImages);
    });
});

