/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++rekurzivni_reverse++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// reversing a string recursively

const reverse = st => {

    let niz = st.split("");
    let brojac = niz.length -1 ;
      let niz2=[];

      function helper (brojac,niz){

        if(brojac===0){ return niz2.push(niz[0]); }

        niz2.push(niz[brojac]);

           helper(brojac-1,niz) ;
      }

       helper(brojac,niz);

       niz2=niz2.join("");
       
       return niz2;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */