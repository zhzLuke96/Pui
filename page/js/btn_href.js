var $ = (...args)=> document.querySelectorAll.apply(document,args);
//
// 手贱老是写错，直接写个Polyfill-lite
// 功能简单，就是给button按钮带上href属性
// author: zhzLuke96
function btn_href(){
    var btns = $("button");
    for (let btn of btns) {
        for (attr of btn.attributes) {
            if(attr.name=="href"){
                let val = attr.value;
                btn.addEventListener("click",()=>{
                    window.open(val);
                })
            }
        }
    }
}

btn_href();
