/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++Binary search+++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function binarySearch(niz,br){

      var levo=0; 
      var desno =niz.length; 
      var poz=0; var fin; 
      var brojac =0;

      function helper (levo,desno){
       
       if(levo === desno){brojac++;} 
       if(brojac === 2){fin=-1; return -1;}

          poz = Math.round((levo+desno)/2);
             
         if ( niz[poz] === br ){ 
             fin=poz;  
             return poz;   }
             else if( niz[poz] > br)
             {desno = poz; helper(levo,desno)}
             else {levo = poz;helper(levo,desno)}

      }
        
   helper(levo,desno);
 
  return fin;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */