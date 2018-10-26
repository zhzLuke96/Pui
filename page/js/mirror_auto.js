!function(document){
    function editor_factory(select_dom, theme) {
        theme = theme || "mdn-like";
        return CodeMirror.fromTextArea(
            typeof select_dom == "string" ? document.getElementById(select_dom) : select_dom,
            {
                mode: "htmlmixed",
                lineNumbers: true,
                // theme: theme,
                styleActiveLine: true,
                lineWrapping: true,
                foldGutter: true,
                // lineWiseCopyCut: true,
                cursorHeight: .8,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
                matchBrackets: true,
                readOnly: true,
        });
    }
    for (v of document.querySelectorAll(".code_view>textarea")){
        let editor = editor_factory(v);
        // 不知道是哪里的问题，docs页面里不触发一下init的时候不显示...
        setTimeout(function() {
            editor.refresh();
        },1);
    }
}(document)
