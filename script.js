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
    var bagcondi1 = document.getElementById("bagcondi-1");
    var bagcondi2 = document.getElementById("bagcondi-2");
    var bagcondi1Top = bagcondi1.offsetTop;
    var bagcondi2Top = bagcondi2.offsetTop;
    console.log(bagcondi1Top)
    if (scrollY + window.innerHeight - (bagcondi1.offsetHeight) >= bagcondi1Top) {
        document.querySelector(".bagforfood").dataset.scene = 1
        console.log("่jim")
    } else {
        document.querySelector(".bagforfood").dataset.scene = 0
    }
    if (scrollY + window.innerHeight - (bagcondi2.offsetHeight) >= bagcondi2Top) {
        document.querySelector(".bigbag").dataset.scene = 1
        console.log("่jim")
    } else {
        document.querySelector(".bigbag").dataset.scene = 0
    }
}

function pop() {
    var modal = document.getElementById("modal1");
    modal.style.display = "block";
    console.log(1);
};

function close_mod() {
    console.log(1);
    var modal = document.getElementById("modal1");
    modal.style.display = "none";
};

window.onclick = function(event) {
    var modal = document.getElementById("modal1");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function show_Detlekapu() {
    document.querySelector(".bigbag").dataset.show = "kapu";

};

function show_Detleyentafo() {
    document.querySelector(".bigbag").dataset.show = "yentafo";
};

function show_Detlericechicken() {
    document.querySelector(".bigbag").dataset.show = "ricechicken";
};

function back() {
    document.querySelector(".bigbag").dataset.show = "start";
};