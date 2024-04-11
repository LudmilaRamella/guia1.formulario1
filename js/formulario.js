$(document).ready(function() {
    $('#estado').click(function() {
        var nota1 = parseFloat($('#nota1').val());
        var nota2 = parseFloat($('#nota2').val());
        var a = parseFloat($('#asistencia').val());
        var promedio = nota1 + nota2 /2;

        if(promedio >=6 && a > 80){
            var res = "Regular";
            $('#resultado').val(res);
        }else if(promedio <=6){
            var res = "Desaprobado";
            $('#resultado').val(res);
        }else(a < 80){
            var res = "Libre";
            $('#resultado').val(res);
        }


    });
});