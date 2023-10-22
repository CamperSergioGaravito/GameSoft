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

export function buscarItemStorage(clave,buscado_por,valor_buscado,accion=false) {
    const data = obtenerItem(clave);
    let dataF = {
        estado: false,
        data: accion ? [] : false,
        dataStorage: data
    };

    if(data) {
        data.forEach(item => {
            const d_busqueda = {
                apellidos: item.apellidos.toLowerCase(),
                dni: item.dni,
                email: item.email,
                f_nacimiento: item.f_nacimiento,
                nacionalidad: item.nacionalidad.toLowerCase(),
                nombres: item.nombres.toLowerCase(),
                telefono: item.telefono
            }
            if(!accion) {
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
            }
            else {                
                if(d_busqueda[buscado_por].search(valor_buscado) !== -1) {
                    dataF.data.push(item);
                }
                else {
                    
                }
            }
            
        })
        return dataF;
    }
    else {
        return dataF;
    }
}