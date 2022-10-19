// console.log("Console: Alô Mundo...");
// alert("Alerta: Alô mundo...");
let tabuada = 4;

function meChame(){
   document.write("Tabuado do " + tabuada + "<br>");
   document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
   document.write(tabuada + " x 2 = " + (tabuada*2) +"<br>");
   document.write(tabuada + " x 3 = " + (tabuada*3) +"<br>");
   document.write(tabuada + " x 4 = " + (tabuada*4) +"<br>");
   document.write(tabuada + " x 5 = " + (tabuada*5) +"<br>");
   document.write(tabuada + " x 6 = " + (tabuada*6) +"<br>");
   document.write(tabuada + " x 7 = " + (tabuada*7) +"<br>");
   document.write(tabuada + " x 8 = " + (tabuada*8) +"<br>");
   document.write(tabuada + " x 9 = " + (tabuada*9) +"<br>");
   document.write(tabuada + " x 10 = " + (tabuada*10) +"<br>");
}
function minhatabuada(){
   for(var i=1;1<=10; i++){
      for(var j = 1: j < = 10; i++){
         document.write(i + " x " + j + " = " + (1*j) + "<br>");
      }
      document.write("<br><br>")
   }
}

function quadrado (){
   for(var i = 2; i <21; i++){ 
      document.write("o quadrado de" + i + " e " + (i+i) + "<br>")
   }
}

function total(){
   let val = document.getElementById("valor").value;
   let ju = document.getElementById("juros").value;

if(!Number(val)){ 
   alert("o valor deve ser um numero");
   document.getElementById("valor").value = "";
   document.getElementById("valor").focus = "";
   
   return

   if(!Number(ju)){ 
      alert("o valor deve ser um numero")
       return

}

function soma (){
   let v1=document. getElementById("v1").value;
   let v2=document. getElementById("v2").value;
   let r = ( Number v1 + Number v2);
   document.getElementById("resultado"). innerHTML = r;
}
function Subtraçao (){
   let v1=document. getElementById("v1").value;
   let v2=document. getElementById("v2").value;
   let r = ( Number (v1) - Number(v2));
   document.getElementById("resultado"). innerHTML = r;
}
function divisao (){
   let v1=document. getElementById("v1").value;
   let v2=document. getElementById("v2").value;
   let r = ( Number (v1) / Number(v2));
   document.getElementById("resultado"). innerHTML = r;
}
function mutiplicaçao (){
   let v1=document. getElementById("v1").value;
   let v2=document. getElementById("v2").value;
   let r = ( Number (v1) * Number(v2));
   document.getElementById("resultado"). innerHTML = r;
}
