// import functions and grab DOM elements
import { fetchPosts, getUser, logout } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postList = document.querySelector('.bulletin-board');
const createBtn = document.getElementById('create');
const authBtn = document.getElementById('auth');

const user = getUser();
console.log(user);
if (user) {
    authBtn.textContent = 'Logout';
    authBtn.addEventListener('click', async () => {
        await logout();
    });
}
else { 
    authBtn.textContent = 'Login'; 
    authBtn.addEventListener('click', () => {
        location.replace('/auth-page');
    });
}

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    console.log(posts);

    posts.forEach(element => {
        postList.append(renderPost(element));
    });
});

createBtn.addEventListener('click', () => {
    const user = getUser();
    if (!user){
        location.replace('/auth-page');
    }
    else {
        location.replace('/create-page');
    }
});

