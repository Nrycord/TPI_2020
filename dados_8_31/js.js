document.getElementById("btn").onclick = function a(){
    let d1 = document.getElementById("dado1");
    let d2 = document.getElementById("dado2");
    d1.innerHTML = d2.innerHTML = "";
    
    let rand1 = 1 + Math.floor(Math.random() * 6);
    let rand2 = 1 + Math.floor(Math.random() * 6);
    
    let point1 = document.getElementById("point1");
    let point2 = document.getElementById("point2");

    let tipo1 = "impar-";
    if (rand1 % 2 == 0) tipo1 = "par-";
    let tipo2 = "impar-";
    if (rand2 % 2 == 0) tipo2 = "par-";

    for (let index = 1; index <= rand1; index++)
        d1.innerHTML+= "<p class='blackDot "+ tipo1+index+"'></p>";
    
    for (let index = 1; index <= rand2; index++)
        d2.innerHTML+= "<p class='blackDot "+ tipo2+index+"'></p>";

    let val = 1;
    if (rand1 > rand2) {
        document.getElementById("titulo").innerHTML = "Jugador 1 gana!";
        val = parseInt(point1.innerHTML,10) + 1;
        point1.innerHTML= val;
    }
    else if (rand1 < rand2) {
        document.getElementById("titulo").innerHTML = "Jugador 2 gana!";
        val = parseInt(point2.innerHTML,10) + 1;
        point2.innerHTML= val;
    }
    else/*Si son iguales*/
        document.getElementById("titulo").innerHTML = "Empate!";
    

    document.getElementById("jugador1").innerHTML += "<li>Resultado--> "+rand1+"</li>";
    document.getElementById("jugador2").innerHTML += "<li>Resultado--> "+rand2+"</li>";


}

