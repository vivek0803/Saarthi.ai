function AddData() {
    var x = document.getElementById("email").value;
    var y = document.getElementById("name").value;
    var z=document.getElementById("employeeId").value;
    var t=document.getElementById("doj").value;
    var letters = '/^[a-zA-Z]+$/';
    if (x==""||y==""||z==""||t=="") {
        alert("Values are Empty");
    }
    else{
    var rows = "";
    var name = document.getElementById("name").value;
    var employeeId = document.getElementById("employeeId").value;
    var department = document.getElementById("department").value;
    var email=document.getElementById("email").value;
    var doj=document.getElementById("doj").value
    rows += "<td>" + name + "</td><td>" + employeeId+ "</td><td>" + department+ "</td><td>" + email + "</td><td>" + doj+ "</td>";
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");
    tr.innerHTML = rows;
    tbody.appendChild(tr)
}
}


function disp(){
document.getElementById("data").style.display="block";
}
function newemp(){
document.getElementById('tab').style.display='none';
}
function dta(){
document.getElementById('tab').style.display = 'block';
}
function display(){
document.getElementById('data').style.display='none'
}
