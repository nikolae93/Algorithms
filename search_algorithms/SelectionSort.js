/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++Selection_sort+++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function selSort(niz) {

   var temp; 

   for(var i =0; i< niz.length;i++){

       temp=i;
        for(var j=i+1;j<niz.length;j++){
        
          if(niz[j]<niz[temp]){

          temp=j;

          }
        }
    if( i !== temp ){ [ niz[i] , niz[temp] ]=[ niz[temp] , niz[i] ];  }   

   }

}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */