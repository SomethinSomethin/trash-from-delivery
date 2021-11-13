let scrollY
document.body.onscroll = function() {
    scrollY = window.scrollY;
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

    // console.log(condip8Top);
    let chk = document.getElementById("cheackrow").getBoundingClientRect().y
        // console.log((chk - viewHeight) * -1);


    if (((chk - viewHeight) * -1 >= condpi1Top) && ((chk - viewHeight) * -1 < condip2Top)) {
        document.getElementById("text_con1").innerHTML = "ขยะพลาสติกจากการสั่งอาหารเดลิเวอรี่ปี 2562";
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

    // if (scrollY >= scroll_yentatop + scroll_yentastop && isyentafo) {

    //     console.log(scroll_yentatop, scroll_yentastop);
    //     // alert("jimmmm")
    //     document.getElementById("body").classList.add("isyentafo");
    //     // document.getElementById("backyentafo").scrollIntoView();
    //     location.href = "#backyentafo";
    //     // window.scrollTo(0, scroll_yentatop + scroll_yentastop - 1);
    //     // document.getElementById("body").classList.remove("isyentafo");

    //     // setTimeout(() => {
    //     //     document.getElementById("body").classList.remove("isyentafo");
    //     //     return 0;
    //     // }, 1000);

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
    isyentafo = !isyentafo


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
    isyentafo = !isyentafo
};