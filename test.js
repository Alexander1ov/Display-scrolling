
let fistSlide = document.querySelector('.fistSlide');
let secondSlide = document.querySelector('.secondSlide');
let thirdSlideOne = document.querySelector('.thirdSlideOne');
let inline = document.querySelector('.inline');

let thirdSlideTwo = document.querySelector('.thirdSlideTwo');
let thirdSlideThree = document.querySelector('.thirdSlideThree');

let oneButtom = document.querySelector('.oneButtom');
let twoButtom = document.querySelector('.twoButtom');
let freeButtom = document.querySelector('.freeButtom');


document.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    let pressing = event.clientY;

    document.addEventListener("pointermove", onMouseMove);
    console.log(event.target);
    function onMouseMove(event) {
        let spend = event.clientY
        if (pressing - spend > 30) {
            if (event.pageY < 768) {
                oneButtom.classList.remove("circleOn")
                oneButtom.classList.add("circleOff")
                twoButtom.classList.remove("circleOff")
                twoButtom.classList.add("circleOn")
            };
            if (event.pageY > 768 && event.pageY < 1536) {
                twoButtom.classList.remove("circleOn")
                twoButtom.classList.add("circleOff")
                freeButtom.classList.remove("circleOff")
                freeButtom.classList.add("circleOn")
            }
            window.scrollBy(0, 768)

        } else if (spend - pressing > 30) {
            if (event.pageY > 1536) {
                freeButtom.classList.remove("circleOn")
                freeButtom.classList.add("circleOff")
                twoButtom.classList.remove("circleOff")
                twoButtom.classList.add("circleOn")
                console.log(event.pageY < 768 == true);
            };
            if (event.pageY > 768 && event.pageY < 1536) {
                twoButtom.classList.remove("circleOn")
                twoButtom.classList.add("circleOff")
                oneButtom.classList.remove("circleOff")
                oneButtom.classList.add("circleOn")
            }
            window.scrollBy(0, -768)
        }
    };
    document.addEventListener("pointerup", function () {
        document.removeEventListener("pointermove", onMouseMove);
    })
});

//Третий слайд Прокрутка вправо влево

let scroll = document.querySelector('.scroll');
let polygon = document.querySelector('.polygon');



polygon.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    let pressing = event.clientX - polygon.getBoundingClientRect().left; //в каое место нажал на элемент
    document.addEventListener("pointermove", onMouseMove);
    let position
    function onMouseMove(event) {
        let spend = event.clientX - pressing - scroll.getBoundingClientRect().left;
        if (spend < 0) { // ограничение влево
            spend = 0
        }

        let right = scroll.offsetWidth - polygon.offsetWidth;
        if (spend > right) { // ограничение вправо
            spend = right;
        }
        position = spend
        polygon.style.left = spend + 'px';

        if (spend <= 200) {
            inline.scrollLeft = 0
        }
        if (spend >= 200 && spend < 400) {
           inline.scrollLeft = 1024
        }
        if (spend >= 400) {
           inline.scrollLeft = 2048
        }
    };
    document.addEventListener("pointerup", function () {
        if (position <= 200) {
            position = 0
            polygon.style.left = position + 'px';
        }
        if (position >= 200 && position < 400) {
            position = 300
            polygon.style.left = position + 'px';
        }
        if (position >= 400) {
            position = 600
            polygon.style.left = position + 'px';
        }
        document.removeEventListener("pointermove", onMouseMove);
    })
});

polygon.ondragstart = function () {
    return false;
};

