document.body.onscroll = function() {
    let scrollY = window.scrollY;
    let viewHeight = window.innerHeight;
    document.querySelector("#varY").innerText = scrollY;
    var condi1 = document.getElementById("condi-1");
    var condi2 = document.getElementById("condi-2");
    var condi3 = document.getElementById("condi-3");
    var condi4 = document.getElementById("condi-4");

    var condi1Top = condi1.offsetTop;
    var condi2Top = condi2.offsetTop;
    var condi3Top = condi3.offsetTop;

    if (scrollY + window.innerHeight - (condi1.offsetHeight) >= condi1Top && scrollY < condi1Top) {
        document.querySelector(".big-receipt").dataset.scene = 1
    } else if (scrollY + window.innerHeight - (condi2.offsetHeight) >= condi2Top && scrollY < condi2Top) {
        document.querySelector(".big-receipt").dataset.scene = 2
    } else if (scrollY + window.innerHeight - (condi3.offsetHeight) >= condi3Top && scrollY < condi3Top) {
        document.querySelector(".big-receipt").dataset.scene = 3
    } else if (scrollY + window.innerHeight - (condi4.offsetHeight)) {
        document.querySelector(".big-receipt").dataset.scene = 4
    }

    var bagcondi2 = document.getElementById("bagcondi-2");
    var bagcondi2Top = bagcondi2.offsetTop;
    if (scrollY + window.innerHeight - (bagcondi2.offsetHeight) >= bagcondi2Top) {
        document.querySelector("#bagglass").dataset.scene = 1
        console.log("่jim")
    } else {
        document.querySelector("#bagglass").dataset.scene = 0
    }
}

function show_Detleyentafo() {
    document.querySelector(".menufood").dataset.show = "yentafo";
};

function show_Detlericechicken() {
    document.querySelector(".menufood").dataset.show = "ricechicken";
};

function show_Detlekapu() {
    document.querySelector(".menufood").dataset.show = "kapu";
    console.log("jimrobo");
};

function back() {
    document.querySelector(".menufood").dataset.show = "start";
    window.scroll(0, 3000);
};