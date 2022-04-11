const vacancy = document.querySelector('.vacancy__list-js');
vacancy.addEventListener('click', (e) => {
    const vac = e.target.closest('.vacancy__item-js');
    if(vac) {
        if(vac.classList.contains('vacancy__item_opened')) {
            vac.classList.toggle('vacancy__item_opened');    
        } else {
            const vacancyOpened = vacancy.querySelector('.vacancy__item_opened')
            vacancyOpened && vacancyOpened.classList.remove('vacancy__item_opened');
            vac.classList.add('vacancy__item_opened');
        }
    }
})