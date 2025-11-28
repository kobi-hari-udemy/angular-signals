import { customError, disabled, max, min, readonly, schema, validateTree } from "@angular/forms/signals";
import { ReviewItem, Role } from "../models/dinner-review.model";

export const reviewItemSchema = schema<ReviewItem>(path => {
      min(path.rating, 1, {
        message: 'Min 1',
      });

      max(path.rating, 5, {
        message: 'Max 5',
      });

      readonly(path.rating, ctx => ctx.valueOf(path.recommendation) === 'no-opinion');


      validateTree(path, (ctx) => {
        const rating = ctx.valueOf(path.rating);
        const recommendation = ctx.valueOf(path.recommendation);
        if (rating >= 4 && recommendation === 'not-recommend') {
          return [
            customError({
              kind: 'rating-conflict',
              message: 'Rating Conflict',
              field: ctx.field.rating,
            }),
            customError({
              kind: 'rating-conflict',
              message: 'Rating Conflict',
              field: ctx.field.recommendation,
            }),
          ];
        }

        return undefined;
      });

})