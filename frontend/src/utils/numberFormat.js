export const numberFormat = (number) => {
  const formatMoney = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXM"
  }).format(number);
  return formatMoney;
};