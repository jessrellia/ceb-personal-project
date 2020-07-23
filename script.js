const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    // console.log(`this ${number}`)
    calculatorScreen.value = parseFloat(number)
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let calculated = 0;

const inputNumber = (number) => {
    // console.log(`calculated ${calculated}`)
    if(currentNumber === '0' || calculated===1){
        currentNumber = number
        calculated = 0
        count = 0;
    }
    else {
        currentNumber += number
    }   
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator===''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')
let count = 0;

equalSign.addEventListener('click', () => {
    // console.log(`count ${count}`)
    // console.log(currentNumber)
    // console.log(prevNumber)
    if(count===0){
        calculate()
        updateScreen(currentNumber)
        count++;
    }
    else{
        prevNumber = currentNumber
    }
})

const calculate = () => {
    let res = ''
    switch(calculationOperator){
        case "+":
            res = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            res = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            res = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            res = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            // Enable percentage calculation
            res = parseFloat(prevNumber) / 100
            break;
        default:
            break;
    }
    currentNumber = res
    calculationOperator = ''
    calculated = 1
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector(".decimal")

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot
}
