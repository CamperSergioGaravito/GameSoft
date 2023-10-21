export function eliminarCliente() {
    const checkbox = document.getElementById('clienteTbody').querySelectorAll('input[type=checkbox]')
    console.log('checkbox ',checkbox);

    checkbox.forEach(check => {
        if(check.checked) {
            check.parentElement.parentElement.remove();
        }
        else {

        }
        console.log(check.parentElement.parentElement)
    })
}