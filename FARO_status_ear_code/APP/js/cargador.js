
function cargar_ejemplo( id, contenedor ) {

    function poner_loading( valor=true) {
            
       if (valor) {
            $("#" + contenedor + "_bar_img").show();
        } else {
            $("#" + contenedor + "_bar_img").hide();
        }
    }
    
    poner_loading(true);
    
        
    $("#" + contenedor).load( "./samples/sample" + id + "/index.html",
        function(){ 
            poner_loading(false);
           } 
    );

}

function esperar(contenedor) {
    $("#" + contenedor + "_bar_img").hide();
    
    console.log($("#" + contenedor + "_bar_img"));
}
