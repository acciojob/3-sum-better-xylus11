function threeSum(arr, target) {
// write your code here
	let a= arr.length;
	let sum =0;
	let i =0;
	while(i<a)
		{  
			if(sum<=target)
		{
			sum = arr[i]+sum;
		}
		 else{
			 i++;
		 }
			i++;
		}
	return sum;
  
}

module.exports = threeSum;
