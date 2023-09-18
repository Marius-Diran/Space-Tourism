const link = document.querySelectorAll('a');
const listItems = document.querySelectorAll('li');

link.forEach(link =>{
  link.addEventListener('click', function(event) {
    listItems.forEach(item => {
      if(item === event.target.parentElement){
        item.style.borderBottom = '3px solid rgb(255, 255, 255)';
      } else{
        item.style.borderBottom = 'none';
      }
    });
  });
});