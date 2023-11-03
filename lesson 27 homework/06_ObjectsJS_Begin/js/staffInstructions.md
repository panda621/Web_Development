## Instructions

### 1. Create a JavaScript File:
- Start by creating a new JavaScript file called `staff.js`, in the js folder of `06_ObjectsJS_Begin` project.

### 2. Define the `Staff` Class:
- In the JavaScript file, define the `Staff` class using the `class` keyword, use the previous book, library, and person implementations as references on how to tackle this question. Should you need more information on how to implement JS classes follow the below link.
   - [Defining Classes in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### 3. Add Class Fields:
   - Inside the `Staff` class, define the following fields (properties/traits) that each `Staff` object will have:
     - `name` (*required*): This field represents the staff member's name.
     - `email` (*required*): Use this field to store the staff member's email address.
     - `staffID` (*required*): Store a unique identifier for each staff member.
     - `verificationStatus` (*optional*): Indicates whether the staff member's identity is verified.
     - `assignedTasks` (*optional*): An array to store the tasks assigned to the staff member.
     - `workingDays` (*optional*): An array to store the days of the week the staff member works.

   - [Class Fields/Traits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes)

### 4. Add Class Methods:
   - Define the following methods inside the `Staff` class. Notice that the parameters are indicated in the brackets after the name of the function:
     - `changeUsername(username)`: This method allows changing the staff member's username.
     - `changeEmail(email)`: Implement this method to update the staff member's email address.
     - `changeVerificationStatus(status)`: Use this method to modify the verification status.
     - `assignTask(task)`: Implement this method to assign a task to the staff member.
     - `assignWorkingDay(day)`: This method adds a working day to the staff member's schedule.

   - Be sure to add comments explaing what the function is for and why it needs the parameter mentioned. Try **focusing on the logic** rather than the literals (i.e the explanation shouldn't say *the changeUsername(username) method take an input because the question requires it to be implemented like that* but explain the logic instead. This should therefore read *The changeUsername(username) method takes a parameter, username, because in order to change an existing username the user should provide an alternative*)

   - [Class Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### 5. Export the `Staff` Class:
   - At the end of the JavaScript file, export the `Staff` class so that it can be used in other parts of your application.


### 6. Reference Documentation:
   - JavaScript Classes: Learn how to define and use classes in JavaScript. [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
