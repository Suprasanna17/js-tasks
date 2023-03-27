const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const reloadButton = document.getElementById('reload');
const questions = [
	{
		question: "What is the capital of France?",
		answers: {
			a: "London",
			b: "Paris",
			c: "Madrid",
			d: "Berlin"
		},
		correctAnswer: "b"
	},
	{
		question: "What is the largest country in the world?",
		answers: {
			a: "China",
			b: "USA",
			c: "Russia",
			d: "Canada"
		},
		correctAnswer: "c"
	},
	{
		question: "What is the currency of Japan?",
		answers: {
			a: "Euro",
			b: "Yen",
			c: "Dollar",
			d: "Pound"
		},
		correctAnswer: "b"
	},
	{
		question: "Who wrote the book 'The Hitchhiker's Guide to the Galaxy'?",
		answers: {
			a: "J.K. Rowling",
			b: "George Orwell",
			c: "Douglas Adams",
			d: "Stephen King"
		},
		correctAnswer: "c"
	},
	{
		question: "What is the largest mammal in the world?",
		answers: {
			a: "Elephant",
			b: "Blue whale",
			c: "Giraffe",
			d: "Hippopotamus"
		},
		correctAnswer: "b"
	}
];

function buildQuiz() {
	const output = [];

	questions.forEach((currentQuestion, questionNumber) => {
		const answers = [];

		for (let letter in currentQuestion.answers) {
			answers.push(
				`<label>
					<input type="radio" name="question${questionNumber}" value="${letter}">
					${letter}: ${currentQuestion.answers[letter]}
				</label>`
			);
		}

		output.push(
			`<div class="question">
				<h2>${currentQuestion.question}</h2>
				<div class="answers">${answers.join('')}</div>
			</div>`
		);
	});

	quizContainer.innerHTML = output.join('');
}

function showResults() {
	const answerContainers = quizContainer.querySelectorAll('.answers');
	let numCorrect = 0;

	questions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		if (userAnswer === currentQuestion.correctAnswer) {
			numCorrect++;
			answerContainers[questionNumber].style.color = 'green';
		} else {
			answerContainers[questionNumber].style.color = 'red';
		}
	});

	const score = (numCorrect / questions.length) * 100;
	const result = `<div class="result">You scored ${score.toFixed(2)}%</div>`;
	quizContainer.innerHTML += result;
	submitButton.style.display = 'none';
	reloadButton.style.display = 'block';
}

function resetQuiz() {
	quizContainer.innerHTML = '';
	submitButton.style.display = 'block';
	reloadButton.style.display = 'none';
	buildQuiz();
}

buildQuiz();

submitButton.addEventListener('click', showResults);
reloadButton.addEventListener('click', resetQuiz);