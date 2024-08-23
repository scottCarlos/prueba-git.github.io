class Calculadora {
    constructor (_consolaUp, _consolaDown, _consolaOperator, _consolaAns) {
        this.up = _consolaUp;
        this.down = _consolaDown;
        this.operator = _consolaOperator;
        this.ans = _consolaAns;
    }
    operacion(valor) {
        if (this.down.textContent == '') this.down.textContent = 0;
        if (this.operator.textContent == "") {
            if (this.up.textContent == '') {
                this.up.textContent = this.down.textContent;
                this.down.textContent = '';
            }
        }
        this.operator.textContent = valor;
    }
    numberChange(number) {
        this.down.textContent += number;
    }
    delete() {
        if (this.down.textContent != '') {
            this.down.textContent = this.down.textContent.slice(0, -1);
        }
    }
    deleteAll() {
        if (this.down.textContent != '') {
            this.down.textContent = '';
        }   else{
            if (this.up.textContent == '') {
                this.ans.textContent = '';
                this.ans.setAttribute('value', '');
            }   else {
                this.up.textContent = '';
                this.operator.textContent = '';
            }
            
        }
    }

    equal() {
        const variableOperador = this.operator.textContent;
        if (variableOperador != '') {
            const number1 = parseFloat(this.up.textContent);
            const number2 = parseFloat(this.down.textContent);
            let resultado;
            if (variableOperador == '+') {
                resultado = number1 + number2;
            }   else if (variableOperador == '-') {
                resultado = number1 - number2;
            }   else if (variableOperador == 'X') {
                resultado = number1 * number2;
            }   else {
                if (number2 == 0) {
                    number2 = 1;
                }
                resultado = number1 / number2;
            }
            resultado = resultado.toString();
            if (resultado.length > 10) {
                resultado = parseFloat(resultado);
                resultado = resultado.toFixed(10);
                resultado = resultado.toString();
            }
            this.down.textContent = resultado;
            this.up.textContent = '';
            this.operator.textContent = '';
            this.ans.setAttribute('value', resultado);
            this.ans.textContent = "ANS";
        }
    }

    func_ans() {
        if (this.ans.innerHTML != '') {
            this.down.textContent = this.ans.getAttribute('value');
        }
    }

    decimal() {
        if (this.down.innerHTML.includes('.') === false) {
            this.down.textContent += '.';
        }
    }
}
const consolaUp = document.getElementById('consola-top');
const consolaDown = document.getElementById('consola-down');
const consolaAns = document.getElementById('consola-ans');
const consolaOperation = document.getElementById('consola-operacion');
const arrayOperaciones = document.querySelectorAll('.button-operation');
const arrayNumber = document.querySelectorAll('.button-number');
const ac = document.getElementById('button-ac');
const deletebutton = document.getElementById('button-delete');
const buttonEqual = document.getElementById('button-equal');
const buttonAns = document.getElementById('button-ans');
const buttonDecimal = document.getElementById('button-decimal');
const consola = new Calculadora (consolaUp, consolaDown, consolaOperation, consolaAns);

arrayOperaciones.forEach((e) => {
    e.addEventListener('click', () => {
        consola.operacion(e.textContent)
    })
})
arrayNumber.forEach((e) => {
    e.addEventListener('click', () => {
        consola.numberChange(e.textContent)
    })
})
deletebutton.addEventListener('click', () => {
    consola.delete();
})
ac.addEventListener('click', () => {
    consola.deleteAll();
})
buttonEqual.addEventListener('click', () => {
    consola.equal();
})
buttonAns.addEventListener('click', () => {
    consola.func_ans();
})
buttonDecimal.addEventListener('click', () => {
    consola.decimal();
})