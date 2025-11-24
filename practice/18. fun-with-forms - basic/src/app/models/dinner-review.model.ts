export type Role = 'user' | 'author' | 'chef'

export interface DinnerReview {
    readonly username: string;
    readonly role: Role;
    readonly email: string;
    readonly description: string;
    readonly rating: number;
 
}


