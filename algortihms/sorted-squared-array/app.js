function sortedSquaredArray(array) {
    // Write your code here.
   array =	array.map((x) => {
           return x**2;
      }).sort((a,b) => {
       return a-b
   })
    
      return array
  }