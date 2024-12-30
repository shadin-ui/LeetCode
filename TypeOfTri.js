function triangleType(nums) {
    nums.sort((a, b) => a - b);
    if (nums[0] + nums[1] <= nums[2]) {
        return "none";
    }
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        return "equilateral";
    }
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
        return "isosceles";
    }
    return "scalene";
}

console.log(triangleType([3, 3, 3])); 
console.log(triangleType([3, 4, 5])); 
console.log(triangleType([1, 2, 3]));
