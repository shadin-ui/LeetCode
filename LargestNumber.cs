using System;
using System.Linq;

public class Solution {
    public string LargestNumber(int[] nums) {
        string[] numStrs = new string[nums.Length];

        for (int i = 0; i < nums.Length; i++) {
            numStrs[i] = nums[i].ToString();
        }

        Array.Sort(numStrs, (x, y) => (y + x).CompareTo(x + y));

        if (numStrs[0] == "0") {
            return "0";
        }

        string result = "";
        foreach (var num in numStrs) {
            result += num;
        }

        return result;
    }
}
