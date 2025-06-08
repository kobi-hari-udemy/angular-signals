# Try it - Resources Error Handling

In this exercise we will practice **Error Handling** in resources 

## Step 1 - Create a resource
The API now throws an error when the source value is 57. 
* Try it - see the error in the console and notive that it does not appear in the UI
* As said in the lecture, this is becuase the `value()` signal throws the error and interrupts rendering
  
## Step 2 - Fix the problem
* Find the part in the template that displays the value
```html
  <span class="label">Value</span>
  <span class="value">{{apiNumber.value()}}</span>
```

* Wrap it in an `@if` clause that checks if there is an error. Of course, this part of code needs to be displayed only if there is no error
* If there is an error add a label the says `Error`. And then add a span with class `error` that displays the cause of the error
* Use the `error()` signal, and the `cause` property

