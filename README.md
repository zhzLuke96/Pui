# Pui

🔨CSS farm-work(tool) `lightweight` css framework

> [normalize](https://github.com/necolas/normalize.css)

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
> <br>**coding proved it’s bad idea, In design**

# usage

#### gird

> \*基于flexbox构建的网格布局，语义容易理解还能方便的修改row cell对齐方式

```html
<div class="container">
    <div class="row row-gap">
        <div class="col-sm:1 col-xs:5 cell:center">
            <div class="demo t:center bl:center h:1">
                1
            </div>
        </div>
        <div class="col-sm-offest:2 col-sm:3 col-xs:10">
            <div class="demo t:center bl:center h:2">
                2
            </div>
        </div>
        <!-- ... -->
    </div>
</div>
```

\*pls keep no text-node in div\[class^="col"],otherwise css-style will not be what you want

#### btn

```html
<button type="button" name="button" class=" btn btn-blue">click</button>

<div class="btns">
    <button type="button" name="button" class=" btn btn-blue ripple">click</button>
    <button type="button" name="button" class=" btn btn-blue ripple">click</button>
    <button type="button" name="button" class=" btn btn-blue ripple">click</button>
</div>
```

\*ripple is default ripple-inner, and ripple-outer is outward(Compatibility is not good, no JS).

#### card

```html
<div class="card primary">primary</div>
<div class="cards">
    <div class="card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam ullam, atque eveniet enim mollitia fugit quo aut molestiae voluptas!</div>
    <div class="card">other</div>
</div>
```

\*.card.shadow can created colored shadow

#### media

```html
<div class="media">
    <div class="avatar">
        <a href="#" class="avatar cell:center">
            <img src="./time.jpg">
        </a>
    </div>
    <div class="body">
        <div class="title">
            <h1 class="m-t:0">Lorem</h1>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
</div>
```

#### form

...

#### table

like bootstrap

#### modal

```html
<a class="btn btn-block btn-blue ripple" href="#modal1">modal1</a>

<div class="modal" id="modal1">
    <div class="body cards no-b shadow">
        <div class="card container">
            <div class="row row:baseline">
                <div class="col:9">
                    <span class="f-w:900 f:5">title</span>
                </div>
                <a class="col f-w:900 f:6 hover:f-c:purple" href="#close">×</a>
            </div>
        </div>
        <div class="card container">
            <div class="row row-gap">
                <div class="col:1"></div>
                <div class="col f:4 p:4">hello world!</div>
            </div>
        </div>
        <div class="card container">
            <div class="btns col-offest:7 col:3">
                <a class="btn btn-dark outline ripple" href="#close">取消</a>
                <a class="btn btn-blue ripple">提交</a>
            </div>
        </div>
    </div>
</div>
```

\*cards layout not required

#### more

...

# todo

-   [x] util.css
-   [ ] grid layout(flex)
    -   [x] 10 cols
    -   [ ] 12,14 cols
-   [ ] core components
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
-   [ ] ~~js~~
-   [ ] ...

# 后

虽然写的是`轻量`...但是单单util就已经200k了...(虽然不推荐，但是只是用core模块20k也够用了)

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
