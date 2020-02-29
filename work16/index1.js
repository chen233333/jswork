function animate(obj,option) { 
    clearInterval(obj.timer);                   //防止多次触发事件，重复开启定时器
    obj.timer=setInterval(function(){
              var flag=true;                    //元素对象移动的标志，trun表示已完成
        for(var k in option){
            var leader=parseInt(getStyle(obj,k))||0;    //获取指定元素当前属性值
            var target =option[k];                      //获取指定元素目标属性值
            var step=(target-leader)/10;                //计算每次移动的步长
            step=step>0?Math.ceil(step):Math.floor(step);
            leader=leader+step;                 //计算属性值
            obj.style[k]=leader+'px';           //设置属性值
            if(leader !=target){                //判断是否完成移动
                flag=false;
            }
        }
        if (flag){                                  移动完成后清除定时器
            clearInterval(obj.timer);
        }
    },15);
 }
 function getStyle( obj,attr) {
     if(window.getComputedStyle){                           //标准浏览器
         return window.getComputedStyle(obj,null)[attr];
     }                                                      //早期版本IE浏览器，IE6~8
     else{
         return obj.currentStyle[attr];
     }
   }
   var obj = document.getElementById('box');
  obj.onclick = function() {
    let left = parseInt((Math.random()*800)+100);
    let top = parseInt((Math.random()*800)+100);
    animate(obj, {'left': left, 'top': top});
  };