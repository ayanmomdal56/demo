var timer = 60;
var sc = 0;
var rna=0;
function make() {

    var gape = "";
    for (let i = 0; i < 100; i++) {
        var rn = Math.floor(Math.random() * 10)
        gape += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector(".number").innerHTML = gape;
}
function timerrun() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").innerHTML = timer;
        }else{
        var g="GAME OVER"
            document.querySelector(".number").innerHTML=g;
        }

    }, 1000);
}

function gethit() {
    rna = Math.floor(Math.random() * 10)
    document.querySelector("#hitint").innerHTML = rna;
}

function getscore() {

    sc += 10;
    document.querySelector("#scoreid").innerHTML = sc;
}

document.querySelector(".number").addEventListener("click", function (dets) {
    var cli = Number(dets.target.textContent);
    if(cli == rna){
        getscore();
        gethit();
        make();
    }
    
});

make();
timerrun();
gethit();





