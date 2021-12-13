document.body.onscroll = function() {
    let scrollY = window.scrollY;
    let viewHeight = window.innerHeight;
    // document.querySelector("#varY").innerText = scrollY;
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
    var condijim = document.getElementById("condijim");

    scroll_yenta = document.getElementById("backyentafo");
    scroll_yentatop = scroll_yenta.offsetTop;

    scroll_yentas = document.getElementById("cheackscrollyentafo");
    scroll_yentastop = scroll_yentas.offsetTop;

    var condpi1Top = condip1.offsetTop;
    var condip2Top = condip2.offsetTop;
    var condip3Top = condip3.offsetTop;
    var condip4Top = condip4.offsetTop;
    var condpi5Top = condip5.offsetTop;
    var condip6Top = condip6.offsetTop;
    var condip7Top = condip7.offsetTop;
    var condip8Top = condip8.offsetTop;
    var condpi1Top = condip1.offsetTop;
    var condpijimTop = condijim.offsetTop;

    // console.log(condip8Top);
    let chk = document.getElementById("cheackrow").getBoundingClientRect().y
        // console.log((chk - viewHeight) * -1);


    if (((chk - viewHeight) * -1 >= condpi1Top) && ((chk - viewHeight) * -1 < condip2Top)) {
        document.getElementById("text_con2").innerHTML = "ปริมาณขยะพลาสติกในแต่ละปี";
        document.getElementById("text_con1").innerHTML = "";
        document.querySelector(".psall").dataset.scene = 1
    } else if (((chk - viewHeight) * -1 >= condip2Top) && ((chk - viewHeight) * -1 < condip3Top)) {
        document.querySelector(".psall").dataset.scene = 2
        document.getElementById("text_con1").innerHTML = "ปี 63 ได้เกิดโรคระบาดโควิด- 19 ทำให้จำนวนขยะพลาสติกจากการส่งอาหารเพิ่มขึ้นเกือบ 2 เท่า";
    } else if (((chk - viewHeight) * -1 >= condip3Top) && ((chk - viewHeight) * -1 < condip4Top)) {
        document.querySelector(".psall").dataset.scene = 3
        document.getElementById("text_con1").innerHTML = "คาดการณ์จำนวนขยะพลาสติกจนถึงปี 68";
    } else if (((chk - viewHeight) * -1 >= condip4Top) && ((chk - viewHeight) * -1 < condpi5Top)) {
        document.querySelector(".psall").dataset.scene = 4
        document.getElementById("text_con1").innerHTML = "คาดการณ์จำนวนขยะพลาสติกจนถึงปี 68";
    } else if (((chk - viewHeight) * -1 >= condpi5Top) && ((chk - viewHeight) * -1 < condip6Top)) {
        document.querySelector(".psall").dataset.scene = 5
        document.getElementById("text_con1").innerHTML = "คาดการณ์จำนวนขยะพลาสติกจนถึงปี 68";
    } else if (((chk - viewHeight) * -1 >= condip6Top) && ((chk - viewHeight) * -1 < condip7Top)) {
        document.querySelector(".psall").dataset.scene = 6
        document.getElementById("text_con1").innerHTML = "คาดการณ์จำนวนขยะพลาสติกจนถึงปี 68";
    } else if (((chk - viewHeight) * -1 >= condip7Top) && ((chk - viewHeight) * -1 < condip8Top)) {
        document.querySelector(".psall").dataset.scene = 7
        document.getElementById("text_con1").innerHTML = "คาดการณ์จำนวนขยะพลาสติกจนถึงปี 68";
    } else if ((chk - viewHeight) * -1 >= condip8Top) {
        document.querySelector(".psall").dataset.scene = 8
        document.getElementById("text_con1").innerHTML = "แต่ว่าเราสามารถลดให้มันเหลือน้อยลงได้";
    } else {
        document.querySelector(".psall").dataset.scene = 0
    }

    //-------------------------------- js check bike + ticker ----------------------------------//
    var bike_row = document.querySelector("#motorcycle");
    var bike_row_top = document.querySelector("#motorcycle").offsetTop;
    if (scrollY + window.innerHeight - (bike_row.offsetHeight) >= bike_row_top && scrollY < bike_row_top + 500) {
        document.querySelector("#motorcycle").dataset.bike = "active";
    } else {
        document.querySelector("#motorcycle").dataset.bike = "others";
    }

    var junkcount_row = document.querySelector("#junkcount");
    var junkcount_row_top = document.querySelector("#junkcount").offsetTop;
    if (scrollY + window.innerHeight - (junkcount_row.offsetHeight - 50) >= junkcount_row_top && scrollY < junkcount_row_top) {
        document.querySelector("#junkcount").dataset.junkcount = "active";
    } else {
        document.querySelector("#junkcount").dataset.junkcount = "others";
    }

    // จอร์ชช
    var beegBut = document.getElementById("condi-but");
    var beegButTop = beegBut.offsetTop;

    let butchk = document.getElementById("contain-but").getBoundingClientRect().y


    if ((butchk - viewHeight) * -1 >= beegButTop) {
        document.querySelector(".rpbg").dataset.scene = 1
    } else {
        document.querySelector(".rpbg").dataset.scene = 0
    }
    // if (scrollY + window.innerHeight - (beegBut.offsetHeight) >= beegButTop && scrollY < beegButTop) {
    //     
    // }else{
    //     
    // }


}






var isyentafo = false
var scroll_yenta;
var scroll_yentatop;
var scroll_yentas;
var scroll_yentastop;
// scrollY

// function checkscrolldetail(scrolltop) {


// }

function show_Detleyentafo() {
    console.log(scroll_yentatop);
    document.querySelector(".menufood").dataset.show = "yentafo";
    document.querySelector(".jimrobain").dataset.show = "0";
    isyentafo = !isyentafo


};

function show_Detlericechicken() {
    document.querySelector(".menufood").dataset.show = "ricechicken";
    document.querySelector(".jimrobain").dataset.show = "0";
};

function show_Detlekapu() {
    document.querySelector(".menufood").dataset.show = "kapu";
    document.querySelector(".jimrobain").dataset.show = "0";
    console.log("jimrobo");
};

function back() {
    document.querySelector(".menufood").dataset.show = "start1";
    document.querySelector(".jimrobain").dataset.show = "1";
    window.scroll(0, 3000);
};

function show_Detlekoria() {
    document.querySelector(".country").dataset.show = "koria";
};

function show_DetailThai() {
    document.querySelector(".country2").dataset.show = "thai";
};

function show_Detlesing() {
    document.querySelector(".country").dataset.show = "sing";
};

function backcountry() {
    document.querySelector(".country").dataset.show = "start1";

};

function backcountry2() {
    document.querySelector(".country2").dataset.show = "start1";

};

function backtomain() {
    document.querySelector(".country").dataset.show = "backmain";

};

function trashupdate() {
    var reduceCount = document.querySelectorAll('input[type="checkbox"]:checked');
    document.querySelector("#tickcount").innerText = reduceCount.length;
    document.querySelector("#tickcount2").innerText = reduceCount.length;
}