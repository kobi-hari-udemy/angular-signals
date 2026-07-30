import { LogicFn, SchemaPath, validate } from "@angular/forms/signals";

export function minWords(path: SchemaPath<string>, minValue: number | LogicFn<string, number>) {
    validate(path, ctx => {
        const value = ctx.value();
        const threshold = typeof(minValue) === 'number'
            ? minValue
            :minValue(ctx);
            
        const wordsCount = value.trim().split(/\s+/).length;
        if (wordsCount < threshold) {
          return {
            kind: 'min-words',
            message: `Must have at least ${threshold} words. Current count: ${wordsCount}`,
          };
        }
        return null;

    })

}