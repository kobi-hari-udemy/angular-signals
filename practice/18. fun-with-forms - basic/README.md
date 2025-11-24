## Target 1 - learn how to work with forms in general
### Getting started with a simple form
- creating model
- creating writeable signal
- calling the form function

### Using the [field] directive
- add json of model value
- create field divs
- add labels and inputs
- connect using field directive

### Basic Validation
- Creating a schema
- Using the built in validators: required, min, max, email
- Validators with parameters: min, max, minLength, maxLength

### Understanding FieldTree and FieldState
- FieldTree Contains Child Field Trees - projecting the structure of the model
- Each FieldTree is also a function
- Calling this function returns FieldState
- FieldState contains many signals with metadata about the field
  - valid / invalid
  - touched / dirty

### How to show validation in the UI
- Applying classes conditionally
- Using CSS to mark inputs as wrong
- Applying class only when "touched"

### How to present errors
- Showing errors only on condition
- Showing error by kind
- Adding messages
- Presenting all messages in a loop

### Custom Validation
- Using the `validate` function with custom logic
- Returning `customError` in `validate`

### Conditional Validation
- Using the `when` property in validators
- Using function parameters in parameterized validators

### Advanced Validation
- How to validate by other fields (email is only required if you are not an author)
- How to validate more then one field at a time
  
### Disabling Controls
- Understanding the `disabled` function
- What disabled means for validation
- The `readonly` and what it means too

### Hiding controls
- The `hidden` function and what it means
- Hiding the controls also from the UI

### Nested Forms
- Understanding the "hierarchical" nature of the fields tree
- Example of how to work with nested form

### Form Arrays
- Editing an array field
- Adding and removing items from the array
- Validating the array using `applyEach`

### Submitting a form
- Understanding the "submit" function
- `submit` "touches" the entire form
- Understanding the "submitting" state
- Presenting "server" errors in the form after submitting

## Target 2 - Reusability in Signal Forms
### Automatic field state styling
- Creating a reusable directive
- Accessing the FieldTree and FieldState of the field
- Applying conditional styling based on the value

### Creating a field wrapper
- Creating a component to present field metadata
- Projecting the content input

### Adding metadata to field wrapper
- Presenting the errors
- Presenting the label
- Presenting required * on required properties

### Sub Form - A Component that receives [field] input
- Create sub form for nested object
- Receive the "field" input
- Use it as form - and continue normally

### Reusable Scheme
- Using the `schema` function to create reusable schema
- Applying the schema in the form main schema

### Creating custom Field Controls
- Starting with ease - the `value` model

### Supporting disabled and readonly states
- Supporting disabled state
- Supporting readonly state

### Understanding control metadata
- How the "range" input sets its boundaries?
- Receving the max input into our custom control
- Applying it in the UI








