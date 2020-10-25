import React, { useState } from 'react';


export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Indonesia?',
			answerOptions: [
				{ answerText: 'Yogyakarta', isCorrect: false },
				{ answerText: 'Bali', isCorrect: false },
				{ answerText: 'Jakarta', isCorrect: true },
				{ answerText: 'Palembang', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Google?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
			],
		},
		{
			questionText: 'Which Marvel comic villain is an enemy of Spiderman?',
			answerOptions: [
				{ answerText: 'Green Goblin', isCorrect: true },
				{ answerText: 'Joker', isCorrect: false },
				{ answerText: 'Lex Luthor', isCorrect: false },
				{ answerText: 'The Riddler', isCorrect: false },
			],
		},
		{
			questionText: 'How many Game of Thrones seasons are there?',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: true },
			],
		},
	];

	// State object which will hold the current question number the user is on. 
	// This will be initialised to 0 so the quiz takes the first question from the array
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// State object which will store wether we want to show the score screen or not
	const [showScore, setShowScore] = useState(false);

	// State object which will save the score
	const [score, setScore] = useState(0);

	// This function will get called when the user clicks an answer.
	const handleAnswerOptionClick = (isCorrect) => {
		// if isCorrect is true, update our score by 1 
		if (isCorrect) {
			setScore(score + 1);
		}
		// increment the current question value by one, save it to a new variable, and set this new variable into state
		const nextQuestion = currentQuestion + 1;

		// If the next question number is less than the total number of questions, update the state to the next question. 
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
		// Else, we’ve reached the end of the quiz, so show the score screen.
		else {
			setShowScore(true);
		}

	};
	// Function to restart the quiz
	function restartQuiz() {
		window.location.reload();
	}

	return (
		<div className='app'>
			{/* If showScore is true, render the score section markup, else, render the quiz question/answer markup */}
			{showScore ? (
				<div className='score-section'>
					{/* Showing the score */}
					You scored {score} out of {questions.length}
					{/* Retart quiz button */}
					<button className='restart-quiz' onClick={restartQuiz}> <span>Try Again</span></button>
				</div>
			) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							{/* Rendering the Question and Answers */}
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								// render a button for each answerOption, and display the text
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
		</div>
	);
}
