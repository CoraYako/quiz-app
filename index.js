const correctAnswers = ["D", "C", "C", "C", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const tryAgainButton = document.querySelector(".reload");
const questions = document.querySelectorAll(".question");

console.log(questions[0])

form.addEventListener("submit", event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value
    ];

    userAnswers.forEach((answer, index) => {
        answer === correctAnswers[index] ?
            (questions[index].classList.add("correct"), score++)
            :
            questions[index].classList.add("wrong")
    });

    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/5!`;
});

tryAgainButton.addEventListener("click", event => {
    location.reload();
});