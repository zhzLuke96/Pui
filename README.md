# Pui

🔨`lightweight` css framework

> [normalize](https://github.com/necolas/normalize.css)

# usage & guide
[link...](https://zhzluke96.github.io/Pui/)

# utility-first

```html
<div class="
smoomth f-c:blue-lightest
hover:f-c:red-darkest
t:center bg:brown-darker
hover:bg:brown shadow:sm
hover:shadow:xl hover:f-w:900
r:6 f-f:coder f-w:100 f-s:5
">
hello world
</div>
```

> ~~core'll be built according to UTIL.css by @extend (sass)~~
> <br>**coding proved it’s bad idea, In design, but good for work**

# todo

-   [x] util.css
-   [x] grid layout(flex)
    -   [x] 10 cols
    -   [x] order
    -   [x] media hidden
    -   [ ] ~~12,14 cols~~ `由于flex的各种特性，不需要更多的划分(吧)`
-   [ ] core elements
    -   [x] btn
    -   [x] btns(group)
    -   [x] media
    -   [ ] forms
        -   [x] input
        -   [ ] checkbox,text,file_upload...
    -   [x] table
    -   [x] card
    -   [x] cards
    -   [x] modal(prue css)
    -   [x] progress(h5)
-   [ ] mulit-media tool ~~放在这里意思一下~~
    -   [ ] video
    -   [ ] img
-   [ ] ~~js~~ `poiJs` [Learn more](https://zhzluke96.github.io/PoiJs/)
-   [ ] ...

# 后

写的是`轻量`...但是单单util就已经200k了...(虽然不推荐，20k的core是够用的)

> **关于pack.js**
> <br>
> 整体的打包流程就不复杂，遂没有上webpack，`dist目录`打包完后有两个文件夹，`css目录`是从sass编译过来的部分，`post目录`呢就是经过`autoprefix`之后的内容，`dist`里就是最后`cssmin`处理完成的
>
> pack.js required libs:<br>
>
> -   [autoprefix](https://www.npmjs.com/package/autoprefixer)
> -   [post-cli](https://github.com/pirxpilot/postcss-cli)
> -   [node-sass](https://github.com/sass/node-sass)
> -   [cssmin](https://github.com/jbleuzen/node-cssmin)
