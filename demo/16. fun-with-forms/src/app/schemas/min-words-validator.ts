import { createMetadataKey, LogicFn, metadata, MetadataReducer, MIN, SchemaPath, validate } from "@angular/forms/signals";

export const MIN_WORDS = createMetadataKey(MetadataReducer.max<number>());


export function minWords(path: SchemaPath<string>, minValue: number | LogicFn<string, number>) {
    metadata(path, MIN_WORDS, ctx => typeof(minValue) === 'number'
            ? minValue
            :minValue(ctx));

    validate(path, ctx => {
        const value = ctx.value();
        const threshold = ctx.state.metadata(MIN_WORDS)!();

        if (!threshold) return;
            
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