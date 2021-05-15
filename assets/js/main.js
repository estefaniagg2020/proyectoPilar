var counter = 1;
var contadorgaleria = 1;
var text = 'Aprende a programar';
var text2 = 'Pregunta sin compromiso';
var text3 = 'Unete a Lernen';
var texto_inicio = '<script> Lernen </script>';


var texto_vacio = "";
var item = $(".texto");

if (counter == 1) {
    item.empty();
    typeText(item, texto_inicio, 200, 0);
}


var intervalo = setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    console.log(counter);

    if (counter > 2) {
        item.empty();
        typeText(item, texto_vacio, 500, 0);
    }
    else {
        item.empty();
        typeText(item, text, 200, 0);
    }
    if (counter == 3) {
        item.empty();
        text = "Pregunta sin compromiso";
        
        typeText(item, text, 200, 0);
       
    }
    if (counter == 4) {
        item.empty();
        text = "Unete a Lernen";
        item.css({ "margin-left": 120 + "px" });
        typeText(item, text, 200, 0);
       
    }


    if (counter > 4) {
        counter = 1;
        item.css({ "margin-left": 92 + "px" });
        text = "¿Estás preparado?";       
    }

}, 7000)

// simulte typing
function typeText(item, text, delay, i) {
    $(item).append(text.charAt(i))
        .delay(delay)
        .promise()
        .done(function () {
            if (i < text.length) {
                i++;
                typeText(item, text, delay, i);
            }
        });
}

// menu desplegable
$("#menu").click(function () {
    $("#contendor-navegacion-header").slideToggle();
});

// Desplegable servicios


$('a.seccion-flecha').click(function(e){
    
    e.preventDefault();
    $('.pservicios').slideUp('fast');
    var servicios = $(this).closest('section.seccion-servicios').find('.pservicios');
    if (servicios.is(':visible')) {
        servicios.slideUp();
    } else {
        servicios.slideDown();
    }
         
});


// slider imagenes

$('.carousel').carousel()
// var intervalogaleria = setInterval(function () {
//     document.getElementById("radiogaleria" + contadorgaleria).checked = true;
//     contadorgaleria++;
//     console.log(contadorgaleria);
   

// }, 5000)

// var flechaizq = document.getElementById("flechaizq");
// var flechader = document.getElementById("flechader");
// flechaizq.addEventListener("click", function()
// {
//     contadorgaleria--;
//     console.log(contadorgaleria);
// })
// flechader.addEventListener("click", function()
// {
//     contadorgaleria++;
//     console.log(contadorgaleria);
// })




