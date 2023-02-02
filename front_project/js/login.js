const SERVER_URL = 'http://127.0.0.1:8000';

const login = async (user) => {
    let response = await fetch(`${SERVER_URL}/user/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // 백엔드에서 set-cookie 를 허용
    })

    // console.log(await response.json());
    return await response.json();
}

const clickLogin = async () => {
    let user = {
        'email': document.querySelector('#email').value,
        'password': document.querySelector('#password').value,
    }
    let result = await login(user);

    if(result.access_token) {
        setCookie('access_token', result.access_token);
    }
}

const setCookie = async (name, value) => {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
}