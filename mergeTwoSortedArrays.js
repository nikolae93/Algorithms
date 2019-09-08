/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++Merging_sort+++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Funkcija za spajanje dva sortirana niza

function mergeTwoSorted (n,m){

   var i=0 ;
   var j=0; 
   var fin =[];

  while( i< n.length && j < m.length ){

       if(m[j] > n[i] ){
         fin.push(n[i]); i++ ;
       } else{
         fin.push(m[j]); j++;
       }

  }
     while(i< n.length){
       fin.push(n[i]); i++;
     }
     while(j<m.length){
       fin.push(m[j]); j++ ;
     }

return fin;
}


function mergsort(nz){
 if(nz.length <= 1){ return nz;}
  let mid = Math.floor(nz.length/2);
  let left = mergsort(nz.slice(0,mid));
  let ri = mergsort(nz.slice(mid));

  return  mergeTwoSorted(left,ri);

}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */