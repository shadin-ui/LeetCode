let str = "hello world";
let length = str.length-1;
let rev = ""
for(i = length; i >=0 ; i--){
    rev = rev+str[i]
}
if (str === rev)
{
    console.log("its palindrome");
}else{
    console.log("its not a palindrome");

}