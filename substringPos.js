/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++substring+++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



function substring (string,sub){

var brojac=0;

     for(var i=0;i<string.length;i++){

          for(var j=0;j<sub.length;j++){
               
         if (string[j+i] !== sub[j]){break;} 

           if(j === sub.length-1) {brojac++}

          }
          
     }
     return brojac;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */