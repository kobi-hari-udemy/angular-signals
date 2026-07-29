import { Injectable } from "@angular/core";
import { DinnerReview } from "../models/dinner-review.model";

export type ReviewErrorFields = 'email' | 'role';
export type ReviewErrors = Partial<Record<ReviewErrorFields, string>>;

@Injectable({providedIn: 'root'})
export class ReviewsService {
    async submitReview(review: DinnerReview): Promise<ReviewErrors> {
        await new Promise(resolve => setTimeout(resolve, 4000));
        const res: ReviewErrors = {};

        // If the email is not in the best-dinner.com domain, reject the review
        if (!review.email.endsWith('@best-dinner.com')) {
            res.email = 'Only best-dinner.com emails are allowed to submit reviews.';
        }

        // If the username is "Kobi Hari", he can only submit reviews as an author
        if ((review.username.toLowerCase() === 'kobi hari') && (review.role !== 'author')) {
            res.role = 'Kobi Hari can only submit reviews as an author.';
        }

        return res;
    }    
}