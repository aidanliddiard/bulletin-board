import { logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');
const createBtn = document.getElementById('create');

logoutBtn.addEventListener('click', async () => {
    await logout();
});

createBtn.addEventListener('click', () => {
    location.replace('/create-page');
});