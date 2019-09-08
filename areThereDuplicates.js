/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++areThereDuplicates++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function areThereDuplicates (){
    var niz=[]; 
     var fr1={};

      for (var u=0;u<arguments.length;u++){
          niz.push(arguments[u]);
      }
     
      for (var i=0;i<niz.length;i++){

        if(fr1[niz[i]]){fr1[niz[i]]++}else 
        {fr1[niz[i]]=1;}

    }

    for (var j=0; j<niz.length;j++){

        if(fr1[niz[j]]>1){ return true;}

    }
   
    return false;

}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */