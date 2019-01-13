const baseUrl = 'http://localhost:8700';

function getJson(endpoint) {
    return fetch(
        baseUrl + endpoint,
        {
            mode: 'cors',
            credentials: 'include'
        })
        .then(response => response.json());
}

function postJson(endpoint, data) {
    return fetch(
        baseUrl + endpoint,
        {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data ? JSON.stringify(data) : null,
        })
        .then(response => response.json());
}

export function login(id_token) {
    return postJson('/signin', { id_token });
}

export function logout() {
    return postJson('/signout');
}

export function getCrashes(appCode) {
    return getJson(`/crashes?appcode=${appCode}`);
}