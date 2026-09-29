const form=document.getElementById('contact-form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name = form.querySelector('input[type="text"]').value;

    alert(`Thank you, ${name}, for reaching out! We will get back to you soon.`);

    form.request();
})