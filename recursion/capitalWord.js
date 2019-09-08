/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++word_capitalisation+++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// in a given array capitalize words

function capitalizeWords (niz) {

       let brojac = niz.length-1;

       function helper(brojac){

        if(brojac<0){return}
        niz[brojac] = niz[brojac].toUpperCase();
        helper(brojac-1);
        
       }

       helper(brojac);
       return niz;

}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
