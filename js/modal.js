let modalRegistration = document.querySelector('.modal-registration');
let registrationForm = document.querySelector('.registration-form');
let registrationImage = document.querySelector('.registration-image');

modalRegistration.onclick = () => {
	registrationForm.style.display = 'block';
}

registrationImage.onclick = () => {
	registrationForm.style.display = 'none';
}