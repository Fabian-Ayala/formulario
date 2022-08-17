const li = document.createElement("li");
const listaDinamica = document.getElementById("#lista")
li.textContent = "elemento desde js";
console.log(li);
console.log (listaDinamica);

listaDinamica.appendChild(li)

