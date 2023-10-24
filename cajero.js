var opcionCajero = parseInt(prompt("Elija el número de la operación:\n1. Consultar saldo\n2. Depositar\n3. Extraer\n4. Salir"));
var saldo = 2500;

switch (opcionCajero) {
    case 1:
        alert("Saldo: $" + saldo);
        break
    case 2:
        var deposito = parseFloat(prompt("Cantidad a depositar:"));
        saldo += deposito;
        alert("Usted ha depositado: $" + deposito + ".\nSu saldo actual es de: $" + saldo);
        break
    case 3:
        alert("Usted está realizando una extracción.");
        var extraccion = parseFloat(prompt("Cantidad que desea extraer:"));
        if (saldo >= extraccion) {
            alert("Puede extraer.");
            saldo -= extraccion;
            alert("Monto entregado: $" + extraccion + ". Su saldo actual es de: $" + saldo);
        } else {
            alert("No puede extraer esa cantidad, no tiene saldo suficiente.");
        }
        break
    case 4:
        break;
    default:
        break;
}