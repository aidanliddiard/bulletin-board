// import functions and grab DOM elements
import { fetchPosts, signUpUser, redirectIfLoggedIn } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postList = document.querySelector('.bulletin-board');

const signInForm = document.getElementById('sign-in');
const singInPassword = document.getElementById('sign-in-password');
const signInEmail = document.getElementById('sign-in-email');

const signUpForm = document.getElementById('sign-up');
const signUpPassword = document.getElementById('sign-up-password');
const signUpEmail = document.getElementById('sign-up-email');

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    console.log(posts);

    posts.forEach(element => {
        postList.append(renderPost(element));
    });
});

signUpForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    console.log(signUpEmail.value, signUpPassword.value);
    //await signUpUser(signUpEmail.value, signUpPassword.value);
    //console.log(user);
    //redirectIfLoggedIn();
});

// const formData = new FormData(signUpForm); 
// const user = { email: formData.get('email'), password: formData.get('password') }; 
// await signUpUser(user.email, user.password);
// console.log(user);
// redirectIfLoggedIn();
