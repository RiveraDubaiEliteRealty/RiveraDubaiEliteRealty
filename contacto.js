/*Contanto*/
let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    /*scrollY is the web scrollbar position (pixel)*/
    let top = this.scrollY;
    /*index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    When scrolling the web, the classes bg scroll down,
    the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `translateY(${(top * index / 2)}px)`;
        } else if (index == 0) {
            bg.style.transform = `translateY(${(top / 3)}px)`;
        }
    });
    titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;

    /* parallax scroll in tab
    when tab's position is less than 550 px
    from scrollbar position add active class to animate
    and vice versa
    */
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

/*Email*/
const btn = document.getElementById('buttonemail');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_u0fizzr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});