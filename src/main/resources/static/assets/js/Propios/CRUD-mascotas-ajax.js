function listar(){
    $.ajax({
        method: "GET",
        url: "/mascotas/api/mascotas",
        data:{},
        success:function(mascotas){
            let tabla = $('#ordersTable').DataTable();
            mascotas.forEach(mascota=> {
                let botones = '<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-update" onclick="idenAct('+mascota.id+')"><i class="bi bi-pencil" aria-hidden="true"></i></button>';
                botones = botones +' <button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#modal-delete" onclick="idenElim('+mascota.id+')"><i class="bi bi-trash" aria-hidden="true"></i></button>';
                let rowNode = tabla.row
                    .add([mascota.nombre, mascota.edad, botones])
                    .draw()
                    .node().id='renglon_'+mascota.id;
            })
        }
    });
}
function guardar() {
    let nombreM = document.getElementById('nombre').value;
    let edadM = document.getElementById("edad").value;
    let RazaM = document.getElementById('raza').value;
    let Observ = document.getElementById('observaciones').value;
    $.ajax({
        method: 'POST',
        url: "/mascotas/api/mascotas",
        contentType: "application/json",
        data: JSON.stringify({
            nombre: nombreM,
            edad: edadM,
            raza: RazaM,
            observaciones: Observ
        })
        ,
        success: function (mascota) {
            let botones = '<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-update" onclick="idenAct('+mascota.id+')"><i class="bi bi-pencil" aria-hidden="true"></i></button>';
            botones = botones +' <button class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#modal-delete" onclick="idenElim('+mascota.id+')"><i class="bi bi-trash" aria-hidden="true"></i></button>';
            let tabla = $('#ordersTable').DataTable();
            var rowNode = tabla.row
                .add([mascota.nombre, mascota.edad, botones])
                .draw()
                .node().id = 'renglon_' + mascota.id;
            alert("Mascota guardada correctamente");
            limpiarFormulario()
        }

    });
}
function limpiarFormulario(){
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    document.getElementById('observaciones').value="";
    document.getElementById('nombre').focus();
}
function limpiartabla(){
    let tabla = $('#ordersTable').DataTable();
    tabla.clear().draw();
}
function idenAct(id){
    $.ajax({
        method: "GET",
        url: "/mascotas/api/mascotas/"+id,
        contentType: "aplicattion/json",
        data: {},
        success: function (mascota){
            document.getElementById('id-update').value = mascota.id;
            document.getElementById('nombre-update').value = mascota.nombre;
            document.getElementById("edad-update").value = mascota.edad;
            document.getElementById('raza-update').value = mascota.raza;
            document.getElementById('observaciones-update').value = mascota.observaciones;
        }
    });
}
function Act(){
    let idM = document.getElementById('id-update').value;
    let nombreM = document.getElementById('nombre-update').value;
    let edadM = document.getElementById("edad-update").value;
    let RazaM = document.getElementById('raza-update').value;
    let Observ = document.getElementById('observaciones-update').value;
    $.ajax({
        method: "PATCH",
        url: "/mascotas/api/mascotas/"+idM,
        contentType: "application/json",
        data: JSON.stringify({
            id: idM,
            nombre: nombreM,
            edad: edadM,
            raza: RazaM,
            observaciones: Observ
        }),
        success: function (){
            alert("Mascota Actualizada")
            limpiartabla();
            listar();
            $('#modal-update').modal('hide');
        }
    });
}
function idenElim(id){
    $.ajax({
        method: "GET",
        url: "/mascotas/api/mascotas/"+id,
        contentType: "aplicattion/json",
        data: {},
        success: function (mascota){
            document.getElementById('id-delete').value = mascota.id;
            document.getElementById('nombre-delete').innerText = "Estas seguro de eliminar a la mascota "+mascota.nombre+"?";
        }
    });
}
function eliminar(){
    const idElim = document.getElementById('id-delete').value;
    $.ajax({
        method: "DELETE",
        url: "/mascotas/api/mascotas/"+idElim,
        data: {},
        success: function (mascota){
            limpiartabla();
            listar();
            alert("Mascota eliminada");
            $('#modal-update').modal('hide');
        }
    })
}
