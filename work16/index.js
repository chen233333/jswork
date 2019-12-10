//
function $(id){
    return document.getElementById(id);
}
//
$('smallBox').onmouseover=function(){
    $('mask').style.display='block';
    $('bigBox').style.display='block';
};
//
$('smallBox').onmouseover=function(){
    //
    $('mask').style.display='none';
    $('bigBox').style.display='none';
};
//
//
$('smallBox').onmouseover=function(event){
    var event=event||window.event;
    //
    var pageX=event.pageX||event.clientX+document.documentElement.scrollLeft;
    var pageY=event.pageY||event.clientY+document.documentElement.scrollTop;
    //
    var boxX=pageY-$('box').offsetLeft;
    var boxY=pageY-$('box').offsetTop;
    //
    var maskX=boxX-$('mask').offsetWidth/2;
    var maskY=boxY-$('mask').offsetHeight/2;
    //
    if(maxkX<0){
        maskX=0;
    }
    if(maxkX>$('smallBox').offsetWidth-$('mask').offsetWidth){
        maxkX=$('smallBox').offsetWidth-$('mask').offsetWidth;
    }
    if(maskY<0){
        maskY=0;
    }
    if(maxkY>$('smallBox').offsetHeight-$('mask').offsetHeight){
        maxkY=$('smallBox').offsetHeight-$('mask').offsetHeight;
    }
    //
    $('mask').style.left=maskX+'px';
    $('mask').style.top=maskY+'px';
    //
    var bigImgToMove=$('bigImg').offsetWidth-$('bigBox').offsetWidth;
    //
    var bigImgToMove=$('smallBox').offsetWidth-$('mask').offsetWidth;
    //
    var rate =bigImgToMove/maskToMove;
    //
    $('bigImg').style.left=-rate*maskY+'px';
    $('bigImg').style.top=-rate*maskY+'px';

}