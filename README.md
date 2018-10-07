# Pui
🔨CSS farm-work(tool)

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

> core'll be built according to UTIL.css by @extend (sass)

# usage
#### gird
> *基于flexbox构建的网格布局，语义容易理解还能方便的修改row cell对齐方式

```html
<div class="container">
    <div class="row row-gap">
        <div class="col-sm:1 col-xs:5 cell:center">
            <div class="demo t:center bl:center h:1">
                1
            </div>
        </div>
        <div class="col-sm:3 col-xs:10">
            <div class="demo t:center bl:center h:2">
                2
            </div>
        </div>
        <!-- ... -->
    </div>
</div>
```
#### btn
...

#### other

# todo
- [x] util.css
- [ ] button
- [x] grid layout(flex)
- [ ] media class
- [ ] core part
- [ ] ...

# 后
虽然写的是轻量...但是单单util就已经100k了...

> **关于pack.js**
> <br>
> 整体的打包流程就不复杂，遂没有上webpack，`dist目录`打包完后有两个文件夹，`css目录`是从sass编译过来的部分，`post目录`呢就是经过`autoprefix`之后的内容

> 打包需要：<br>
> autoprefix<br>
> post-cli<br>
> node-sass
