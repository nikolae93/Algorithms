/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++rekurzivna_funkcija+++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// ako je bilo koji broj neparan vratiti true u suprotnom false



function someRecursive(niz){

 const  cija =  (val) => { return val % 2 !== 0; }

let brojac = niz.length-1;   

var fin =niz.length-1 ;


     function helper (b){

          if(b<0){fin=b; return fin;}
          if(cija(niz[b])){fin=b ; return fin ;}

           b--; 
           helper(b);
     }

       helper(brojac);

     if(fin <0){return false;}else{return true}

}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */