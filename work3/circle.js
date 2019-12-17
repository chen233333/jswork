var r = prompt('请输入圆的半径')//prompt弹出输入框
 r = parseFloat(r)&&Number(r)//获取输入的纯数字，其余情况皆转为NaN
if (!isNaN(r)) {//isNaN() 函数用于检查其参数是否是非数字值。
    var cir = 2 * Math.PI * r
    var area = Math.PI * r * r 
    document.getElementById('r').value =r //返回指定 ID 的元素：
    document.getElementById('cir').value=cir.toFixed(2)//toFixed 是取小数点后几位数
    document.getElementById('area').value=area.toFixed(2)
}
else {
    alert('请输入正确的数字')
}