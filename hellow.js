console.log("wangqing")
console.log("wangqing")

var bianhao=parseInt(prompt("请输入汽油编号"));
var sheng =parseFloat(prompt("请输入汽油升数"));
if(bianhao==92){
    if(sheng>=20){
        var price=sheng*5.9;
    }else{
        var price =sheng*6;
    }
}else if (bianhao==97){
    if(sheng>=30){
        var price =sheng*9.95;
    }else{
        var price=sheng*7;
    }
}
alert("价格是"+price);