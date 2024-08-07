console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

// const lowerCaseAnswers = cards.map((cardname) => {
//   return cardname.answer.toLowerCase();
// }); // ['as often as you like.', ...]
// console.log(lowerCaseAnswers);

// const questionsAndAnswersTogether = cards.map((answerquestion) => {
//   return answerquestion.question + answerquestion.answer;
// }); // ["How often can I use <header>? - As often as you like.", ...]
// console.log(questionsAndAnswersTogether);

// const questionAndAnswer = cards.map((card) => {
//   return (`question: ${card.question}, answer: ${card.answer}`)
// }); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

// export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

/////////////////////////////////////////////////////
// solution from neue Fische
// const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase()); // ['as often as you like.', ...]

// Konvertiere die Antworten in Kleinbuchstaben mit einer normalen Funktion
// const lowerCaseAnswers = cards.map(function(card) {
//   return card.answer.toLowerCase();
// });
// console.log(lowerCaseAnswers);

// Definition der benannten Funktion
function convertAnswerToLowerCase(card) {
  return card.answer.toLowerCase();
}
// Verwendung der benannten Funktion in map
const lowerCaseAnswers = cards.map(convertAnswerToLowerCase);
console.log(lowerCaseAnswers);



const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
); // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((card) => {
  return { question: card.question, answer: card.answer };
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

console.log(lowerCaseAnswers);
console.log(questionsAndAnswersTogether);
console.log(questionAndAnswer);

function lowerzwei() {
  const variable = cards.map
}