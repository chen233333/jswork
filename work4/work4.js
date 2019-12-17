document.write("<p>金字塔</p>")//html文档页面中输出内容
let level =prompt('请输入金字塔的层数')
level =parseFloat(level)&&Number(level)//获取输入的纯数字，其余情况皆转为NaN
//判断用户输入的数据是否合法
if (isNaN(level)){//判断用户的输入是否为数值
    alert('金字塔的层数是数字')
}
//循环遍历金字塔的层数
for (let i=1;i<=level;++i ){
    //输出星星前的空格
    let blank =level - i;
    //空格与层数比较 ，如果空格小于层数则打印空格 
    for(let k=0;k<blank;++k){       
         document.write('&nbsp;');
}
//打印星星
    let star =i *2 -1
    for (let j=0;j<star;++j){
        document.write('*')
    }
//换行
    document.write("<br>")
}
    let str ='<table border="1">'//table是做表，border=“1”是表的宽度
    //9x9
    for (let i=1;i<10;++i){//遍历所有的行
        str +='<tr>'
        for (var j=1;j<=i;++j){//遍历每行中的列
            //拼接单元格
            //九九乘法
            str +='<td>'+j+'*'+i+'='+(j*i)+'</td>'
        }
        str +='</tr>'
    }
    str +='</table>'
    //设置div的html文档内容
    //或者将拼接的字符串显示到页面中
    document.getElementById('table').innerHTML=str
   