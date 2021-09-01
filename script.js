//alt + shift + arrow keys up/down allow you to copy past consecutive lines. try it!
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
//The parameters in a constructor function set the values of the properties on the new objects that the constructor constructs.
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear(); //you want it to load fresh, with no operands being where they shouldn't be.
    }

    clear(){
        this.currentOperand= '';
        this.previousOperand = '';
        this.operation = undefined; //does this create an operation prop on the new object and set it to undefined?
    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return;
        //the return statement above takes you out of the method 'appendNumber'.
        //The return statement terminates the execution of a function.
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return;
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        //look up exactly what innerText does
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

//done at the 16:00 mark:
const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const deleteButton = document.querySelector(`[data-delete]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const previousOperandTextElement = document.querySelector(`[data-previous-operand]`);
const currentOperandTextElement = document.querySelector(`[data-current-operand]`);

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{ //what do foreach's do?? does it read: "for each button element
    // selected on the const numberButtons, add an event listener. When the event is triggered
    // by a button being clilcked, execute the 2 methods in the statement block."? I believe so.
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button =>{ 
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

//stopped at [25:00]