// Roberto
let rn1 = Number(document.querySelector(".rn1").textContent);
let rn2 = Number(document.querySelector(".rn2").textContent);
let rn3 = Number(document.querySelector(".rn3").textContent);
let mediaRoberto = (rn1 + rn2 + rn3) / 3;
document.querySelector(".mr").textContent = mediaRoberto.toFixed(2);

if (mediaRoberto >= 6) {
    document.querySelector(".sr").textContent = "Aprovado";
} else {
    document.querySelector(".sr").textContent = "Reprovado";
}

// André
let an1 = Number(document.querySelector(".an1").textContent);
let an2 = Number(document.querySelector(".an2").textContent);
let an3 = Number(document.querySelector(".an3").textContent);
let mediaAndre = (an1 + an2 + an3) / 3;
document.querySelector(".ma").textContent = mediaAndre.toFixed(2);

if (mediaAndre >= 6) {
    document.querySelector(".sa").textContent = "Aprovado";
} else {
    document.querySelector(".sa").textContent = "Reprovado";
}


// Henrique
let hn1 = Number(document.querySelector(".hn1").textContent);
let hn2 = Number(document.querySelector(".hn2").textContent);
let hn3 = Number(document.querySelector(".hn3").textContent);
let mediaHenrique = (hn1 + hn2 + hn3) / 3;
document.querySelector(".mh").textContent = mediaHenrique.toFixed(2);

if (mediaHenrique >= 6) {
    document.querySelector(".sh").textContent = "Aprovado";
} else {
    document.querySelector(".sh").textContent = "Reprovado";
}


// Marcos
let mn1 = Number(document.querySelector(".mn1").textContent);
let mn2 = Number(document.querySelector(".mn2").textContent);
let mn3 = Number(document.querySelector(".mn3").textContent);
let mediaMarcos = (mn1 + mn2 + mn3) / 3;
document.querySelector(".mm").textContent = mediaMarcos.toFixed(2);

if (mediaMarcos >= 6) {
    document.querySelector(".sm").textContent = "Aprovado";
} else {
    document.querySelector(".sm").textContent = "Reprovado";
}


// Jonas
let jn1 = Number(document.querySelector(".jn1").textContent);
let jn2 = Number(document.querySelector(".jn2").textContent);
let jn3 = Number(document.querySelector(".jn3").textContent);
let mediaJonas = (jn1 + jn2 + jn3) / 3;
document.querySelector(".mj").textContent = mediaJonas.toFixed(2);

if (mediaJonas >= 6) {
    document.querySelector(".sj").textContent = "Aprovado";
} else {
    document.querySelector(".sj").textContent = "Reprovado";
}
