import { Question } from "./question.model";

export interface Quiz {
    readonly id: string;
    readonly displayName: string;
    readonly questions: Question[]
}