// import functions and grab DOM elements
import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postList = document.querySelector('.bulletin-board');

window.addEventListener('load', async () => {
    const posts = await fetchPosts();
    console.log(posts);

    posts.forEach(element => {
        postList.append(renderPost(element));
    });
});
