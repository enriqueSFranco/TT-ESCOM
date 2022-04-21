export const numberFormat = (input) => {
  const formatMoney = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXM"
  }).format(input.value);
  return formatMoney;
};