





/*Анимации прокуртки до момента*/
document.getElementById('scroll_about').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_about');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_func').addEventListener('click', function() {
  const target = document.getElementById('end_scroll_func');
  target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_rew').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_rew');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_down').addEventListener('click', function() {
  const target = document.getElementById('end_scroll_down');
  target.scrollIntoView({ behavior: 'smooth' });
});


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
/*Анимации прокуртки до момента*/

