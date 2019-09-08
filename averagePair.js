/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++++++++averagePair++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// da li se prosek nalazi u nizu vrednosti integera

// can we find the average pair (prosek) in a given array

function averagePair(niz,prosek){

         var l,d; 
         l=0;
        d=niz.length-1;

        while (l<d){

            if( (niz[l]+niz[d])/2===prosek ){
            return true;

            } else if( (niz[l]+niz[d])/2 <prosek) {l++;}
            
            else{d--;}
           
        }
       
    return false;
  }

//   averagePair([1,2,3], 2.5);
//   averagePair([1,3,3,5,6,7,10,12,19], 8);
  
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */