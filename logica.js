var resultado1= new Image();
var resultado2= new Image();
var resultado3= new Image();
var resultado4= new Image();
var resultado5= new Image();
var resultado6= new Image();
var resultado7= new Image();
var resultado8= new Image();

var arraydados =new Array ([resultado1,false],[resultado2,false],[resultado3,false],[resultado4,false],[resultado5,false],[resultado6,false],[resultado7,false],[resultado8,false]);

var calavera = new Image();
var moneda = new Image();
var sable =new Image();
var diamante = new Image();
var loro = new Image();
var mono = new Image();
var question = new Image();
calavera.src = "imagenes/1.png";
diamante.src = "imagenes/2.png";
moneda.src = "imagenes/3.png";
loro.src = "imagenes/4.png";
mono.src = "imagenes/5.png";
sable.src = "imagenes/6.png";
question.src= "imagenes/question.png";

var cartapirata = new Image();
var cartamoneda = new Image();
var cartadiamante = new Image();
var cartacalavera = new Image();
var doblecalavera = new Image();
var barcopeque = new Image();
var barcomedio = new Image();
var barcogrande = new Image();
var tesoro = new Image();
var lorimoni = new Image();
var cartabruja = new Image();

cartacalavera.src = "imagenes/baraja/1.png";
doblecalavera.src = "imagenes/baraja/2.png";
cartadiamante.src = "imagenes/baraja/3.png";
cartamoneda.src = "imagenes/baraja/4.png";
cartapirata.src = "imagenes/baraja/5.png";
cartabruja.src = "imagenes/baraja/6.png";
barcopeque.src ="imagenes/baraja/7.png";
barcomedio.src = "imagenes/baraja/8.png";
barcogrande.src = "imagenes/baraja/9.png";
lorimoni.src = "imagenes/baraja/10.png";



var quemado=false;
var doblon= new Image();
var doblon = "imagenes/doblon.png";


var dado =new Array (calavera, moneda, sable,  diamante, loro, mono);
var baraja= new Array(cartacalavera, doblecalavera, cartadiamante, cartamoneda, cartapirata, cartabruja, barcopeque, barcomedio, barcogrande, lorimoni);


var tiradacalaveras=0;
var cartaactiva=new Image();
cartaactiva.src=question.src;
var cartaactivacalculada=false;

var puntuacion= 0;
var contadorcalaveras=0;
var jugador1=0;
var jugador2=0;
var jugadoractivo=false;

var Player1;
var Player2;
var bloqueados=0;
var puntos;


function rolldice(){

   var caradado;
   caradado = new Image();
   caradado.src= dado[Math.floor(Math.random() * 6)].src;
   
   return caradado.src;
}

function shufflecard(){
    cartaturno= new Image();
    cartaturno.src= baraja[Math.floor(Math.random() * 10)].src;
    return cartaturno.src;
}

function inicio(){

    document.getElementById("jugador1activo").style.visibility="visible";
    tiradainicial();

    Player1="Jugador1";
    Player2="Jugador2";
    document.getElementById("player1").value = Player1;
    document.getElementById("player2").value = Player2;

    if (jugadoractivo=true){
        document.getElementById("jugador2activo").style.visibility="hidden";

    }
    if (jugadoractivo=false){
        document.getElementById("jugador1activo").style.visibility="hidden";
    }
    document.getElementById("btntirada").style.visibility="hidden";
    document.getElementById("btnacabar").style.visibility="hidden";
    document.getElementById("block1").style.visibility="hidden";
    document.getElementById("block2").style.visibility="hidden";
    document.getElementById("block3").style.visibility="hidden";
    document.getElementById("block4").style.visibility="hidden";
    document.getElementById("block5").style.visibility="hidden";
    document.getElementById("block6").style.visibility="hidden";
    document.getElementById("block7").style.visibility="hidden";
    document.getElementById("block8").style.visibility="hidden";

}
var troll = false;
function juegonuevo(){
    troll=false;
    puntos= prompt("¿A cuantos puntos quereis jugar? \n (6000 por defecto)")
    if (puntos==null){
        puntos=6000
    }
    if(isNaN(puntos)){
        alert("Eres mu tonto...\nVas a jugar a 6000 porque no te da el cerebro para más... tontito")
        puntos=6000;
        troll=true;
    }
    if (puntos==""){
        puntos=6000;
    }
    
    
    if(troll==true){
        Player1="Tontit@";
        Player2="Bobito@"
    }
    if(troll==false){
    Player1 = prompt("Introduce el nombre del Jugador 1");
    Player2 = prompt("Introduce el nombre del Jugador 2");
    if (Player1==""){
        Player1= "Jugador 1";
    }
    if (Player2==""){
        Player2= "Jugador 2";
    }
    if (Player1==null){
        Player1="Jugador 1"
    }
    if (Player2==null){
        Player2="Jugador 2"
    }
}

    document.getElementById("player1").innerHTML= Player1;
    document.getElementById("player2").innerHTML= Player2;

    if (jugadoractivo=true){
        document.getElementById("jugador2activo").style.visibility="hidden";

    }
    if (jugadoractivo=false){
        document.getElementById("jugador1activo").style.visibility="hidden";
    }

    document.images["carta"].src=shufflecard();
    cartaactiva.src=document.images["carta"].src;
    document.getElementById("btntirada").style.visibility="visible";
    document.getElementById("btnacabar").style.visibility="visible";
    document.getElementById("block1").style.visibility="visible";
    document.getElementById("block2").style.visibility="visible";
    document.getElementById("block3").style.visibility="visible";
    document.getElementById("block4").style.visibility="visible";
    document.getElementById("block5").style.visibility="visible";
    document.getElementById("block6").style.visibility="visible";
    document.getElementById("block7").style.visibility="visible";
    document.getElementById("block8").style.visibility="visible";

    jugador1=0;
    document.getElementById("jugador1").value=jugador1;
    jugador2=0;
    document.getElementById("jugador2").value=jugador2;
    document.getElementById("puntaje").innerHTML=puntos;



}

function tiradainicial(){

    document.images["dadouno"].src=question.src;
    document.images["dadodos"].src=question.src;
    document.images["dadotres"].src=question.src;
    document.images["dadocuatro"].src=question.src;
    document.images["dadocinco"].src=question.src;
    document.images["dadoseis"].src=question.src;
    document.images["dadosiete"].src=question.src;
    document.images["dadoocho"].src=question.src;

    document.images["carta"].src="imagenes/baraja/reverso.png";

}



function lockdiceuno(){
      
    if ((arraydados[0][1])==false){
        arraydados[0][1]=true;
        document.getElementById('block1').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[0][1]==true){
        arraydados[0][1]=false;
        document.getElementById('block1').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdicedos(){
    
    if ((arraydados[1][1])==false){
        arraydados[1][1]=true;
        document.getElementById('block2').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[1][1]==true){
        arraydados[1][1]=false;
        document.getElementById('block2').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdicetres(){
    
    if ((arraydados[2][1])==false){
        arraydados[2][1]=true;
        document.getElementById('block3').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[2][1]==true){
        arraydados[2][1]=false;
        document.getElementById('block3').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdicecuatro(){
    if ((arraydados[3][1])==false){
        arraydados[3][1]=true;
        document.getElementById('block4').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[3][1]==true){
        arraydados[3][1]=false;
        document.getElementById('block4').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdicecinco(){
    if ((arraydados[4][1])==false){
        arraydados[4][1]=true;
        document.getElementById('block5').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[4][1]==true){
        arraydados[4][1]=false;
        document.getElementById('block5').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdiceseis(){
    if ((arraydados[5][1])==false){
        arraydados[5][1]=true;
        document.getElementById('block6').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[5][1]==true){
        arraydados[5][1]=false;
        document.getElementById('block6').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdicesiete(){
    if ((arraydados[6][1])==false){
        arraydados[6][1]=true;
        document.getElementById('block7').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[6][1]==true){
        arraydados[6][1]=false;
        document.getElementById('block7').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function lockdiceocho(){
    if ((arraydados[7][1])==false){
        arraydados[7][1]=true;
        document.getElementById('block8').value= '¡Bloqueado!';
        bloqueados=bloqueados+1;
    }
    else if(arraydados[7][1]==true){
        arraydados[7][1]=false;
        document.getElementById('block8').value= 'bloquear';
        bloqueados=bloqueados-1;
    }
}
function resetboard(){

    arraydados[0][1]=false;
    arraydados[1][1]=false;
    arraydados[2][1]=false;
    arraydados[3][1]=false;
    arraydados[4][1]=false;
    arraydados[5][1]=false;
    arraydados[6][1]=false;
    arraydados[7][1]=false;

    arraydados[0][0].src=question.src;
    arraydados[1][0].src=question.src;
    arraydados[2][0].src=question.src;
    arraydados[3][0].src=question.src;
    arraydados[4][0].src=question.src;
    arraydados[5][0].src=question.src;
    arraydados[6][0].src=question.src;
    arraydados[7][0].src=question.src;
    
    document.getElementById('block1').value= 'bloquear';
    document.getElementById('block2').value= 'bloquear';
    document.getElementById('block3').value= 'bloquear';
    document.getElementById('block4').value= 'bloquear';
    document.getElementById('block5').value= 'bloquear';
    document.getElementById('block6').value= 'bloquear';
    document.getElementById('block7').value= 'bloquear';
    document.getElementById('block8').value= 'bloquear';

    document.getElementById("block1").type="button";
    document.getElementById("block2").type="button";
    document.getElementById("block3").type="button";
    document.getElementById("block4").type="button";
    document.getElementById("block5").type="button";
    document.getElementById("block6").type="button";
    document.getElementById("block7").type="button";
    document.getElementById("block8").type="button";

    document.images["dadouno"].src=question.src;
    document.images["dadodos"].src=question.src;
    document.images["dadotres"].src=question.src;
    document.images["dadocuatro"].src=question.src;
    document.images["dadocinco"].src=question.src;
    document.images["dadoseis"].src=question.src;
    document.images["dadosiete"].src=question.src;
    document.images["dadoocho"].src=question.src;
}

function tirada(){

    if (bloqueados>6){
        alert("Debes tirar como minimo dos dados, desbloquea dados o bien acaba tu turno.")
    }else{
        
    if (arraydados[0][1]==false){
    document.images["dadouno"].src=rolldice();
    arraydados[0][0].src = document.images["dadouno"].src;
        if(arraydados[0][0].src== calavera.src){
            document.getElementById("block1").value='¡Bloqueado!';
            document.getElementById("block1").type="hidden";
            lockdiceuno();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    if (arraydados[1][1]==false){
    document.images["dadodos"].src=rolldice();
    arraydados[1][0].src = document.images["dadodos"].src;
        if(arraydados[1][0].src== calavera.src){
            document.getElementById("block2").value='¡Bloqueado!';
            document.getElementById("block2").type="hidden";
            lockdicedos();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    if (arraydados[2][1]==false){
    document.images["dadotres"].src=rolldice();
    arraydados[2][0].src = document.images["dadotres"].src;
        if(arraydados[2][0].src== calavera.src){
            document.getElementById("block3").value='¡Bloqueado!';
            document.getElementById("block3").type="hidden";
            lockdicetres();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    
    if (arraydados[3][1]==false){
    document.images["dadocuatro"].src=rolldice();
    arraydados[3][0].src = document.images["dadocuatro"].src;
        if(arraydados[3][0].src== calavera.src){
            document.getElementById("block4").value='¡Bloqueado!';
            document.getElementById("block4").type="hidden";
            lockdicecuatro();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    
    if (arraydados[4][1]==false){
    document.images["dadocinco"].src=rolldice();
    arraydados[4][0].src = document.images["dadocinco"].src;
        if(arraydados[4][0].src== calavera.src){
            document.getElementById("block5").value='¡Bloqueado!';
            document.getElementById("block5").type="hidden";
            lockdicecinco();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    
    if (arraydados[5][1]==false){
    document.images["dadoseis"].src=rolldice();
    arraydados[5][0].src = document.images["dadoseis"].src;
        if(arraydados[5][0].src== calavera.src){
            document.getElementById("block6").value='¡Bloqueado!';
            document.getElementById("block6").type="hidden";
            lockdiceseis();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    
    if (arraydados[6][1]==false){
    document.images["dadosiete"].src=rolldice();
    arraydados[6][0].src = document.images["dadosiete"].src;
        if(arraydados[6][0].src== calavera.src){
            document.getElementById("block7").value='¡Bloqueado!';
            document.getElementById("block7").type="hidden";
            lockdicesiete();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    
    if (arraydados[7][1]==false){
    document.images["dadoocho"].src=rolldice();
    arraydados[7][0].src = document.images["dadoocho"].src;
        if(arraydados[7][0].src== calavera.src){
            document.getElementById("block8").value='¡Bloqueado!';
            document.getElementById("block8").type="hidden";
            lockdiceocho();
            tiradacalaveras=tiradacalaveras+1;
        }
    }
    if (cartaactivacalculada==false){
      
        if(cartaactiva.src==cartacalavera.src){
            tiradacalaveras=tiradacalaveras+1;
            cartaactivacalculada=true
        }
        if(cartaactiva.src==doblecalavera.src){
            tiradacalaveras=tiradacalaveras+2;
            cartaactivacalculada=true
        }
        if(cartaactiva.src==cartabruja.src){
            tiradacalaveras=tiradacalaveras-1;
            cartaactivacalculada=true
        }
        
        

    }


    if (tiradacalaveras > 2){
        
        setTimeout(function(){
            quemadoturno()},100);
        clearInterval(quemadoturno);
    }
    }
console.log(bloqueados);
}
function quemadoturno(){
    alert("HAS SACADO 3 CALAVERAS! \nPierdes el turno y te quedas sin puntos!");
        quemado=true;
        
        turnend();
}



function turnend(){
    if (jugadoractivo==false){
        calculopuntos()
        jugador1=jugador1+puntuacion;
        if (jugador1<0){
            jugador1=0
        }
        document.getElementById("jugador1").innerHTML=jugador1;
        puntuacion=0;
        tiradacalaveras=0;
        bloqueados=0;
        quemado=false;
        document.getElementById("jugador2activo").style.visibility="visible";
        document.getElementById("jugador1activo").style.visibility="hidden";
        if(jugador1>=puntos){
            alert("Enhorabuena! "+Player1+" ha ganado el juego con "+jugador1+" puntos!");
            jugador1=0;
            jugador2=0;
            document.getElementById("jugador1").innerHTML=jugador1;
            document.getElementById("jugador2").innerHTML=jugador2;
            
        }
        cartaactivacalculada=false
        document.images["carta"].src=shufflecard();
        cartaactiva.src=document.images["carta"].src;
        resetboard();
        jugadoractivo=true;

    }else if (jugadoractivo==true){
        calculopuntos()
        jugador2=jugador2+puntuacion;
        if (jugador2<0){
            jugador2=0
        }
        document.getElementById("jugador2").innerHTML=jugador2;
        puntuacion=0;
        tiradacalaveras=0
        bloqueados=0;
        quemado=false;
        document.getElementById("jugador2activo").style.visibility="hidden";
        document.getElementById("jugador1activo").style.visibility="visible";
        if(jugador2>=puntos){
            alert("Enhorabuena! "+Player2+" ha ganado el juego con "+jugador2+" puntos!");
            jugador1=0;
            jugador2=0;
            document.getElementById("jugador1").innerHTML=jugador1;
            document.getElementById("jugador2").innerHTML=jugador2;
            
        }
        cartaactivacalculada=false
        document.images["carta"].src=shufflecard();
        cartaactiva.src=document.images["carta"].src;
        resetboard();
        jugadoractivo=false;
        
    }
    

}

function calculopuntos(){
var monedas=0;
var puntuacionmonedas=0;
var diamantes=0;
var puntuaciondiamantes=0;
var loros=0;
var puntuacionloros=0;
var monos=0;
var puntuacionmonos=0;
var sables=0;
var puntuacionsables=0;

var i=0;

    for (i=0;i<arraydados.length;i++){
        dadoactual=arraydados[i][0].src;
        if (dadoactual==moneda.src){
            monedas=monedas+1;
        }
        if (dadoactual==diamante.src){
            diamantes=diamantes+1;
        }
        if (dadoactual==loro.src){
            loros=loros+1;
        }
        if (dadoactual==mono.src){
            monos=monos+1;
        }
        if (dadoactual==sable.src){
            sables=sables+1;
        }
        
        
    }
    if (cartaactivacalculada==false){
        if (cartaactiva.src==lorimoni.src){
            loros=loros+monos;
            monos=0
        }
        
        if(cartaactiva.src==cartadiamante.src){
            diamantes=diamantes+1;
        }
        if(cartaactiva.src==cartamoneda.src){
            monedas=monedas+1;
        }
    }

    //monedas
    if (monedas==9){
        puntuacionmonedas=6000;
    }
    if (monedas==8){
        puntuacionmonedas=4000;
        puntuacionmonedas=puntuacionmonedas+800;
    }
    if (monedas==7){
        puntuacionmonedas=2000;
        puntuacionmonedas=puntuacionmonedas+700;
    }
    if (monedas==6){
        puntuacionmonedas=1000;
        puntuacionmonedas=puntuacionmonedas+600;
    }
    if (monedas==5){
        puntuacionmonedas=500;
        puntuacionmonedas=puntuacionmonedas+500;
    }
    if (monedas==4){
        puntuacionmonedas=200;
        puntuacionmonedas=puntuacionmonedas+400;
    }
    if (monedas==3){
        puntuacionmonedas=100;
        puntuacionmonedas=puntuacionmonedas+300;
    }
    if (monedas==2){
        puntuacionmonedas=puntuacionmonedas+200;
    }
    if (monedas==1){
        puntuacionmonedas=puntuacionmonedas+100;
    }

    //diamantes
    if (diamantes==9){
        puntuaciondiamantes=6000;
    }
    if (diamantes==8){
        puntuaciondiamantes=4000;
        puntuaciondiamantes=puntuaciondiamantes+800;
    }
    if (diamantes==7){
        puntuaciondiamantes=2000;
        puntuaciondiamantes=puntuaciondiamantes+700;
    }
    if (diamantes==6){
        puntuaciondiamantes=1000;
        puntuaciondiamantes=puntuaciondiamantes+600;
    }
    if (diamantes==5){
        puntuaciondiamantes=500;
        puntuaciondiamantes=puntuaciondiamantes+500;
    }
    if (diamantes==4){
        puntuaciondiamantes=200;
        puntuaciondiamantes=puntuaciondiamantes+400;
    }
    if (diamantes==3){
        puntuaciondiamantes=100;
        puntuaciondiamantes=puntuaciondiamantes+300;
    }
    if (diamantes==2){
        puntuaciondiamantes=puntuaciondiamantes+200;
    }
    if (diamantes==1){
        puntuaciondiamantes=puntuaciondiamantes+100;
    }
    //loros
    if (loros==8){
        puntuacionloros=4000;
    }
    if (loros==7){
        puntuacionloros=2000;
    }
    if (loros==6){
        puntuacionloros=1000;
    }
    if (loros==5){
        puntuacionloros=500;
    }
    if (loros==4){
        puntuacionloros=200;
    }
    if (loros==3){
        puntuacionloros=100;
    }
    //monos
    if (monos==8){
        puntuacionmonos=4000;
    }
    if (monos==7){
        puntuacionmonos=2000;
    }
    if (monos==6){
        puntuacionmonos=1000;
    }
    if (monos==5){
        puntuacionmonos=500;
    }
    if (monos==4){
        puntuacionmonos=200;
    }
    if (monos==3){
        puntuacionmonos=100;
    }
    //sables
    if (sables==8){
        puntuacionsables=4000;
    }
    if (sables==7){
        puntuacionsables=2000;
    }
    if (sables==6){
        puntuacionsables=1000;
    }
    if (sables==5){
        puntuacionsables=500;
    }
    if (sables==4){
        puntuacionsables=200;
    }
    if (sables==3){
        puntuacionsables=100;
    }
    


    puntuacion=puntuacion+puntuacionmonedas+puntuaciondiamantes+puntuacionloros+puntuacionmonos+puntuacionsables;
    if (bloqueados==8 && tiradacalaveras==0){
        puntuacion=puntuacion+500;

    }
    if (cartaactivacalculada==false){
        if(cartaactiva.src==cartapirata.src){
            puntuacion=puntuacion+puntuacion;
        }
        if(cartaactiva.src==barcopeque.src){
            if(sables>=2){
                puntuacion=puntuacion+300;
            }
            else if(sables<2){
                puntuacion=0;
                puntuacion=puntuacion-300;
            }
        }
        if(cartaactiva.src==barcomedio.src){
            if(sables>=3){
                puntuacion=puntuacion+500;
            }
            else if(sables<3){
                puntuacion=0;
                puntuacion=puntuacion-500;
            }
        }
        if(cartaactiva.src==barcogrande.src){
            if(sables>=4){
                puntuacion=puntuacion+1000;
            }
            else if(sables<4){
                puntuacion=0;
                puntuacion=puntuacion-1000;
            }
        }
        cartaactivacalculada=true;
        
    }
    if (quemado==true){
        puntuacion=0;
    }
    
}





