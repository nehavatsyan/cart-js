var i = 1;
function myFunction(){
    var a=[];
    var cost = 0;
    var x = document.getElementById("numb").value;
    var text = document.getElementById("toys").value;
    if(text=="Car"){
        cost=50;
    }
    else if (text=="Bus"){
        cost=70;
    }
    else if (text=="Train"){
        cost=80;
    }
    else if (text=="Doll"){
        cost=90;
    }
    else if(text=="Teddy"){
        cost=100;
    }
    a[0]=i++;
    a[1]=text;
    a[2]=x;
    a[3]=cost;
    a[4]=cost*x;
    //console.log(a);

   if (text!="--"){ 
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");
    for(var j=0;j<5;j++){
        var td = document.createElement("td");
        var txt= document.createTextNode(a[j]);
        td.appendChild(txt);
        tr.appendChild(td);

    }
    var td = document.createElement("td");
    td.innerHTML = ('<i class="fa fa-trash-o" aria-hidden="true" onclick="delList(this)"></i>');
    tr.appendChild(td);
    tbody.appendChild(tr);
    var tab = document.getElementById("cart_table");
    tab.appendChild(tbody);
   }
   else {
       alert("please select any element to enter in cart");
   }
}
function delList(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("cart_table").deleteRow(i);
}