import {
  aggregateMetadata,
  customError,
  LogicFn,
  maxMetadataKey,
  metadata,
  SchemaPath,
  validate,
} from '@angular/forms/signals';

export const MIN_WORDS = maxMetadataKey();

export function minWords(path: SchemaPath<string>, minValue: number | LogicFn<string, number>) {
  aggregateMetadata(path, MIN_WORDS, (ctx) =>
    typeof minValue === 'number' ? minValue : minValue(ctx)
  );

  validate(path, (ctx) => {
    const value = ctx.value();
    const threshold = ctx.state.metadata(MIN_WORDS)();

    if (threshold === undefined) return;

    // check that there are at least 10 words
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount < threshold) {
      return customError({
        kind: 'min-words',
        message: `Description needs to be at least ${threshold} words long (currently there are ${wordCount} words)`,
      });
    }

    return undefined;
  });
}
