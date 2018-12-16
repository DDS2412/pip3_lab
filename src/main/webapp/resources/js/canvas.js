var ajaxButton = document.getElementById("form:commandButton");;

var graphic = document.getElementById("graphic");
var context = graphic.getContext("2d");
graphic.addEventListener("click", clickGraphic, false);

var hiddenY = document.getElementById("form:hiddenY");
var hiddenX = document.getElementById("form:hiddenX");
var Text = document.getElementById("form:Y");

function changeYValue() {
    ClearErrorMsg();
    if(!(/(-)?\d+((,)\d+)?/g.test(Text.value.replace(" ","")))){
        SendErrorMsg("Введите корректные символы!")
    }else if(Text.value <= -3 || Text.value >= 5){
        SendErrorMsg("Введите значения из интервала!")
    }
    else {
        hiddenY.value = Text.value
    }
}

function SendErrorMsg(msg) {
    document.getElementById("error-msg").innerHTML = msg
}

function ClearErrorMsg(){
    var err =  document.getElementById("error-msg")
    if(err.textContent != null)
        err.innerText = null;
}

function chooseX(xParam) {
   var xField = document.getElementById("form:XField");
   xField.value = xParam;
}

function loadMainPage(){
    draw()
    var xField = document.getElementById("form:XField");
    xField.value = 0;
    hiddenY.value = 0;
    hiddenX.value = 0;
}

function changeRadius() {
    draw()
}

function clickGraphic(e) {
    var br = graphic.getBoundingClientRect();
    var r = document.getElementById("form:r-value").value;
    var left = br.left;
    var top = br.top;

    var x = (e.clientX-left) / (br.right - br.left) * 300;
    var y = (e.clientY-top) / (br.bottom - br.top) * 300;

    var boolArea = isArea(x, y, r);
    drawPoint(x, y, boolArea);

    ajaxButton.click();

    hiddenY.value = Text.value;
    hiddenX.value = document.getElementById("form:XField").value;
}

function drawPoint(x, y, isArea){
    context.beginPath();
    context.rect(x, y, 4, 4);
    context.closePath();
    if(isArea === 'true'){
        context.strokeStyle = "green";
        context.fillStyle = "green";
    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    context.fill();
    context.stroke();
}

function isArea(x, y, R) {
    x = R * (x - 150) / 130;
    hiddenX.value = x;
    y = R * (150 - y) / 130;
    hiddenY.value = y

    if(x<=0 && y<=0 && x*x+y*y<=R*R){
        return 'true';
    }
    if(x>=0 && y>=0 && y<=(-1*x+0.5*R)){
        return 'true';
    }
    if(x>=0 && y<=0 && x<=R && y >= -R/2){
        return 'true';
    }
    return 'false';
}


function draw() {

    var r = document.getElementById("form:r-value").value;

    //очистка
    context.clearRect(0, 0, graphic.width, graphic.height);

    //прямоугольник
    context.beginPath();
    context.rect(150, 150, 130, 65);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    // сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, 130, Math.PI, Math.PI/2, true);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    //треугольник
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(150, 85);
    context.lineTo(215, 150);
    context.lineTo(150, 150);
    context.closePath();
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();

    //отрисовка осей
    context.beginPath();
    context.font = "10px Verdana";
    context.moveTo(150, 0); context.lineTo(150, 300);
    context.moveTo(150, 0); context.lineTo(145, 15);
    context.moveTo(150, 0); context.lineTo(155, 15);
    context.fillText("Y", 160, 10);
    context.moveTo(0, 150); context.lineTo(300, 150);
    context.moveTo(300, 150); context.lineTo(285, 145);
    context.moveTo(300, 150); context.lineTo(285, 155);
    context.fillText("X", 290, 135);

    // деления X
    context.moveTo(145, 20); context.lineTo(155, 20); context.fillText(r, 160, 20);
    context.moveTo(145, 85); context.lineTo(155, 85); context.fillText((r / 2), 160, 78);
    context.moveTo(145, 215); context.lineTo(155, 215); context.fillText(-(r / 2), 160, 215);
    context.moveTo(145, 280); context.lineTo(155, 280); context.fillText(-r, 160, 280);
    // деления Y
    context.moveTo(20, 145); context.lineTo(20, 155); context.fillText(-r, 20, 170);
    context.moveTo(85, 145); context.lineTo(85, 155); context.fillText(-(r / 2), 70, 170);
    context.moveTo(215, 145); context.lineTo(215, 155); context.fillText((r / 2), 215, 170);
    context.moveTo(280, 145); context.lineTo(280, 155); context.fillText(r, 280, 170);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
}
