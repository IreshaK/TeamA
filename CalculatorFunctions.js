const prompt = require('prompt-sync')();

function calcAddition()
{
    let num1 = parseFloat(prompt('enter 1st number : '))      
    let num2 = parseFloat(prompt('enter 2nd number : '))
    let op = prompt('enter operator : ')
    let ans = 0;
    if (op == '+')
    {
        return ans=num1+num2
    }
}
