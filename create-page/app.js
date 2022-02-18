import { logout, checkAuth, createPost } from '../fetch-utils.js';

checkAuth();

const createForm = document.getElementById('create-post');
const backBtn = document.getElementById('back');
const logoutBtn = document.getElementById('logout');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(createForm);
    const newPostcard = {
        img: formData.get('img'),
        description: formData.get('description'),
        name: formData.get('name'),
        location: formData.get('location')
    };
    const resp = await createPost(newPostcard);
    console.log(resp);
    location.replace('/');
});

logoutBtn.addEventListener('click', async () => {
    await logout();
});

backBtn.addEventListener('click', () =>{
    location.replace('/');
}); 