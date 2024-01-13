const inputs = document.querySelectorAll('.input');
const avisos = document.querySelectorAll('.aviso-obrigatorio');
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    inputs.forEach((input, index, array) => {
        let inputEstaVazio = input.value === ""

        if (inputEstaVazio) {
            input.classList.remove('borda-verde')
            input.classList.add('borda-vermelha');
            avisos[index].classList.remove('esconder')
        } else {
            input.classList.remove('borda-vermelha')
            input.classList.add('borda-verde')
            avisos[index].classList.add('esconder')
        }

    })
})
