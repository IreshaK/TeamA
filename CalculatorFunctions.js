const prompt = require('prompt-sync')();

function calculator()
{
    let num1 = parseFloat(prompt('enter 1st number : '))      
    let num2 = parseFloat(prompt('enter 2nd number : '))
    let operator = prompt('enter operator : ')
    let answer = 0;
    
    addition()    
    {
    if (operator == '+')
    {
        return answer = num1 + num2;
    }
    }

    subtraction()
    {
    if (operator == '+')
    {
        return answer = num1 + num2;
    }
    }

    multiplication()
    {
    if (operator == '*')
    {
        return answer = num1 * num2;
    }
    }

function calcDivision()
{
    let num1 = parseFloat (prompt ('enter 1st number : '))      
    let num2 = parseFloat (prompt ('enter 2nd number : '))
    let operator = prompt ('enter operator : ')
    let answer = 0;
    if (operator == '/')
    {
        return answer = num1 / num2;
    }
}

function calcPower()
{
    let num1 = parseFloat (prompt ('enter 1st number : '))      
    let num2 = parseFloat (prompt ('enter 2nd number : '))
    let operator = prompt ('enter operator : ')
    let answer = 0;
    if (operator == '**')
    {
        return answer = num1 ** num2;
    }
}

}