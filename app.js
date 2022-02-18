// import functions and grab DOM elements
import { fetchPosts, getUser } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postList = document.querySelector('.bulletin-board');
const createBtn = document.getElementById('create');
const loginBtn = document.getElementById('login');

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

loginBtn.addEventListener('click', () => {
    location.replace('/auth-page');
});