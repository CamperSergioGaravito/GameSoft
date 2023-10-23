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

        for(let x=0;x<data.length;x++) {
            const d_busqueda = {
                apellidos: data[x].apellidos.toLowerCase(),
                dni: data[x].dni,
                email: data[x].email,
                f_nacimiento: data[x].f_nacimiento,
                nacionalidad: data[x].nacionalidad.toLowerCase(),
                nombres: data[x].nombres.toLowerCase(),
                telefono: data[x].telefono
            }

            if(accion === false) {
                if(d_busqueda[buscado_por] === valor_buscado) {
                    dataF.data = data[x];
                    dataF.estado = true;
                    return dataF
                }
                else {
                    dataF.estado = false;
                    dataF.data = false;
                }
            }
            else {                
                if(d_busqueda[buscado_por].search(valor_buscado) !== -1) {
                    dataF.data.push(data[x]);
                }
                else {
                    
                }
            }
            
        }
        return dataF;
    }
    else {
        return dataF;
    }
}