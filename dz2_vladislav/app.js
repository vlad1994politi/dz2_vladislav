//Задание 1

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval (frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}



//Задание 2

var counter = 0;
var id = setInterval(my_funct, 1000);


function my_funct(){
    counter++;
    console.log("Секунд прошло: " + counter);
    if (counter ==60)
        clearInterval(id);
}
