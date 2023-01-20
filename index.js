
/*MAPS [GET LOCATION]*/
const lc = document.getElementById('maps')
const button = document.getElementById('Locate')
lc.style.display = "none"


function get() {
    const lc = document.querySelector('#maps')

    if(lc.style.display === "none") {
        lc.style.display = "block";
        button.innerHTML = "Close";
    }else {
        lc.style.display = "none";
        button.innerHTML = "Get Location"
    }
}

//MOBILE -- NAVIGATION

function display() {
    const mobile = document.querySelector('.mobnav');
    mobile.style.transform = "translateX(0)"
};

function closeNav() {
    const closebtn = document.querySelector('.mobnav')
    closebtn.style.transform = "translateX(-100%)"
};

/**
 [MOBILE NAVIGATION(DROPDOWNS)]
*/


//[THORONS]
const thor = document.querySelector('.thor')
const subthorons = document.querySelector('.subthorons')

thor.addEventListener('click', () => {
    var rot = document.querySelector('.list-sub');
    rot.classList.toggle('rotate');
    thor.classList.toggle('specify');
    subthorons.classList.toggle('active')

    clearFix()

})

/*Extra-function[THORONS]close- 
opened while clicked*/

function clearFix()  {
    const reset = document.querySelectorAll('.sublaptops,.subdesktops,.submonitors');
    const sel = document.querySelectorAll('#dsk,.lap,.mon');
    const rot = document.querySelectorAll('#turn,.turn,.stun');
    for (let i = 0; i < sel.length; i++) {

        if(sel[i].classList.contains('specify')) {
            sel[i].classList.remove('specify');
        }
    }
    for (let i = 0; i < reset.length; i++) {

        if(reset[i].classList.contains('active')) {
            reset[i].classList.remove('active');
        }
    }

    for (let i = 0; i < rot.length; i++) {
        if(rot[i].classList.contains('rotate')) {
            rot[i].classList.remove('rotate');
        }
    }
}


//[LAPTOPS]
var  lap = document.querySelector('.lap')
const sublaptops = document.querySelector('.sublaptops')


lap.addEventListener('click', () => {

    const rot = document.querySelector('.stun');
    rot.classList.toggle('rotate')
    lap.classList.toggle('specify')
    sublaptops.classList.toggle('active')

    clearAll()
})

/*Extra-function[LAPTOPS]close- 
opened while clicked*/

function clearAll()  {
    const reset = document.querySelectorAll('.subthorons,.subdesktops,.submonitors');
    const sel = document.querySelectorAll('#dsk,.thor,.mon');
    const rot = document.querySelectorAll('#turn,.turn,.list-sub');
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].classList.contains('specify')) {
            sel[i].classList.remove('specify');
        }
    };
    for (let i = 0; i < reset.length; i++) {
        if(reset[i].classList.contains('active')) {
            reset[i].classList.remove('active');
        }
    };
    for (let i = 0; i < rot.length; i++) {
        if(rot[i].classList.contains('rotate')) {
            rot[i].classList.remove('rotate');
        }
    }
}

//[DESKTOP]
const dsk = document.getElementById('dsk')
const subdesktops = document.querySelector('.subdesktops')

dsk.addEventListener('click', () => {
    var rot = document.querySelector('#turn');
    rot.classList.toggle('rotate');
    dsk.classList.toggle('specify');
    subdesktops.classList.toggle('active');

    clearBoth()
})

/*Extra-function[DESKTOP]close- 
opened while clicked*/

function clearBoth()  {
    const reset = document.querySelectorAll('.subthorons,.sublaptops,.submonitors');
    const sel = document.querySelectorAll('.lap,.thor,.mon');
    const rot = document.querySelectorAll('.stun,.turn,.list-sub');
    for (let i = 0; i < sel.length; i++) {
        if(sel[i].classList.contains('specify')) {
            sel[i].classList.remove('specify');
        }
    };
    for (let i = 0; i < reset.length; i++) {
        if(reset[i].classList.contains('active')) {
            reset[i].classList.remove('active');
        }
    };
    for (let i = 0; i < rot.length; i++) {
        if(rot[i].classList.contains('rotate')) {
            rot[i].classList.remove('rotate');
        }
    }
}



//[MONITORS]

var  mon = document.querySelector('.mon')
const submonitors = document.querySelector('.submonitors')


mon.addEventListener('click', () => {
    const rot = document.querySelector('.turn');
    rot.classList.toggle('rotate')
    mon.classList.toggle('specify')
    submonitors.classList.toggle('active')

    unZip()

})


/*Extra-function[MONITORS]close- 
opened while clicked*/

function unZip()  {

    const reset = document.querySelectorAll('.subthorons,.subdesktops,.sublaptops');
    const sel = document.querySelectorAll('#dsk,.thor,.lap');
    const rot = document.querySelectorAll('#turn,.stun,.list-sub');

    for (let i = 0; i < sel.length; i++) {
        if(sel[i].classList.contains('specify')) {
            sel[i].classList.remove('specify');
        }
    };
    for (let i = 0; i < reset.length; i++) {
        if(reset[i].classList.contains('active')) {
            reset[i].classList.remove('active');
        }
    };
    for (let i = 0; i < rot.length; i++) {
        if(rot[i].classList.contains('rotate')) {
            rot[i].classList.remove('rotate');
        }
    }
}

