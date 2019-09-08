/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++rekurzivni_proizvod_niza++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// function that recursively sums up elements of the given array

function productOfArray (arr) {

          var brojac =arr.length-1;

     function helper (brojac){

           if (brojac === 0){return arr[0];}
           return arr[brojac] * (helper(brojac-1));
     }
     return  helper(brojac);

}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */