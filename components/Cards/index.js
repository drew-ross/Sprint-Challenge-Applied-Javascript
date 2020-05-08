// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

const cardCreator = (data) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = data.authorName;

    imgContainer.append(img);
    author.append(imgContainer, name);
    card.append(headline, author);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => {
        //Get article data
        const articlesArray = [];
        const articles = result.data.articles;
        const topicsArrays = Object.entries(articles);
        topicsArrays.forEach(item => item[1].forEach(item => articlesArray.push(item)));
        //Create HTML for each article
        articlesArray.forEach(article => {
            cardsContainer.append(cardCreator(article));
        })
    })
    .catch(error => `Lambda Times could not get articles: ${error}`);

