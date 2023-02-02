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
                                        `<ul id=${article.id}>
                                            <li class="title">제목: ${article.title}</li>
                                            <li class="content">내용: ${article.content}</li>
                                            <li class="author">작성자: ${article.author}</li>
                                            <li class="category">카테고리: ${article.category.name}</li>
                                        </ul>`)
    })
}

showArticles();