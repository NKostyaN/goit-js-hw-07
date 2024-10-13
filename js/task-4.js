const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formOnSubmit);

function formOnSubmit(event) {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };

  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    event.target.reset();
  }
}
