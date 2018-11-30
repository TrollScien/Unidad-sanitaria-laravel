$(document).ready(function(){
    /*=============================================
    =           ASIGNANDO ID'S                    =
    =============================================*/
    $("#fechanacim :input").attr( "id", "fecha_nacimiento" );
    $("#fechaingre :input").attr( "id", "fecha_ingreso" );
    $( "#personal :input" ).attr( "id", "cedula" );

    /*=============================================
    =          VERIFICANDO CEDULA EXISTENTE       =
    =============================================*/
    $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
        
    $('#cedula').change(function(){
        var cedula = $('#cedula').val();
        console.log(cedula)
        $.ajax({
        type: "post",
        dataType: 'json',
        url: 'create',
        data: {cedula: cedula},
        success: function(data) {
            console.log('data',data)
            if(data > 0){
               $("#personal").append('<div id="alerta" class="form-group alert alert-danger">Cédula ya registrada: '+cedula+' </div>');
            }else{
                $( "#alerta" ).remove();
            }

            }
        });
    });
});