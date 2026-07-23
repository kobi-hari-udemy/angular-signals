export type Role = 'user' | 'author' | 'chef'
export type Recommendation = 'recommend' | 'not-recommend' | 'no-opinion';


export interface ReviewItem {
    readonly aspect: string;
    readonly rating: number;
    readonly recommendation: Recommendation;
}

export interface DinnerReview {
    readonly username: string;
    readonly role: Role;
    readonly email: string;
    readonly description: string;
    readonly reviews: ReviewItem[];
}


