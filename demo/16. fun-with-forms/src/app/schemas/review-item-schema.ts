import { max, min, schema, validateTree } from "@angular/forms/signals";
import { ReviewItem } from "../models/dinner-review.model";

export const reviewItemSchema = schema<ReviewItem>(path => {
      min(path.rating, 1, {
        message: 'Min 1',
      });
      max(path.rating, 8, {
        message: 'Max 5',
      });
      validateTree(path, (ctx) => {
        const rating = ctx.valueOf(path.rating);
        const recommendation = ctx.valueOf(path.recommendation);
        if (rating >= 4 && recommendation === 'not-recommend') {
          return [
            {
              kind: 'rating-conflict',
              message: 'Rating Conflict',
              fieldTree: ctx.fieldTree.rating,
            },
            {
              kind: 'rating-conflict',
              message: 'Rating Conflict',
              fieldTree: ctx.fieldTree.recommendation,
            },
          ];
        }
        return null;
      });

});