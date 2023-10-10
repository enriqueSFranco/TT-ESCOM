type Value = number | string

export const formatCurrencyWithoutDecimals = (input: Value) => {
  const numericInput = typeof input === 'string' ? parseFloat(input) : input

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "MXN"
  }
  const formattedNumber = new Intl.NumberFormat("es-MX", options).format(numericInput).replace('.00', '')
  return formattedNumber
}

export function parseThousands (input: Value) {
  const numericInput = typeof input === 'string' ? parseFloat(input) : input
  const formattedNumber = new Intl.NumberFormat("es-MX", { maximumSignificantDigits: 3 }).format(numericInput)

  return formattedNumber
}

export const formatDate = (date: string) => {
  let newDate = new Date(date.replace(/-+/g, '/'))
  let formattedDate = new Intl.DateTimeFormat()

  return formattedDate
}