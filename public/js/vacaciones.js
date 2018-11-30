$(document).ready(function(){

    /*=============================================
    =              ASIGNANDO ID'S                 =
    =============================================*/
    $( "#date-vaca1 :input" ).attr( "id", "fechainicio" );
    $( "#date-vaca2 :input" ).attr( "id", "fechafin" );
    $( "#date-vaca3 :input" ).attr( "id", "fechareintegro" );
    $( "#años :input" ).attr( "id", "años_antiguedad" );
    $( "#dias_dis :input" ).attr( "id", "dias_disfrutar" );


    /*=============================================
    =     AÑOS DE ANTIGUEDAD DEL TRABAJADOR       =
    =============================================*/
    $.ajaxSetup({
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
        
    $('select[name=trabajador]').change(function(){
        var trabajador = $('select[name=trabajador]').val();
        // console.log(trabajador)
        $.ajax({
        type: "post",
        dataType: 'json',
        url: 'create',
        data: {trabajador: trabajador},
        success: function(data) {
            // console.log('data',data)
            $("#años_antiguedad").val(data);
            }
        });
    });


    /*=============================================
    =    OBTENER DIAS Y VALORES DEL DATEPICKER    =
    =============================================*/
    var from_$input = $('#fechainicio').pickadate(),
    from_picker = from_$input.pickadate('picker')

    var to_$input = $('#fechafin').pickadate(),
    to_picker = to_$input.pickadate('picker')

    var reintegro_$input = $('#fechareintegro').pickadate(),
    reintegro = reintegro_$input.pickadate('picker')

    to_picker.on('set', function(event) {
    if ( event.select ) {
        reintegro.set('min', to_picker.get('select'))    
    }
    else if ( 'clear' in event ) {
        reintegro.set('min', false)
    }
    })

    // // Función para calcular los días transcurridos entre dos fechas
    restaFechas = function(from_picker,to_picker)
    {

    var aFecha1 = from_picker.get('select','dd/mm/yyyy').split('/'); 
    var aFecha2 = to_picker.get('select','dd/mm/yyyy').split('/'); 
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
    var dif = fFecha2 - fFecha1;

    var dias = Math.round(dif / (1000 * 60 * 60 * 24)); 


    return dias;
    }

    // Check if there’s a “from” or “to” date to start with.
    if ( from_picker.get('value') ) {
    to_picker.set('min', from_picker.get('select'))
    }
    if ( to_picker.get('value') ) {
    from_picker.set('max', to_picker.get('select'))
    }

    // When something is selected, update the “from” and “to” limits.
    from_picker.on('set', function(event) {
    if ( event.select ) {
    to_picker.set('min', from_picker.get('select')) 

    /* Función que suma o resta días a una fecha, si el parámetro
    días es negativo restará los días*/
    function sumarDias(fecha, dias){
        var i = 0;
        var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
        var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
        var aFecha = sFecha.split(sep);
        var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
        fecha= new Date(fecha);
        while (i<dias) {
        fecha.setTime(fecha.getTime()+24*60*60*1000); // añadimos 1 día
        s = from_picker.get('disable')
        if (fecha.getDay() != 6 && fecha.getDay() != 0){
            i++;  
            for (j=2;j<s.length;j++){
                if (fecha.getTime() == s[j].getTime()){
                i--;
                }
            }
        }
        
        }

    return fecha;
    }


    /*=============================================
    =   ASIGNAR DIAS SEGÚN FECHA DE ANTIGUEDAD    =
    =============================================*/
    var antiguedad = $("#años_antiguedad").val()

    if(antiguedad == 1){

        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,15);

        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );

        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );

        $("#dias_disfrutar").val(15).focus();
    }
    else if (antiguedad == 2) {

        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,16);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(16).focus();

    }
    else if (antiguedad == 3) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,17);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(17).focus();

    }
    else if (antiguedad == 4) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,18);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(18).focus();

    }
    else if (antiguedad == 5) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,19);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(19).focus();

    }
    else if (antiguedad == 6) {

        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,20);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );

        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(20).focus();

    }
    else if (antiguedad == 7) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,21);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );

        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );

        $("#dias_disfrutar").val(21).focus();

    }
    else if (antiguedad == 8) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,22);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(22).focus();

    }
    else if (antiguedad == 9) {

        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,23);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(23).focus();

    }
    else if (antiguedad == 10) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,24);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(24).focus();

    }
    else if (antiguedad == 11) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,25);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(25).focus();

    }
    else if (antiguedad == 12) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,26);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(26).focus();

    }
    else if (antiguedad == 13) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,27);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(27).focus();

    }
    else if (antiguedad == 14) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,28);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(28).focus();

    }
    else if (antiguedad == 15) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,29);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(29).focus();

    }
    else if (antiguedad >= 16) {
        d = from_picker.get('select','dd/mm/yyyy');

        var fecha = sumarDias(d,30);
        to_picker.set( 'select', fecha, { format: 'dd/mm/yyyy' } );
        x = to_picker.get('select','dd/mm/yyyy');

        var fechareintegro = sumarDias(x,1);

        reintegro.set( 'select', fechareintegro, { format: 'dd/mm/yyyy' } );
        $("#dias_disfrutar").val(30).focus();

    }

    ////////////////////////////////////////////////////////////////////////////////////////
    }
    else if ( 'clear' in event ) {
    to_picker.set('min', false)
    }
    })
    to_picker.on('set', function(event) {
    if ( event.select ) {
    from_picker.set('max', to_picker.get('select'))
    // $("#dias_disfrutar").val(restaFechas(from_picker,to_picker)).focus();
    }
    else if ( 'clear' in event ) {
    from_picker.set('max', false)
    }
    })

});