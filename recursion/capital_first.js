/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++capitalizeFirst+++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// capitalize first letter

function capitalizeFirst (niz) {

    var brojac = niz.length-1;

    function helper(brojac){
          if(brojac<0){return;}
             niz[brojac]= niz[brojac].charAt(0).toUpperCase() + niz[brojac].slice(1);
            helper(brojac-1);
    }
          helper(brojac);
           return niz;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
