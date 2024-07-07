console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postArticle = document.createElement("article");
postArticle.classList.add("post");
document.body.append(postArticle);

const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
postArticle.append(paragraph);
paragraph.textContent =
  "lorem ipsumlorem ipsuml orem ipsuml orem ipsu mlorem ipsum";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
postArticle.append(postFooter);

const postSpanUsername = document.createElement("span");
postSpanUsername.classList.add("post__username");
postFooter.append(postSpanUsername);
postSpanUsername.innerText = "@username";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postFooter.append(postLikeButton);
postLikeButton.innerText = "♥ Like";

// postLikeButton.addEventListener("click", (abc) => {
//   handleLikeButtonClick(abc);
// });

postLikeButton.addEventListener("click", handleLikeButtonClick);

// Solution from neueFische:
// console.clear();

// function handleLikeButtonClick(event) {
//   const buttonElement = event.target;
//   buttonElement.classList.toggle("post__button--liked");
// }

// const likeButton = document.querySelector('[data-js="like-button"]');
// likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// const article = document.createElement("article");
// const content = document.createElement("p");
// const footer = document.createElement("footer");
// const usernameDisplay = document.createElement("span");
// const generatedLikeButton = document.createElement("button");

// article.classList.add("post");
// content.classList.add("post__content");
// footer.classList.add("post__footer");
// usernameDisplay.classList.add("post__username");
// generatedLikeButton.classList.add("post__button");

// content.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// usernameDisplay.textContent = "@username2";
// generatedLikeButton.textContent = "♥ Like";

// generatedLikeButton.addEventListener("click", handleLikeButtonClick);

// article.append(content, footer);
// footer.append(usernameDisplay, generatedLikeButton);

// document.body.append(article);
