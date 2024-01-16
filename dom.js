const elementWrapper=document.getElementById("content");

  for(let i=0; i<11; i++) {
    if(i===0){
      const card = createCard();
      const cardImage = createImage();
      const cardBody = createBodyX();
      const cardPrice = createPrice();
      const box = createBox();

      box.append(cardBody, cardPrice);
      card.append(cardImage, box);
      elementWrapper.append(card);
    }else{
      const card = createCard();
      const cardImage = createImage();
      const cardBody = createBody();
      const cardPrice = createPrice();

      card.append(cardImage, cardBody, cardPrice);
      elementWrapper.append(card);
    }
  }

function createCard () {
  const el=createElement("div", ['card']);
  return el;
}

function createBox(){
  return createElement('div', ['card-box']);
}

function createImage(){
  const imageAttributes=[
    {
      prop: 'src',
      value: 'images/camera.png',
    },
    {
      prop: 'alt',
      value: 'photo',
    }
  ];
  const image=createElement('img', ['card-image-photo'], imageAttributes);
  const box=createElement('div', ['card-image'], null, null, null, [image], 'append');
  console.log(box);
  return box;
}

function createBody(){
  const title=createElement('h2', ['card-body__title'], null, 'Canon EOS 5D Mark III Body');
  console.log(title);
  const text=createElement('p', ['card-body__description'], null, 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов.');
  //const line=createElement('hr', ['card-body__line']);
  const body=createElement('div', ['card-body'], null, null, null, [title, text], 'append');
  return body;
}
function createBodyX(){
  const title=createElement('h2', ['card-body__title'], null, 'Canon EOS 5D Mark III Body');
  const text=createElement('p', ['card-body__description'], null, 'Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей, профессиональных фотографов и видеооператоров.Преемник успешной модели EOS 5D Mark ||.Фотоаппарат имеет 22.3 Мп. CMOS-сенсор размером 36х24 мм, 14-битный процессор DIGIC 5+, 61-точечный автофокус.');
  const price=createElement('p', ['card-body__old-price'], null, '4 400,00 руб');
  const body=createElement('div', ['card-body'], null, null, null, [title, text, price], 'append');
  return body;
}

function createPrice(){
  const price=createElement('p', ['card-price__amount'], null, '3 200,00 руб.');
  const imageAttributes=[
    {
      prop: 'src',
      value: 'images/basket.svg',
    },
    {
      prop: 'alt',
      value: 'basket',
    }
  ];
  const image=createElement('img', ['add-to-basket'], imageAttributes);
  const button=createElement('button', ['card-price__add'], null, null, null, [image], 'append');
  const box = createElement('div', ['card-price'], null, null, null, [price, button], 'append');
  return box;
}

function createElement(tag, classList, attributes, textContent, heandlers, children, childrenAction){
  const element=document.createElement(tag);

  if (classList?.length){
    element.classList.add(...classList);
    
  }

  if (attributes?.length){
    attributes.forEach(({prop, value})=>{
      element.setAttribute(prop, value);
    });
  }

  if (textContent){
    element.textContent=textContent;
  }

  if (heandlers?.length){
    heandlers.forEach(({event, heandler})=>{
      element.addEventListener(event,heandler);
    });
  }

  if (children){
    element[childrenAction](...children);
  }

  return element;
}