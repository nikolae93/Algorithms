/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++flatten+++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function flatten(niz){

       var final =[]; 
        var brojac = 0;  
        var nz= niz.toString().split(""); 
        var uslov = nz.length-1;

       function helper (brojac){
         if(brojac > uslov) {return;}
        
        if(  parseInt(nz[brojac]) > -Infinity ){
          final.push(parseInt(nz[brojac]));
        }
          helper(brojac+1);
       }

       helper(brojac);
      
       return(final);
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

