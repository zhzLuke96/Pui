!function(document){
    function editor_factory(select_dom, theme) {
        theme = theme || "mdn-like";
        return CodeMirror.fromTextArea(
            typeof select_dom == "string" ? document.getElementById(select_dom) : select_dom,
            {
                mode: "htmlmixed",
                lineNumbers: true,
                autoRefresh:true,
                theme: theme,
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
    for (v of document.querySelectorAll(".code_view>textarea"))editor_factory(v);
}(document)
