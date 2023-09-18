const link = document.querySelectorAll('a');

link.forEach(link =>{
  link.addEventListener('click', function(event)  {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
      if(item === event.target){
        item.style.borderBottom = '3px solid rgb(255, 255, 255)';
      } else{
        item.style.borderBottom = 'none';
      }
    });
  });
});