export function getFieldsValues (fields: FormData) {
  const fieldValues: Record<string, string> = {};
  fields.forEach((value, name) => {
    fieldValues[name] = value.toString().trim();
  })
  return fieldValues
}

export function hasNonEmptyField (fieldValues: Record<string, string>) {
  return Object.keys(fieldValues).some(field => fieldValues[field].trim().length > 0)
}