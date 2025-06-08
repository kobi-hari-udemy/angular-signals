# Try it - Getting Started with Resources
In this exercise we will practice the very basics for angular resource apis.
We will:
- Create a resource
- Use to load data from an api
- Display its value
- Display its status
- Trigger a "reload" action
- Set local value
- Support cancellation using Abort Signals

## Step 1 - Create a resource
- Create a resource that calls the `getRandomNumberAsync` api 
  - Make sure to have a default value of -1
  - Display the value of the resource inside:
```html
<span class="value"></span>
```
  
## Step 2 - Display the status
- Locate the place in the ui dedicated to present the status: 
```html
 <span class="status" [attr.data-status]=""
    ></span
  >
```
- Display the status both in the attribute binding and inside the span

## Step 3 - Set the condition of the busy indicator
- Locate the busy indicator
```html
  @if(false) {
  <div class="busy">Loading...</div>
  }
```
- Instead of `false` replace the condition so that it is displayed in any **Pending** Status (both 'loading' and 'reloading')


## Step 4 - Allow to reload the resource
- The ui already comes with a button to reload
```html
  <button (click)="reloadNumber()">Reload Number</button>
```
- Implement the function so that it reloads the resource

## Step 5 - Setting a local value to the resource
- The ui already supports it in the following code:
```html
  <button (click)="setLocalValue(myNumberInput.valueAsNumber)">
    Set Local Value
  </button>
  <input type="number" #myNumberInput>
```
- Implement this function in the `app.ts` file so that it sets the local value to the resource. 

## Step 6 - Support cancellation using `AbortSignal`
- In the `api.ts` file, accept an optional parameter of type `AbortSignal`
- Add an event handler to the `abort` event, so that you clear the timeout
- In the `app.ts` file, in the loader, accept an `options` parameter
- Use it to pass the `AbortSignal` to the api function
- Make sure to print something to the console on calcellation
- Test it in the console. See that you get the cancellation message


