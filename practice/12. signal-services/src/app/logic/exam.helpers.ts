import { Question } from '../models/question.model';

export function generateQuiz(level: number): Question[] {
    const numQuestions = Math.floor(Math.random() * 9) + 8; // Random number between 8 and 16
    return generateArithmeticQuestions(level, numQuestions);
}

function getRandomAnswer(correctAnswer: number, level: number): number {
    const deviation = Math.floor(Math.random() * (level * 2)) + 1;
    const sign = Math.random() < 0.5 ? -1 : 1;
    return parseFloat((correctAnswer + sign * deviation).toFixed(2));
}

const OPERATIONS = ['+', '-', '*', '/'] as const;
type Operation = typeof OPERATIONS[number];

function randomOperation(): Operation {
    return OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];
}

function generateArithmeticQuestions(level: number, numQuestions: number = 10): Question[] {
    const questions: Question[] = [];

    for (let i = 0; i < numQuestions; i++) {
        const num1 = Math.floor(Math.random() * (level * 10)) + 1;
        const num2 = Math.floor(Math.random() * (level * 10)) + 1;
        const operation = randomOperation();
        
        let question = `How much is ${num1} ${operation} ${num2}?`;
        let answer: number = calcAnswer(num1, num2, operation);

        const answers = new Set<number>();
        answers.add(answer);

        while (answers.size < 4) {
            answers.add(getRandomAnswer(answer, level));
        }

        const answersArray = Array
            .from(answers)
            .sort()
            .map(a => a.toString());
            
        const correctAnswerIndex = answersArray.indexOf(answer.toString());

        questions.push({ caption: question, answers: answersArray, correctAnswerIndex });
    }

    return questions;
}

function calcAnswer(num1: number, num2: number, operation: Operation): number {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return parseFloat((num1 / num2).toFixed(2));
    }
}
