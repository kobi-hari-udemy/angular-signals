export interface Session {
    readonly id: string;
    readonly quizId: string;
    readonly answers: number[];
}