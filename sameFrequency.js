/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++same_frequency++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function sameFrequency (n1,n2){
    
    var fr1 ={}; 
    var fr2= {};

   var niz1 = n1.toString().split(""); 
   var niz2 = n2.toString().split("");
   
    for (var i=0;i<niz1.length;i++){

        if(fr1[niz1[i]]){fr1[niz1[i]]++}else 
        {fr1[niz1[i]]=1;}

    }

    for (var i=0;i<niz2.length;i++){

        if(fr2[niz2[i]]){fr2[niz2[i]]++}else 
        {fr2[niz2[i]]=1;}

    }

for (var j=0;j<niz1.length;j++){
    if (fr1.hasOwnProperty(niz1[j]) && fr2.hasOwnProperty(niz1[j]) && fr1[niz1[j]]===fr2[niz1[j]] ){

    }  else {return false;}
}

    return true;
}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */