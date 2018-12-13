const $ = q => document.querySelector.call(document, q)
const $$ = q => document.querySelectorAll.call(document, q)
const template = (text, data) => text.replace(/\{\{\s*(\w+?)\s*\}\}/g, function (match, key) {
    return data[key];
})
const createNode = html => {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.childNodes[0];
}

// clone and append ele
// support attr slot
class Tpl {
    constructor(ele) {
        this.$ = ele
    }
    slotOn(ele, data) {
        var html = ele.outerHTML
        if(data){
            var n = createNode(template(html, data))
        }else{
            var n = createNode(html)
        }
        n.style.cssText = n.style.cssText.replace(/display:\s*?none\s*?;?/g,"")
        return n
    }
    more(data) {
        var parent = this.$.parentNode
        parent.appendChild(this.slotOn(this.$, data))
    }
    less() {
        var ele = this.$.nextElementSibling
        if (ele) {
            var parent = this.$.parentNode
            parent.removeChild(ele)
        }
    }
}
