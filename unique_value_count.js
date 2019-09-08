/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++unique_value_count++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// dobijamo niz koji je sortiran i treba da odredimo koliko ima unikatnih vrednosti 
// ne koristiti petlje u okviru petlje vec algoritam treba da bude O(n)



function uniquevalue (niz){
         var br1=0;
          var br2=0; 
          var brojac =0;
          
          if (niz.length===0){brojac=0;} else if (niz.length>0)
          {brojac =1;}

         while( br1<niz.length ){
             if(niz[br1]===niz[br2]){br1+=1;}else 
             {br2=br1; br1+=1; brojac+=1;}
         }
         
         return brojac;
}




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */