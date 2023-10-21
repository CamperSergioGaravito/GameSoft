export const dataClienteStorage = JSON.parse(localStorage.getItem('clientes'));

export function guardarStorage(clave,data) {
    localStorage.setItem(clave,JSON.stringify(data));
}

export function eliminarItemStorage(clave) {
    localStorage.removeItem(clave);
}

export function limpiarStorage() {
    localStorage.clear();
}

export function obtenerItem(clave) {
    if(JSON.parse(localStorage.getItem(clave))) {
        return JSON.parse(localStorage.getItem(clave));
    }
    else {
        return false;
    }
} 