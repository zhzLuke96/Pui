# Pui

🔨CSS farm-work(tool)

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
> <br>(这个想法一点也不好...core和util其实交际很少，为了简单的属性就让core模块也增大数倍，不是很值...之后将会让core脱离util)
> <br>**当然这并不代表util是200k的废话**

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
*.card.shadow can created colored shadow

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
...

# todo

-   [x] util.css
-   [x] grid layout(flex)
-   [ ] core components
    -   [x] btn
    -   [x] btns(group)
    -   [x] media
    -   [ ] forms
    -   [ ] table
    -   [x] card
    -   [x] cards
-   [ ] js
-   [ ] ...

# 后

虽然写的是`轻量`...但是单单util就已经200k了...

> **关于pack.js**
> <br>
> 整体的打包流程就不复杂，遂没有上webpack，`dist目录`打包完后有两个文件夹，`css目录`是从sass编译过来的部分，`post目录`呢就是经过`autoprefix`之后的内容
>
> 打包需要：<br>
>
> -   [autoprefix](https://www.npmjs.com/package/autoprefixer)
> -   [post-cli](https://github.com/pirxpilot/postcss-cli)
> -   [node-sass](https://github.com/sass/node-sass)
