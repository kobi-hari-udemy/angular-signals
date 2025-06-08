# Try it - Resources with Params

In this exercise we will add to the resources a dependency on a source signal

## Step 1 - Create a resource
- In `app.ts` find the definition of the resource

```typescript
  readonly apiNumber = resource({
    loader: (options) => this.api.getRandomNumberAsync(options.abortSignal),
    defaultValue: -1
  });
```

* Add the `params` property, with an expression that returns an object that contains the value of the `source` signal
* Now modify the loader so that it uses this value from the `options` parameter
* Do not forget to also pass the abort signal.
  
## Step 2 - Experiment
* Open the application console and try different sequences of events
  * Setting local value
  * Reloading
  * Changing the source
  * Changing the srouce several times quickly
  * Reloading while source value is calculated
  * setting local value while source value is calculated



