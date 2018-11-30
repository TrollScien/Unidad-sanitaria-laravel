$(document).ready(function(){

    /*=============================================
    =             DATEPICKER'S                    =
    =============================================*/
    $(".datepicker").pickadate({
        format: "d mmmm, yyyy",
        formatSubmit: "yyyy/mm/dd",
        closeOnSelect: true,
        closeOnClear: true,
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 50 years to control year
        hiddenName: true
    });
    
    $(".datepicker-repo").pickadate({
        format: "d mmmm, yyyy",
        formatSubmit: "yyyy/mm/dd",
        closeOnSelect: true,
        closeOnClear: true,
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year
        hiddenName: true
    });

    /*=============================================
    =           ASIGNANDO ID'S Y CLASES           =
    =============================================*/

    $('#date-repo1 :input').addClass('datepicker-repo');
    $('#date-repo2 :input').addClass('datepicker-repo');
    
    $( "#date-repo1 :input" ).attr( "id", "fecha_inicioreposo" );
    $( "#date-repo2 :input" ).attr( "id", "fecha_finreposo" );
    $( "#dias :input" ).attr( "id", "diasreposo" );

    /*=============================================
    =            calcular días        =
    =============================================*/
    
    var from_$input = $('#fecha_inicioreposo').pickadate(),
    from_picker = from_$input.pickadate('picker')

    var to_$input = $('#fecha_finreposo').pickadate(),
    to_picker = to_$input.pickadate('picker')

    // Función para calcular los días transcurridos entre dos fechas
    restaFechas = function(from_picker,to_picker)
    {
    var aFecha1 = from_picker.get('select','dd/mm/yyyy').split('/'); 
    var aFecha2 = to_picker.get('select','dd/mm/yyyy').split('/'); 
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 
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

    }
    else if ( 'clear' in event ) {
    to_picker.set('min', false)
    }
    })
    to_picker.on('set', function(event) {
    if ( event.select ) {
    from_picker.set('max', to_picker.get('select'))

    $("#diasreposo").val(restaFechas(from_picker,to_picker)).focus();
    }
    else if ( 'clear' in event ) {
    from_picker.set('max', false)
    }
    })

    /*=====  End of Section comment block  ======*/

    /*=============================================
    =            editar días        =
    =============================================*/

    var from_$input2 = $('#fecha_inicioreposo').pickadate(),
    from_picker2 = from_$input2.pickadate('picker')

    var to_$input2 = $('#fecha_finreposo').pickadate(),
    to_picker2 = to_$input2.pickadate('picker')

    // Función para calcular los días transcurridos entre dos fechas
    restaFechas = function(from_picker2,to_picker2)
    {
    var aFecha1 = from_picker2.get('select','dd/mm/yyyy').split('/'); 
    var aFecha2 = to_picker2.get('select','dd/mm/yyyy').split('/'); 
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]); 
    var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]); 
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 
    return dias;
    }

    // Check if there’s a “from” or “to” date to start with.
    if ( from_picker2.get('value') ) {
    to_picker2.set('min', from_picker2.get('select'))
    }
    if ( to_picker2.get('value') ) {
    from_picker2.set('max', to_picker2.get('select'))
    }

    // When something is selected, update the “from” and “to” limits.
    from_picker2.on('set', function(event) {
    if ( event.select ) {
    to_picker2.set('min', from_picker2.get('select')) 

    }
    else if ( 'clear' in event ) {
    to_picker2.set('min', false)
    }
    })
    to_picker2.on('set', function(event) {
    if ( event.select ) {
    from_picker2.set('max', to_picker2.get('select'))

    $("#diasreposo").val(restaFechas(from_picker2,to_picker2)).focus();
    }
    else if ( 'clear' in event ) {
    from_picker2.set('max', false)
    }
    })

    /*=====  End of Section comment block  ======*/

}); 
