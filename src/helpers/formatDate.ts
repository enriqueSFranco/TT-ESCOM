const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Novimebre",
  "Diciembre",
];

/**
 * Funcion para dar formato a una fecha del tipo YYYY-MM-DD
 * @param {String} date
 * @returns {String} fecha formateada, eje. 2022-04-04 => 04/Abril/2022
 **/
export const formatDate = (date) => {
  let newDate = new Date(date.replace(/-+/g,'/'));
  let numDate = newDate.getDate() <= 9 ? `0${newDate.getDate()}` : newDate.getDate();
  let monthName = newDate.getMonth();
  let yearDate = newDate.getFullYear();

  return `${numDate}/${months[monthName]}/${yearDate}`;
};