export function removeAccents(string) {
  const accents = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
  return string
    .split("")
    .map((letter) => accents[letter] || letter)
    .join("")
    .toString();
}