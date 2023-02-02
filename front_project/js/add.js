const SERVER_URL = 'http://127.0.0.1:8000';

// 카테고리 등록
const postCategory = async (category) => {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/category`, {
        method: 'POST',
        body: category,
        headers: {
            'Authorization': `Bearer ${token}` // 내가 누구인지에 대한 정보 포함해서 POST 요청
        },
    })

    return await response.json();
}

const addCategory = async () => {
    let form = document.querySelector('#form');
    let formData = new FormData(form);
    let result = await postCategory(formData);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// 카테고리 보여주기
const getCategory = async () => {
    let response = await fetch(`${SERVER_URL}/blog/category`);

    return await response.json();
}

const showCategories = async() => {
    let categories = await getCategory();
    let categoryLists = document.querySelector('#category-lists');

    categories.forEach((category) => {
        categoryLists.insertAdjacentHTML('beforeend', 
                                        `<div>
                                            <input type="checkbox" id="${category.id}" name="category" value=${category.id} />
                                            <label for="coding">${category.name}</label>
                                        </div>`)
    })
}

showCategories();

// 글 등록
const postArticle = async (article) => {
    let token = getCookie('access_token');
    let response = await fetch(`${SERVER_URL}/blog/article`, {
        method: 'POST',
        body: article,
        headers: {
            'Authorization': `Bearer ${token}` // 내가 누구인지에 대한 정보 포함해서 POST 요청
        },
    })

    console.log(article);

    return await response.json();
}

const addArticle = async () => {
    let form = document.querySelector('#article-form');
    let formData = new FormData(form);
    let result = await postArticle(formData);

    console.log(result);
    console.log(result.status);
}