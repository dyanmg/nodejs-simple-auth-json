const user = getUser().then(user => {
    if (user != undefined) {
        location.href = '.';
        return;
    }
});

const form = document.getElementById('login');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        await login(formData.get('username'), formData.get('password'));
        window.location = '.';
    } catch (error) {
        e.target.reset();
        document.getElementById('error').innerText = error;
    }
    return false;
})