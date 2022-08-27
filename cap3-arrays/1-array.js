let daysOfWeek = new Array();
console.log(daysOfWeek);
daysOfWeek = new Array(7);
console.log(daysOfWeek);
daysOfWeek = new Array('Lunes','Martes','Miércoles','Juebies','Viernes','Sabado','Domingo');
console.log(daysOfWeek);

let months = [];
console.log(months);
months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Decembre'];
console.log(months);
console.log(months.length);

for (let index = 0; index < daysOfWeek.length; index++) {
  const element = daysOfWeek[index];
  console.log(element);
}