const randInt = (min, max) => Math.round(Math.random() * max) + min
const randRange = arr => arr[randInt(0, arr.length - 1)]
const randStr = () => Math.random().toString(36).substring(2)

var repo_tpl = new Tpl($("#repo-tpl"))
var cont_tpl = new Tpl($("#cont-tpl"))
var flag_tpl = new Tpl($("#flag-tpl"))
for (let i = 0; i < 5; i++) {
    repo_tpl.more({
        name:randStr(),
        lang:randRange(["JavaScript","Pyhton","Go","Assembly","Sass","Java","C"]),
        star:randInt(10,1000),
        dot_c:randRange(["brown","red","yellow","green","blue","teal","purple","pink","cyan"])
    })
    cont_tpl.more({
        name:randStr().substring(6),
        proVal:randInt(20,100),
        commits:randInt(1,50)
    })
}

const rand_clor = () => randRange(["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"])
for (let i = 0; i < 365; i++) {
    flag_tpl.more({
        bg: rand_clor()
    })
}