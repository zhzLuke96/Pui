var $ = (...args)=> document.querySelectorAll.apply(document,args);

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
