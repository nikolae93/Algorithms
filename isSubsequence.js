/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++areThereDuplicates++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// are there duplicate strings

//var str1 = "hello";   var str2 = "hello world";

function isSubsequence(st1,st2) {

    var i = 0;
    var j = 0;

    if (!str1) return true;

    while (j < str2.length) {
      if (str2[j] === str1[i]) {i++};
      if (i === str1.length)  { return true};
      j++;
    }
   
    return false;
  }

 // isSubsequence(str1,str2);
  
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */