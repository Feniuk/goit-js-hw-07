const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value.trim();
    const passwordValue = event.currentTarget.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;
    const formData = {
      email,
      password
    };
    console.log(formData);
    event.currentTarget.reset();
  };
