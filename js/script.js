const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

document.querySelector('#search-input').addEventListener('input', filterList)

    function filterList() {
        const searchInput = document.querySelector('#search-input')
        const filter = searchInput.value.toLowerCase()
        const listItems = document.querySelectorAll('.box')

        listItems.forEach((item) => {
            let text = item.textContent
            if(text.toLowerCase().includes(filter.toLowerCase())){
                item.style.display = ''
            }
            else {
                item.style.display = 'none';
            }
        });
    }