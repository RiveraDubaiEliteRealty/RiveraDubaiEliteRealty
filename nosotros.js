let navtabs = document.querySelectorAll('.sliderTab');
    navtabs.forEach(item => {
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('nav-item')){
               
                let lastActive = item.querySelector('li.active');
                let newActive = event.target;
                let bgActive = item.querySelector('.bg-active');
    
                lastActive.classList.remove('active');
                newActive.classList.add('active');
                bgActive.style.left = newActive.offsetLeft + 'px';
    
                let lastContentActive = item.querySelector('.tab.active');
                let newContentActive = document.getElementById(newActive.dataset.target);
                lastContentActive.classList.remove('active');
                newContentActive.classList.add('active');
    
            }
        })
    })
    /*email*/
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