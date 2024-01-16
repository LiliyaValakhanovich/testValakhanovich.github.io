const menu = document.querySelector('.header__burger-menu');
const modal = document.querySelector('.main__filters-small__modal');
const closeBtn=document.querySelector('.main__filters-small__modal');
const logotype=document.querySelector('.drop-down-logotype');
const brand=document.querySelector('.drop-down-brand');

function handleClick () {
  if(menu.closest('menu-visible')){
    menu.classList.remove('menu-visible');
  } menu.classList.add('menu-visible');
}

function appearModal(){
  modal.style.display='block';
}
function closeModal(){
  closeBtn.style.display='none';
}
function openDropDown(){
  logotype.style.display='block';
}
function openBrand(){
  brand.style.display='block';
}