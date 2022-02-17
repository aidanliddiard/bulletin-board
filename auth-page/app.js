// import functions and grab DOM elements
import { signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const singInPassword = document.getElementById('sign-in-password');
const signInEmail = document.getElementById('sign-in-email');

const signUpForm = document.getElementById('sign-up');
const signUpPassword = document.getElementById('sign-up-password');
const signUpEmail = document.getElementById('sign-up-email');

signUpForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(signUpForm); 
    const user = { email: formData.get('email'), password: formData.get('password') }; 
    await signUpUser(user.email, user.password);
    console.log(user);
    redirectIfLoggedIn();
});


