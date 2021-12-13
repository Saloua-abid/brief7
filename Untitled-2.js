var titre = document.getElementById("inp1");
var auteur = document.getElementById("inp2");
var prix = document.getElementById("inp3");
var date = document.getElementById("inp4");
var langue = document.getElementById("inp5");
var type = document.querySelector("input [name='A']");         /* pour declarer lekhtiyar*/ 
var button = document.getElementById("btn1");

button.addEventListener("click",(e) => {         /* 'addEven..' pour mli katclici ela dek btn kieatik had hajat... */
   e.preventDefault();

   if (prix.value == "") {
       prix.style.border = '2px solid red';
   } else {
       prix.style.border = '2px solid green';
   } if (auteur.value == "") {
       auteur.style.border = '2px solid red';
   } else {
       auteur.style.border = '2px solid green';
   } if (titre.value.length > 30 || titre.value == "") {
        titre.style.border = '2px solid red';
   }else {
       if (parseInt(titre.value)) {  /*parse.. ida dakhalti adad ytik error */
           titre.style.border ='2px solid red';
       } else {
           titre.style.border = '2px solid green'
       }
   }

  
   });


   



























