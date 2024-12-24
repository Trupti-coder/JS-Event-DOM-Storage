var btn=document.getElementById("btnAdd");
btn.addEventListener("click",funAdd,false);

function funAdd(){
    var txtName=document.getElementById("txtId").value;
    var txtPrice=document.getElementById("txtPrice").value;
    console.log(txtName,txtPrice);

}