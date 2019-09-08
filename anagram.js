/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++Anagram+++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// da li je string anagram koristiti frequency counter da bude O(n) nikako O(n*n)

// to check if strings are anagrams,  O(n) solution

function isana (st1,st2){
    var freq1 ={};
     var freq2 ={};

    var niz1 = st1.split(""); 
     var niz2 = st2.split("");

    for (var i=0;i<niz1.length;i++){
        
        if (freq1[niz1[i]]){freq1[niz1[i]]++ ;} else 
        {freq1[niz1[i]]=1;}
    }
    for (var k=0;k<niz2.length;k++){

        if (freq2[niz2[k]]){freq2[niz2[k]]++ ;} else 
        {freq2[niz2[k]]=1;}
    }

     for(var j=0 ; j<niz1.length;j++){
    if (freq1.hasOwnProperty(`${niz1[j]}`) && freq2.hasOwnProperty(`${niz2[j]}`) && freq1[niz1[j]]=== freq2[niz1[j]] ) {

    }    else {return false ;}
     }

   
       return true;


}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */