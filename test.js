let fistSlide = document.querySelector('.fistSlide');
let secondSlide = document.querySelector('.secondSlide');
let thirdSlideOne = document.querySelector('.thirdSlideOne');
let inline = document.querySelector('.inline');

let thirdSlideTwo = document.querySelector('.thirdSlideTwo');
let thirdSlideThree = document.querySelector('.thirdSlideThree');

let oneButtom = document.querySelector('.oneButtom');
let twoButtom = document.querySelector('.twoButtom');
let freeButtom = document.querySelector('.freeButtom');



thirdSlideThree.style.display = "none";
thirdSlideTwo.style.display = "none";

//Первый слайд
fistSlide.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    let pressing = event.clientY;
    document.addEventListener("pointermove", onMouseMove);

    function onMouseMove(event) {
        let spend = event.clientY
        if (pressing - spend > 30) {

            oneButtom.classList.add("circleOff")
            oneButtom.classList.remove("circleOn")
            twoButtom.classList.add("circleOn")
            twoButtom.classList.remove("circleOff")


            secondSlide.scrollIntoView()

        }
    };
    document.addEventListener("pointerup", function () {
        document.removeEventListener("pointermove", onMouseMove);
    })
});
//Второй слайд
secondSlide.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    let pressing = event.clientY;
    document.addEventListener("pointermove", onMouseMove);

    function onMouseMove(event) {
        let spend = event.clientY
        if (pressing - spend > 30) {
            twoButtom.classList.add("circleOff")
            twoButtom.classList.remove("circleOn")
            freeButtom.classList.add("circleOn")
            freeButtom.classList.remove("circleOff")

            inline.scrollIntoView(false)

        } else if (spend - pressing > 30) {
            oneButtom.classList.add("circleOn")
            oneButtom.classList.remove("circleOff")
            twoButtom.classList.add("circleOff")
            twoButtom.classList.remove("circleOn")
            fistSlide.scrollIntoView()
        }
    };
    document.addEventListener("pointerup", function () {
        document.removeEventListener("pointermove", onMouseMove);
    })
});
//Третий слайд
inline.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    let pressing = event.clientY;
    document.addEventListener("pointermove", onMouseMove);

    function onMouseMove(event) {
        let spend = event.clientY;
        let size = spend - pressing
        console.log(size);
        if (spend - pressing > 30) {
            twoButtom.classList.add("circleOn")
            twoButtom.classList.remove("circleOff")
            freeButtom.classList.add("circleOff")
            freeButtom.classList.remove("circleOn")
            secondSlide.scrollIntoView()
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
            thirdSlideOne.style.display = "block";
            thirdSlideTwo.style.display = "none";
            thirdSlideThree.style.display = "none";

        }
        if (spend >= 200 && spend < 400) {
            thirdSlideOne.style.display = "none";
            thirdSlideTwo.style.display = "block";
            thirdSlideThree.style.display = "none";
        }
        if (spend >= 400) {
            thirdSlideOne.style.display = "none";
            thirdSlideTwo.style.display = "none";
            thirdSlideThree.style.display = "block";
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

