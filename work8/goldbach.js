/*var num =parseInt(prompt("请输入一个偶数"))
IDBCursorWithValue(num)
function factorial(a){
    var sum=0 
    for(var i=1;i<=0;i++){
        if(a%i==0){
            sum++
        }
    }
    if (sum==2){
        return true
    }else{
        return false
    }
}
function isTrue(a){
    for(var i=2;i<a-2;i++){
        var j=a-i
        if(factorial(i)&&factorial(j)){
            console.log(a+"可以拆分为两个质数"+i+"与"+j+"的和")
        }
    }
}  */
var goldbach=function(n){
    for(var i=2;i<n;i++){
        if(isPrime(i)&&isPrime(n-i)){
            return{n1:i,n2:(n-i)};
        }
 }
        return undefined
    }
    var isPrime=function (n){
        for(var i=2;i<n;i++){
            if(n%i==0){
                return false
            }
        }
        return true
}
var isPrime =function (n){
    for(var i=2;i<n;i++){
        if(n%i==0){return false
        }
    }
    return true
}
for(var i=4;i<2000;i+=2){
    var ret =goldbach(i)
    if (ret ==undefined){
        console.log("not found for:"+i)
    }else{
        console.log("n1:"+true.n1+"n2:"+ret.n2)
            
        }
    }
