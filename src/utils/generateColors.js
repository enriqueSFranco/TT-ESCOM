export function stringToColor(string="BT") {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; ++i)
    hash = string.charCodeAt(i) + ((hash << 5) - hash);

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-1);
  }
  return color;
}

export function getRandomColor() {
  let color = '#'
  let hex = '123456789ABCDEF'

  for (let i = 0; i < 6; ++i) {
    color += hex[Math.floor(Math.random() * 15)]
  }
  return color;
}
