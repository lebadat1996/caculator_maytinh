function PhepCong() {
    let Number1 = parseInt(document.getElementById("number1").value);
    let Number2= parseInt(document.getElementById("number2").value);
    let a = Number1 + Number2;
    document.getElementById("Cong").innerHTML="Ket Qua cua phep cong la: " + a;


}
function PhepTru() {
    let Number1 = parseInt(document.getElementById("number1").value);
    let Number2= parseInt(document.getElementById("number2").value);
    let b = Number1-Number2;
    document.getElementById("Cong").innerHTML="Ket Qua cua phep cong la: " + b;


}
function PhepNhan() {
    let Number1 = parseInt(document.getElementById("number1").value);
    let Number2= parseInt(document.getElementById("number2").value);
    let c = Number1*Number2;
    document.getElementById("Cong").innerHTML="Ket Qua cua phep cong la: " + c;


}
function PhepChia() {
    let Number1 = parseInt(document.getElementById("number1").value);
    let Number2= parseInt(document.getElementById("number2").value);
    let d = Number1/Number2;
    document.getElementById("Cong").innerHTML="Ket Qua cua phep cong la: " + d ;


}