$(document).ready(
    function(){
        var produto = new Array();
        var legenda = new Array();
        var cont = 0;
        
        produto[0]= "img/produtos/Processador/Ryzen1800X/box.jpg";  
        
        produto[1]= "img/produtos/Processador/Ryzen1800X/cpu.jpg";
        
        produto[2]= "img/produtos/Processador/Ryzen1800X/amd-ryzen.png";
        

        carregaDestaque(0);
        
        function carregaDestaque(idx){
            $("#imgGde").hide().attr("src",produto[idx]).fadeIn();
            var aux = produto[idx].split("/");
            var nomeProduto = aux[1].split(".");
        }
        
        $("#arrowleftProduto").click(
            function() {
                cont = cont-1;
                if(cont==-1) {
                    cont = produto.length-1;
                }
                 carregaDestaque(cont);            
            }
        );
        
        $("#arrowrightProduto").click(
            function(){
                cont = cont+1;
                if(cont==produto.length) {
                    cont = 0;
                }
                 carregaDestaque(cont);            
            }
        );
    }
)