/**
 [MOBILE NAVIGATION(DROPDOWNS){ENDS}]
*/


/*[FOOTER DROPDOWNS---------]*/

//ABOUT --- FUNCTION
const smooth = document.querySelector(".cli")
const noon = document.querySelector(".plusBtn")
const dropDwn = document.querySelector(".Sub_list_1")


smooth.addEventListener('click', () => {
    noon.classList.toggle('rotate')
    if(dropDwn.className == "Sub_list_1" && smooth.className == "cli") {
        dropDwn.classList.add('aBout')
        smooth.classList.add('specify')
    }else {
        dropDwn.classList.remove('aBout')
        smooth.classList.remove('specify')
    }

    closeUp() 

})

/*Extra-function[ABOUT]close- 
opened while clicked*/

function closeUp() {
    if(sub_list.classList.contains('integrate') ||Sub_list_3.classList.contains('prSense') || Sub_list_4.classList.contains('legal')) {
        Sub_list_3.classList.remove('prSense')
        res.classList.remove('specify')
        cg.classList.remove('rotate')
        Sub_list_4.classList.remove('legal')
        leg.classList.remove('specify')
        rot.classList.remove('rotate')
        ser.classList.remove('specify')
        sub_list.classList.remove('integrate')
        loop.classList.remove('rotate')
    }
}


//SERVICES --- FUNCTION

const ser = document.querySelector(".ser")
const loop = document.querySelector('.Btn')
const sub_list = document.querySelector('div.Sub_list_2')

ser.addEventListener("click", () => {
    loop.classList.toggle('rotate')
    if(sub_list.className == 'Sub_list_2' && ser.className == "ser") {
        ser.classList.add("specify");
        sub_list.classList.add('integrate');        
        
    }else {
        ser.classList.remove("specify")
        sub_list.classList.remove('integrate')
    }

    hideAll();
})

/*Extra-function[SERVICES]close- 
opened while clicked*/

function hideAll() {

    if(dropDwn.classList.contains('aBout')  || Sub_list_3.classList.contains('prSense') || Sub_list_4.classList.contains('legal')) {
        dropDwn.classList.remove('aBout')
        noon.classList.remove('rotate')
        smooth.classList.remove('specify')
        Sub_list_3.classList.remove('prSense')
        res.classList.remove('specify')
        cg.classList.remove('rotate')
        Sub_list_4.classList.remove('legal')
        leg.classList.remove('specify')
        rot.classList.remove('rotate')
    }
}

//RESOURCES --- FUNCTION

const res = document.querySelector('.res')
const Sub_list_3 = document.querySelector('.Sub_list_3')
const cg = document.querySelector('#cg')

res.addEventListener('click', () => {
    cg.classList.toggle('rotate')
    Sub_list_3.classList.toggle('prSense')
    res.classList.toggle('specify');


    deleteAll()

})

/*Extra-function[RESOURCES]close- 
opened while clicked*/

function deleteAll() {

    if(/*dropDwn.style.height !== "0px"*/ dropDwn.classList.contains('aBout') || Sub_list_4.classList.contains('legal') || sub_list.classList.contains('integrate')) {
        dropDwn.classList.remove('aBout')
        noon.classList.remove('rotate')
        smooth.classList.remove('specify')
        Sub_list_4.classList.remove('legal')
        leg.classList.remove('specify')
        rot.classList.remove('rotate')
        ser.classList.remove('specify')
        loop.classList.remove('rotate')
        sub_list.classList.remove('integrate')
    }
}

//LEGAL  --- FUNCTION

const leg = document.querySelector('.leg')
const Sub_list_4 = document.querySelector('.Sub_list_4')
const rot = document.querySelector('#rot')

leg.addEventListener('click', () => {
    rot.classList.toggle('rotate')
    Sub_list_4.classList.toggle('legal')
    leg.classList.toggle('specify')

    reduceAll()

})

/*Extra-function[LEGAL]close- 
opened while clicked*/

function reduceAll() {

    if(dropDwn.classList.contains('aBout') || Sub_list_3.classList.contains('prSense') || sub_list.classList.contains('integrate')) {
        ser.classList.remove('specify')
        loop.classList.remove('rotate')
        sub_list.classList.remove('integrate')
        dropDwn.classList.remove('aBout')
        noon.classList.remove('rotate')
        smooth.classList.remove('specify')
        cg.classList.remove('rotate')
        Sub_list_3.classList.remove('prSense')
        res.classList.remove('specify')
    }    
}


/*[FOOTER DROPDOWNS---------]{ENDS}
*/


/*
[BACK TO TOP BUTTON FUNCTIONALITY]
*/

const TOP = document.querySelector('div.top')


window.onscroll = function () {scrollTop()}

function scrollTop() {
    if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        TOP.style.display = "block";
    }else {
        TOP.style.display = "none";
    }
}

TOP.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* window.onclick = function(event) {
    if(!event.target.matches('.menu')) {
        var mob = document.getElementsByClassName('.mobnav');
        for(i = 0; i < mob.length; i++ ) {
            var mobnav = mob[i];
            if(mobnav.style.transform == "translateX(0)") {
                mobnav.style.transform = "translateX(100%)"
            }
        }
    }
} */



