function push_ele(ele){
    if(typeof ele == "string")ele = document.getElementById(ele);
    let ne = ele.cloneNode(true);
    ne.id = "";
    function insertAfter(newElement, targentElement) {
        var parent = targentElement.parentNode;
        if (parent.lastChild == targentElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targentElement.nextSibling)
        }
    }
    insertAfter(ne,ele);
}

function pop_ele(ele){
    if(typeof ele == "string")ele = document.getElementById(ele);
    let pr = ele.parentNode;
    let cls_name = ele.className;
    let counter = 0;

    for (let ch of pr.children) {
        if(ch.className == cls_name){
            if(counter != 0){
                pr.removeChild(ch);
                return;
            }
            counter += 1;
        }
    }
}
