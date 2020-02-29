//设置秒杀得结束时间为15秒之后
let endseconds = new Date().getTime() + 15 * 1000;
//声明变量保存剩余的时间
let d = h = m = s = 0;
//设置定时器，实现限时秒杀效果
let id = setInterval(seckill, 1000);

function seckill() {
    let nowtime = new Date();//获取当前时间
    //获取时间差，单位秒
    let remaining = parseInt((endseconds - nowtime.getTime()) / 1000);
    //判断秒杀是否过期
    if(remaining > 0) {
        d = parseInt(remaining / 86400);//计算剩余天数（除以60*60*24取整，获取剩余的天数）
        h = parseInt((remaining / 3600) % 24);//计算剩余小时（除以60*60*转换为小时，与24取模，获取剩余的小时）
        m = parseInt((remaining / 60) % 60);//计算剩余分钟（除以60转为分钟，与60取模，获取剩余的分钟）
        s = parseInt(remaining % 60);//计算剩余秒（与60取模，获取剩余的秒数）
        //统一利用两位数表示剩余的天、小时、分钟、秒
        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    }else {
        clearInterval(id);//秒杀过期，取消定时器
        d = h = m = s = '00';
    }
    //将剩余的天、小时、分钟和秒显示到指定的网页中
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}