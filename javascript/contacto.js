//LIBRERIA EMAILJS y SWEETALERT

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_va1wqvc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        text: 'Correo enviado',
        icon: 'success',
        background: 'black',
        confirmButtonColor: "rgb(16, 56, 40)", 
        color : 'white'       
     })
     ;
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
