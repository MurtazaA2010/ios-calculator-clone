let expression = "";
const display = document.querySelector('.display');

document.querySelectorAll('.button').forEach((button)=> {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                const result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        } else if (buttonText === 'AC'){
            expression = "";
            display.value = expression;
        } else {
            expression += buttonText;
            display.value = expression;
        }
    })
})
 