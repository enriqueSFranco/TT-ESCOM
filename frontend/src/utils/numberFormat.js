export const numberFormat = (input) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXM"
  }).format(input);
};