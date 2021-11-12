document.body.onscroll = function () {
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

    } else {
        document.querySelector("#bagglass").dataset.scene = 0
    }

    var condip1 = document.getElementById("condip_1");
    var condip2 = document.getElementById("condip-2");
    var condip3 = document.getElementById("condip-3");
    var condip4 = document.getElementById("condip-4");
    var condip5 = document.getElementById("condip-5");
    var condip6 = document.getElementById("condip-6");
    var condip7 = document.getElementById("condip-7");
    var condip8 = document.getElementById("condip-8");


    var condpi1Top = condip1.offsetTop;
    var condip2Top = condip2.offsetTop;
    var condip3Top = condip3.offsetTop;
    var condip4Top = condip4.offsetTop;
    var condpi5Top = condip5.offsetTop;
    var condip6Top = condip6.offsetTop;
    var condip7Top = condip7.offsetTop;
    var condip8Top = condip8.offsetTop;
    // console.log(condpi1Top);
    let chk = document.getElementById("cheackrow").getBoundingClientRect().y
    // console.log((chk - viewHeight) * -1);


    if (((chk - viewHeight) * -1 >= condpi1Top) && ((chk - viewHeight) * -1 < condip2Top)) {
        document.querySelector(".psall").dataset.scene = 1
    } else if (((chk - viewHeight) * -1 >= condip2Top) && ((chk - viewHeight) * -1 < condip3Top)) {
        document.querySelector(".psall").dataset.scene = 2
    } else if (((chk - viewHeight) * -1 >= condip3Top) && ((chk - viewHeight) * -1 < condip4Top)) {
        document.querySelector(".psall").dataset.scene = 3
    } else if (((chk - viewHeight) * -1 >= condip4Top) && ((chk - viewHeight) * -1 < condpi5Top)) {
        document.querySelector(".psall").dataset.scene = 4
    } else if (((chk - viewHeight) * -1 >= condpi5Top) && ((chk - viewHeight) * -1 < condip6Top)) {
        document.querySelector(".psall").dataset.scene = 5
    } else if (((chk - viewHeight) * -1 >= condip6Top) && ((chk - viewHeight) * -1 < condip7Top)) {
        document.querySelector(".psall").dataset.scene = 6
    } else if ((chk - viewHeight) * -1 >= condip7Top) {
        document.querySelector(".psall").dataset.scene = 7
    } else {
        document.querySelector(".psall").dataset.scene = 0
    }
    // จอร์ชช
    var beegBut = document.getElementById("condi-but");
    var beegButTop = beegBut.offsetTop;
    
    let butchk = document.getElementById("contain-but").getBoundingClientRect().y
    console.log(butchk - viewHeight);

    if ((butchk - viewHeight) * -1 >= beegButTop){
        document.querySelector(".rpbg").dataset.scene = 1
    }else{
        document.querySelector(".rpbg").dataset.scene = 0
    }
    // if (scrollY + window.innerHeight - (beegBut.offsetHeight) >= beegButTop && scrollY < beegButTop) {
    //     
    // }else{
    //     
    // }
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

