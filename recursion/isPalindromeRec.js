/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++rekurzivni_palindrom++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// cheking if a string is a palindrome but recursively

function isPalindrome(st){

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
    
     if(niz2===st){
      return true;}

      else {
      
        return false;}
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */