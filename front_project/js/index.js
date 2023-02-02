const SERVER_URL = 'http://127.0.0.1:8000';

const getArticles = async () => {
    let response = await fetch(`${SERVER_URL}/blog/article`)
    
    return await response.json();   
}

const showArticles = async () => {
    let articles = await getArticles();
    
    let articleLists = document.querySelector('#article-lists');
    articles.forEach((article) => {
        articleLists.insertAdjacentHTML('afterend',
                                        `<ul class="article" id=${article.id} onclick="openModal(${article.id})">
                                            <img src="${article.image}">
                                            <li class="title">제목: ${article.title}</li>
                                            <li class="content">내용: ${article.content}</li>
                                            <li class="author">작성자: ${article.author}</li>
                                            <li class="category">카테고리: ${article.category.name}</li>
                                        </ul>`)
    })
}

showArticles();

// 모달 창 오픈하기
const getArticle = async(id) => {
    let response = await fetch(`${SERVER_URL}/blog/article/${id}`);

    return await response.json();
}

const openModal = async (id) => {
    // modal : 클래스 + show
    let result = await getArticle(id);

    let modal = document.querySelector('#modal');
    let modalTitle = document.querySelector('#modal-title');
    let modalContent = document.querySelector('#modal-content');
    let modalCategory = document.querySelector('#modal-category');
    let modalAuthor = document.querySelector('#modal-author');

    modalTitle.innerText = result.title;
    modalContent.innerText = result.content;
    modalCategory.innerText = result.category.name;
    modalAuthor.innerText = result.author;

    modal.classList.add('show');
}

const closeModal = () => {
    let modal = document.querySelector('#modal');
    modal.classList.remove('show');
}