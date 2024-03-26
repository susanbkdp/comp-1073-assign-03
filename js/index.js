// Get reference to the paragraph element to display student ID and name
const studentInfo = document.createElement('p');
studentInfo.id = 'student-info';

const studentId = '1179966';
const studentName = 'Susan';

// Append student info to the body
document.body.appendChild(studentInfo);

// Initialize a counter variable
let submissionCount = 0;

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    console.log('Form submitted!');

    // Get form values
    const amount = document.getElementById('amount').value;
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const sauce = document.getElementById('sauce').value;
    const topping1 = document.getElementById('topping1').value;
    const topping2 = document.getElementById('topping2').value;
    const topping3 = document.getElementById('topping3').value;
    const cheeseType = document.getElementById('cheeseType').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;



    // Check if any field is empty
    if (
        amount === '' ||
        size === '' ||
        crust === '' ||
        sauce === '' ||
        topping1 === '' ||
        topping2 === '' ||
        topping3 === '' ||
        cheeseType === '' ||
        firstName === '' ||
        lastName === ''
    ) {
        alert('Please fill out all fields.');
        // Exit the function if any field is empty
        return; 
    }


    // Increment the submission count
    submissionCount++;

    // Determine which student info to display based on the submission count
    const deliveryDriver = submissionCount % 2 === 0 ? studentId : studentName;

    // Create Pizza object
    class Pizza {
        constructor(amount, size, crust, sauce, toppings, cheeseType, firstName, lastName) {
            this.amount = amount;
            this.size = size;
            this.crust = crust;
            this.sauce = sauce;
            this.toppings = [topping1, topping2, topping3];
            this.cheeseType = cheeseType;
            this.firstName = firstName;
            this.lastName = lastName;

        }

        getDescription() {
            return `Order placed for ${this.firstName} ${this.lastName}. You ordered ${this.amount} ${this.size} pizza(s) with ${this.crust} crust, topped with ${this.toppings.join(', ')}, ${this.cheeseType} cheese, and ${this.sauce} sauce. Your order will be delivered by driver ${deliveryDriver}.`;
        }
    }

    // Create new Pizza object
    const pizzaOrder = new Pizza(amount, size, crust, sauce, [topping1, topping2, topping3], cheeseType, firstName, lastName);

    // Display pizza order description
    const output = document.getElementById('output');
    output.textContent = pizzaOrder.getDescription();
}

// Add event listener to form submission
const form = document.getElementById('order-and-info');
form.addEventListener('submit', submitForm);
