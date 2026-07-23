import { Injectable } from "@angular/core";
import { DinnerReview } from "../models/dinner-review.model";
import { FieldTree, TreeValidationResult } from "@angular/forms/signals";

@Injectable({providedIn: 'root'})
export class ReviewsService {

    async submitReview(reviewForm: FieldTree<DinnerReview>) {
        await new Promise(resolve => setTimeout(resolve, 4000));
        const res: TreeValidationResult[] = [];

        const review = reviewForm().value();
        // If the email is not in the best-dinner.com domain, reject the review
        if (!review.email.endsWith('@best-dinner.com')) {
            res.push({
                message: 'Only best-dinner.com emails are allowed to submit reviews.', 
                kind: 'email-domain', 
                fieldTree: reviewForm.email
            });
        }

        // If the username is "Kobi Hari", he can only submit reviews as an author
        if ((review.username.toLowerCase() === 'kobi hari') && (review.role !== 'author')) {
            res.push({
                message: 'Kobi Hari can only submit reviews as an author.', 
                kind: 'invalid-role', 
                fieldTree: reviewForm.role
            });
        }

        return res.length ? res : undefined;
    }
    
}