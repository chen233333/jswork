//冒泡排序
function bubbleSort(str){
  //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortl数组的数据用于动画演示
    let sortLog = []
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for(let i = 0;i<arr.length - 1; i++){
           //从第一个开始比较相邻的两个数值
        for(let j=0; j<arr.length - i - 1;j++){
               //比较前的数组状态和定位指针保存到sortLog中，为保持演示效果，加多两行。
            sortLog.push([arr.concat(), [j,j + 1 ]])
            sortLog.push([arr.concat(), [j,j + 1 ]])
            sortLog.push([arr.concat(), [j,j + 1 ]])
            //比较相邻的两个元素，如果左边的大，那么就把大的交换到右边
            if( arr [ j ] > arr [ j + 1 ] ){
                //使用结构赋值的方法，把两个元素交换位置
                [arr [ j ],arr [ j + 1 ] ] = [ arr [ j + 1 ], arr [ j ] ]
               //比较之后的数组状态和定位指针保存到sortLog中
                sortLog.push([arr.concat(), [j,j + 1 ]])
            }
        }
    }
    //把排序最终状态的数组和取消定位指针保存到sortLog中，因为动画最后的状态是不显示比较数据的。
    sortLog.push([arr.concat(), [ -1,-1 ]])
//调用时请认真分析sortLog的数据结构
//consol.log（sortlog）
    return sortLog
}
//显示排序每一个步骤
function showLog(logValues,showElement){
    let str =''
    //解构赋值方法，从排序日志开始遍历器去取出一条结果，赋值给row和pos变量
    let {
        done,
        value: [row,pos]
    }=logValues.next()
//比对一下row和pos的值石是否与排序时保存一致
//conso.log（row）
//conso.log（pos）
    for (const key in row){
        //根据定位指针数据把进行的 数组编辑为红色
        let color = pos.indexOf(Number(key))> -1 ? 'color:red;':''
        //如果定位指针不是-1 （-1是最后一条记录），就调用延时方法调用slid函数显示一条记录
        //以形成动画效果
        str += '<span style="font-size' + row[key] * 20 + 'px;' +
            color +'">' + row[key] + '</span>'
    }
            showElement.innerHTML = str
        if(pos[0] != -1)
        setTimeout("showLog(logValues,showDiv)",500)
    }
//插入序列 
function insertSort(str){
    //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortl数组的数据用于动画演示
    let sortLog = []
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for(let i = 0;i<arr.length; i++){
           //从第一个开始比较相邻的两个数值
        for(let j=i; j>0;j--){
               //比较前的数组状态和定位指针保存到sortLog中，为保持演示效果，加多两行。
            sortLog.push([arr.concat(), [j-1,j  ]])
            sortLog.push([arr.concat(), [j-1,j  ]])
            sortLog.push([arr.concat(), [j-1,j ]])
            //比较相邻的两个元素，如果左边的大，那么就把大的交换到右边
            if( arr [ j-1 ] > arr [ j] ){
                //使用结构赋值的方法，把两个元素交换位置
                [arr[j - 1], arr[j]] = [arr[j], arr[j-1]]
               //比较之后的数组状态和定位指针保存到sortLog中
               sortLog.push([arr.concat(), [j-1,j ]])
            }
        }
    }
    //把排序最终状态的数组和取消定位指针保存到sortLog中，因为动画最后的状态是不显示比较数据的。
    sortLog.push([arr.concat(), [ -1,-1 ]])
//调用时请认真分析sortLog的数据结构
//consol.log（sortlog）
    return sortLog
}
//显示排序每一个步骤
function showLog(logValues,showElement){
    let str =''
    //解构赋值方法，从排序日志开始遍历器去取出一条结果，赋值给row和pos变量
    let {
        done,
        value: [row,pos]
    }=logValues.next()
//比对一下row和pos的值石是否与排序时保存一致
//conso.log（row）
//conso.log（pos）
    for (const key in row){
        //根据定位指针数据把进行的 数组编辑为红色
        let color = pos.indexOf(Number(key))> -1 ? 'color:red;':''
        //如果定位指针不是-1 （-1是最后一条记录），就调用延时方法调用slid函数显示一条记录
        //以形成动画效果
        str += '<span style="font-size' + row[key] * 20 + 'px;' +
            color +'">' + row[key] + '</span>'
    }
            showElement.innerHTML = str
        if(pos[0] != -1)
        setTimeout("showLog(logValues,showDiv)",500)
    }