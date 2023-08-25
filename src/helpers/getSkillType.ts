export function getSkillType(array, isMandatory = true) {
  if (!array) return null;

  return array.filter((el) => {
    if (isMandatory) return el.c116_description;
    return null;
  });
}