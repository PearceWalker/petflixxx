const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
button.addEventListener( 'click', e => {
    answerDiv = e.target.parentElement.nextElementSibling;
    console.log(answerDiv);
    answerDiv.classList.toggle("closed");

})
});