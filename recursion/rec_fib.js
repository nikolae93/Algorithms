/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++rekurzivni_fibonaci+++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// naci n-ti clan fibonacijevog niza 1,1,2,3,5,8.......... 

// find the n-th element of fibbonaci sequence

function fib(n){

        n-=1;
        var niz =[1,1];

         function dod(n) {

             if(n===0){return niz;}
         
         niz.push( niz[ niz.length-1] + niz[niz.length-2 ] );

          dod(n-1);
       }

       dod(n);
     
    return niz[niz.length-2];

}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */