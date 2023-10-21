export function addFilaTablaCliente(data) {
    const template = //html
                    `
                    <tr>
                        <td scope="row">${data.dni}</td>
                        <td>
                            <input class="bg-transparent border-0 text-black text-center w-100" type="text" value="${data.nombres}" disabled>
                        </td>
                        <td>
                            <input class="bg-transparent border-0 text-black text-center w-100" type="text" value="${data.apellidos}" disabled>
                        </td>
                        <td>
                            <input class="bg-transparent border-0 text-black text-center w-100" type="number"  value="${data.telefono}" disabled>
                        </td>
                        <td>
                            <input class="bg-transparent border-0 text-black text-center w-100" type="email"  value="${data.email}" disabled>
                        </td>
                        <td>${data.f_nacimiento}</td>
                        <td>${data.nacionalidad}</td>
                        <td>
                            <button class="btn btn-success col-5 text-white fw-bold fs-6 p-0 btnAccion">Editar</button>
                            <button class="btn btn-primary mt-1  col-5 text-white fw-bold fs-6 p-0 btnAccion" disabled>Confirmar</button>
                        </td>
                        <td class="position-relative">
                            <input type="checkbox" class="position-absolute">
                        </td>
                    </tr>
                    `

    return template;
}