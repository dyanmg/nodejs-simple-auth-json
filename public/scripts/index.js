const user = getUser().then(user => {
    if (user == undefined) {
        location.href = 'login.html';
        return;
    }

    document.getElementById('name').innerText = user.name;
});

document.getElementById('logout').addEventListener('click', e => {
    logout();
});