const quote = document.getElementById('quote');
const submitQuote = document.getElementById('submitQuote');
const quoteList = document.getElementById("quoteList");

//temperary quote storage array of objects
const arr = [];
/* TODO: create event listener for submit button also need form validation in browser required attribute
Store the quote in an array for now until you have the node server setup
 */

 function displayQuote() {
   //create for loop cycle through arr and use innerHTML to display in <p>
   const para = document.createElement('p');
   para.innerText = arr[arr.length-1];
   quoteList.appendChild(para);
 }
//need to add "" attribution, author, check for pronouns and add tips source




function addQuote(){
  arr.push(quote.value);
  displayQuote();
}

submitQuote.addEventListener("click", addQuote);
