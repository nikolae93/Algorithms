/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++++Radix_sort+++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// HELPER FUNCTIONS 

function getDigit (n,i){
    return Math.floor( Math.abs(n) / Math.pow(10, i)) % 10 ;
   }
   
   function digitCount (n) {
   if(n === 0 ){return 1;}
   return Math.floor(Math.log10(Math.abs(n))) + 1 ;
   }
   
   function mostDigit (nums){
     var maxdi =0;
      for(var i=0; i< nums.length ; i++){
        maxdi = Math.max( maxdi, digitCount(nums[i]) );
      }
   
      return maxdi ;
   }
   
   // Glavna funkcija    Main function
   
   function radixSort(nums){

     let maxDigitCount = mostDigit(nums);

     for(let k = 0; k < maxDigitCount; k++){
         let digitBuckets = Array.from({length: 10}, () => []);

         for(let i = 0; i < nums.length; i++){
             let digit = getDigit(nums[i],k);
             digitBuckets[digit].push(nums[i]);
         }
         nums = [].concat(...digitBuckets);
     }
    
     return nums;
   }

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */