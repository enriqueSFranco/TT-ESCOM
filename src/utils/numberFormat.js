export const numberFormat = (input) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXM"
  }).format(input).replace('.00', '')
};

export function parseThousands(value) {
  // 10/10 = 1k
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}