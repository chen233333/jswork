function monkey(){
    let total= document.getElementById("monkeytotal").value 
    let kick= document.getElementById("monkeytotal").value 
    total = parseInt(total)&&Number(total)
    kick = parseInt(kick)&&Number(kick)
     if(isNaN(total)||isNaN(kick)){
         alert('请输入数字')
         return
     }
     let monkey=[]
     for (let i=1;i<=total;i++){
         monkey.push(i)
     }
     let i=0
     while(monkey.length>1){
         i++;
         head=monkey.shift()
         if(i%kick!=0){
             monkey.push(head);
         }
     }
     document.getElementById('monkeyking').innerText=monkey[0]
}
function stat(){
    let str=document.getElementById('str').value
   
    // 1.用split()把字符串切分成数组
    // 2.建议使用数组的reduce回调函数统计，也可自行使用数组统计。
    // 使用JSON.stringfy()函数把对象转换成字符串显示到id为result的div中

    
    let obj = str.split('').sort().reduce(
        (r, e) => (r[e]++ || (r[e] = 1), r), {}
        )
    console.log(obj)
    document.getElementById('result').innerText=JSON.stringify(obj)
}