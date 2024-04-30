async function postJSON(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data)
        });

        return response;
    } catch (error) {
        // console.log(error);
    }
}

async function login(username, password) {
    const result = await postJSON('/api/auth/login', {
        username: username,
        password: password
    });
    if (result.ok) {
        const { token } = await result.json();
        if (token != undefined) {
            localStorage.setItem('token', token);
            return true;
        }
    }

    const { error } = await result.json();
    throw error;
}

async function getUser() {
    token = localStorage.getItem('token');

    if (token != undefined) {
        const response = await fetch('/api/user', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    
        if (response.ok) {
            return response.json();
        }
    }

    return undefined;
}

function logout() {
    localStorage.removeItem('token');
    location.href = 'index.html';
}