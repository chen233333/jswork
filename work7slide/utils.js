//冒泡排序
function bubbleSort(str){
    //把字符串切分成数组
    let arr = str.split(',')
    //比较轮数，数组有多少个数字，就比较数组长度-1
    let sortLog = []
    for(let i = 0;i<arr.length - 1; i++){
        //从第一个开始比较相邻的两个数值
        for(let j=0; j<arr.length - i - 1;j++){
            sortLog.push([arr.concat(), [j,j + 1 ]])
            sortLog.push([arr.concat(), [j,j + 1 ]])
            sortLog.push([arr.concat(), [j,j + 1 ]])

            if( arr [ j ] > arr [ j + 1 ] ){
                 //使用结构赋值的方法，把两个元素交换位置
                [arr [ j ],arr [ j + 1 ] ] = [ arr [ j + 1 ], arr [ j ] ]
               
                sortLog.push([arr.concat(), [j,j + 1 ]])
            }
        }
    }
    sortLog.push([arr.concat(), [ -1,-1 ]])
    return sortLog
}
function showLog(logValues,showElement){
    let str =''
    let {
        done,
        value: [row,pos]
    }=logValues.next()

    for (const key in row){
        let color = pos.indexOf(Number(key))> -1 ? 'color:red;':''
        str += '<span style="font-size:' + row[key] * 20 + 'px;' +
            color +'">' + row[key] + '</span>'
    }
            showElement.innerHTML = str
        if(pos[0] != -1)
        setTimeout("showLog(logValues,showDiv)",500)
    }
    //插入排序
function insertSort(str2){
    let arr = str2.split(',')
    let sortLog = []
    for(let i = 1; i<arr.length ; i++){
        for(let j=i; j>0 ;j--){
            sortLog.push([arr.concat(), [j-1,j ]])
            sortLog.push([arr.concat(), [j-1,j ]])
            sortLog.push([arr.concat(), [j-1,j ]])
        if(arr[j-1]>arr[j]){
                [arr[j-1],arr[j] ]= [arr[j],arr[j-1 ] ]
                sortLog.push([arr.concat(), [j-1,j ]])
            }
        }
    }
    sortLog.push([arr.concat(), [ -1,-1 ]])
    return sortLog
}
function showLog(logValues,showElement){
    let str2 =''
    let {
        done,
        value: [row,pos]
    }=logValues.next()

    for (const key in row){
        let color = pos.indexOf(Number(key))> -1 ? 'color:red;':''
        str2 += '<span style="font-size:' + row[key] * 20 + 'px;' +
            color +'">' + row[key] + '</span>'
    }
            showElement.innerHTML = str2
        if(pos[0] != -1)
        setTimeout("showLog(logValues,showDiv)",500)
    }