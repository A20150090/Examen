var nom=prompt("Ingrese su nombre");
alert(nom," Bienvenido")

var preg1=prompt("¿Cuándo se realizará la inauguración de las Olimpiadas? \nA:Lunes 02 de octubre \nB: Viernes 29 de setiembre\nC: Jueves 28 de setiembre");
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}


var preg2=prompt("¿De qué color es la prompoción de 2do de secundaria? \nA:Celeste \nB: Rojo \nC: Morado");
if (preg2=="A"){    
    preg2=1
}
else{
    preg2=0    
}

var preg3=prompt("Nuevo deporte incluido este año \nA:Futsal femenino \nB: Balonmano \nC: Marcha atlética");
if (preg3=="C"){
    preg3=1
}
else{
    preg1=0
}


    var total=preg1+preg2+preg3
if (total>=3){
    document.write(nom," lo has echo bien! :)")
}
else{
    document.write(nom," Vuelve a intentarlo... ")

}
