

  function insert(num) {
    document.querySelector('.output').value = document.querySelector('.output').value+num;
   }
   function insertOutput_2(act) {
     const output = document.querySelector('.output');
     const output_2 = document.querySelector('.output_2');

     if (output.value != '') {
       output.value += ` ${act}`;
       output_2.value += output.value;
       output.value = '';
     }
   }

   function CE(){
    document.querySelector('.output').value="";
   }

   function equal() {
     let expresion = document.querySelector('.output').value;
     let output_2 = document.querySelector('.output_2');
     let ifEqual = true;

     if(expresion) {
       document.querySelector('.output').value = eval(output_2.value + document.querySelector('.output').value);
       output_2.value = '';
       
     }
   }

   function clean() {
     document.querySelector('.output').value="";
     document.querySelector('.output_2').value="";
   }
   function plusMinus() {
     const output = document.querySelector('.output');

     if (!!output) {
       output.value = -output.value;
     }
   }
   function Delete(){
     let output = document.querySelector('.output');
     
     output.value = output.value.slice(0,-1);
   }
 