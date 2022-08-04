export function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1)
    hash = string.charCodeAt(i) + ((hash << 5) - hash);

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;

};

export function getRandomColor() {
  let colorCode = '123456789ABCDEF'
  let finalColor = '#'

  for (let i = 0; i < 6; ++i) {
    finalColor += colorCode[Math.floor(Math.random() * 16)]
  }
  return finalColor
}