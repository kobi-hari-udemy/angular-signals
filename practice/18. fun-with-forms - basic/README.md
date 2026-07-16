### Getting started with a simple form
- creating model
- creating writeable signal
- calling the form function

### Using the [field] directive
- connect controls using field directive

### Basic Validation
- Creating a schema
- Using the built in validators: required, min, max, email
- Validators with parameters: min, max, minLength, maxLength

### Understanding FieldTree and FieldState
- FieldTree Contains Child Field Trees - projecting the structure of the model
- Each FieldTree is also a function
- Calling this function returns FieldState
- FieldState contains many signals with metadata about the field
  - valid / invalid / errors
  - touched / dirty

### How to show validation in the UI
- Applying classes conditionally
- Using CSS to mark inputs as wrong
- Applying class only when "touched"

### How to present errors
- Showing errors only on condition
- Showing error by kind
- Adding messages to schema
- Presenting all messages in a loop

### Custom Validation
- Using the `validate` function with custom logic
- Returning `customError` in `validate`

### Conditional Validation
- Using the `when` property in validators

### Advanced Validation
- How to validate by other fields (email is only required if you are not an author)
