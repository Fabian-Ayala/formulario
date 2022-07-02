const dineroCofla = prompt("Cuanto dinero tenes Cofla?");
const dineroRoberto = prompt("Cuanto dinero tenes Roberto?");
const dineroPedro = prompt("Cuanto dinero tenes Pedro?");

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
};
else if (dineroCofla >= 1 && dineroCofla< 1.6) {
    alert("Cofla, comprate el helado de crema");
};