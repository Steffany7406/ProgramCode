function vision(){
    var vs1 = parseFloat(document.getElementById("numero1").value);
    var vs2 = parseFloat(document.getElementById("numero2").value);
    var vs3= parseFloat(document.getElementById("numero3").value);

    var aux = num1;

    if(vs2 > vs1){
     verso=vs2;
     vs2=vs1;
     vs1=verso;
    }

    if(vs3 > vs1){
     verso1=vs3;
     vs3=vs1;
     vs1=verso1;
    }

    if(vs3 > vs2){
     verso2=vs3;
     vs3=vs2;
     vs2=verso2;
    }
    alert(vs1+"-"+vs2+"-"+vs3);
   }
