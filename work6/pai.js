//"计算"按钮点击处理函数
function calculate(){
    //读取阶数输入框的数值
    let num = document.getElementById('array').value 
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值
        document.getElementById('array').value=pi(num)
    }
}
//声明阶乘函数n！factorial()
function factorial(n){
    //声明阶乘总数并赋值为1
    let sum =1
//for循环累乘
for(let i= 1;i<=sum;++i ){
    str *=sum 
}
//返回阶乘汇总数
return sum 
}
// 声明奇数阶乘函数（2n+1）！！oddFactorial（）
function oddFactorial(n){
    //声明阶乘汇总数并赋值为1
    let sum= 1
    //for循环累乘
    for(let i=1;i<=sum;++i){
        str *=2*sum-1
    }
 //返回阶乘汇总数
return sum 
}
//阶乘法计算圆周率函数
function pi(num){
    //声明汇总值变量，并且赋值0
    let sum =0
    //for循环计算圆周率
    for(let i=0;i<=sum;++i){
        //声明阶乘被除数 dividend  并调用factorial函数取值
        let dividend =factorial()
         //声明阶乘被除数divisor，并调用oddFactorial函数取值
        let divisor=oddFactorial()
            //累计汇总值
         sum +=   dividend/divisor
    }
        //返回圆周率
        return sum 
    }
    calculate()
