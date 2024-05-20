
document.addEventListener('DOMContentLoaded', function() {
let btnNext=document.querySelector('.arrow.next');
let btnBack=document.querySelector('.arrow.back');
let container = document.querySelector('.container')
let list = document.querySelector('.list')
let thumb = document.querySelector('.thumb')

console.log(btnNext)

btnNext.addEventListener('click', function () {
  console.log('Next button clicked')
  moveItemsOnClick('next');
});


btnBack.addEventListener('click', function () {
  moveItemsOnClick('back');
});



// btnNext.onclick = () => moveItemsOnClick('next')
// btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
  let listItems= document.querySelectorAll('.list .list-item')
  let thumbItems= document.querySelectorAll('.thumb .thumb-item')




  if(type === 'next'){
    list.appendChild(listItems[0])
    thumb.appendChild(thumbItems[0])
    container.classList.add('next')
    }else{
      list.insertBefore(listItems[listItems.length - 1], listItems[0]);
      thumb.insertBefore(thumbItems[thumbItems.length - 1], thumbItems[0]);
      container.classList.add('back');

    }

    setTimeout(()=>{
      container.classList.remove ('next')
      container.classList.remove ('back')
    }, 500);

  }
});

