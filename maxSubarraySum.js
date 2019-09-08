/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++maxSubArray+++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// finding the max subarray

// test purpose
// var niz1 = [1,2,4,6,7,8,9,3,2,1];
// var niz2=[100,200,300,400]

function maxSubarraySum(niz, br){
    var maxsum =-Infinity; 
    var tempmax=0;

           for( var i=0;i<br ; i++){
               tempmax+=niz[i];
           }

             maxsum=tempmax; var k=0;

           for (var j=br;j<=niz.length-br+1;j++){

             tempmax=tempmax-niz[k] +niz[j] ; 
             k++;

             if (tempmax> maxsum) {maxsum=tempmax;}
           }
     
       if(isNaN(maxsum)){return null;}
       return maxsum;
  }

  // testing purpose
//   maxSubarraySum(niz1,2);
//   maxSubarraySum(niz2,2);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */