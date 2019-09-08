/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++++Quick_sort+++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function pivot (arr, start=0,end=arr.length+1){

   function swap (arr,i,j){
        [ arr[i] , arr[j] ] = [ arr[j] , arr[i] ];
   }

   var pivot = arr[start];
   var swapIndex = start ;

   for (var i = start+1; i < arr.length ; i++){
     if(pivot > arr[i]){
       swapIndex++;
       swap(arr,swapIndex,i);
     }
   }
   swap(arr,start,swapIndex);
  
   return swapIndex;
}

function Quick_sort(arr, left=0, right=arr.length-1) {
     if(left < right){
    let pivotIndex = pivot(arr,left,right)
    // levo   left
    Quick_sort(arr,left,pivotIndex-1);
    // desno  right
    Quick_sort(arr,pivotIndex+1,right);
     }
     return arr;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */