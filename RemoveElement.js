const removeElement = (nums, val) => {
  let k = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  
  return k;
};

let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1)); 
console.log(nums1); 

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2)); 
console.log(nums2); 
