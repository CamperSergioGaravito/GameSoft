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

export function buscarItemStorage(clave,buscado_por,valor_buscado) {
    const data = obtenerItem(clave);
    let dataF = {
        estado: false,
        data: false,
        dataStorage: data
    };

    if(data) {
        data.forEach(item => {
            const d_busqueda = {
                apellidos: item.apellidos,
                dni: item.dni,
                email: item.email,
                f_nacimiento: item.f_nacimiento,
                nacionalidad: item.nacionalidad,
                nombres: item.nombres,
                telefono: item.telefono
            }
            
            if(d_busqueda[buscado_por] === valor_buscado) {
                console.log('aqui');
                dataF.data = item;
                dataF.estado = true;
                return;
            }
            else {
                dataF.estado = false;
                dataF.data = false;
            }
        })
        console.log('1 ',dataF)
        return dataF;
    }
    else {
        console.log('2 ',dataF)
        return dataF;
    }
}