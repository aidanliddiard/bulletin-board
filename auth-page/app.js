// import functions and grab DOM elements
import { signUpUser, redirectIfLoggedIn, signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const formData = new FormData(signUpForm); 
    const user = { email: formData.get('email'), password: formData.get('password') }; 
    await signUpUser(user.email, user.password);
    //console.log(user);
    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const user = { email: formData.get('email'), password: formData.get('password') };
    await signInUser(user.email, user.password);
    redirectIfLoggedIn();
});


