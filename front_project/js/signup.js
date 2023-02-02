const SERVER_URL = 'http://127.0.0.1:8000'

const signup = async (user) => {
    let response = await fetch(`${SERVER_URL}/user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // 백엔드에서 set-cookie 를 허용
    })

    console.log(response.status);
    // console.log(await response.json());
    return await response.json();
}

const clickSignUp = async () => {
    console.log(document.querySelector('#email'));
    let user = {
        'email': document.querySelector('#email').value,
        'password': document.querySelector('#password').value,
        'fullname': document.querySelector('#name').value,
    }

    let response = await signup(user);
    console.log(response);
}

