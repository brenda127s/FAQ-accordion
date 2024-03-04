const plusIcon = document.querySelectorAll('.icon-plus');
const paragraphs = document.querySelectorAll('.answers');
const minusIcon = document.querySelectorAll('.icon-minus');
const question = document.querySelectorAll('.questions');

plusIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        paragraphs[index].classList.toggle('active');
        plusIcon[index].classList.toggle('icon-minus');
    });
});

question.forEach((text, index) => {
    text.addEventListener('click', () => {
        paragraphs[index].classList.toggle('active');
        plusIcon[index].classList.toggle('icon-minus');
    });
});