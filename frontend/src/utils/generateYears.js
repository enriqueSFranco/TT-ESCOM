export const generateYears = () => {
  const d = new Date();
  const n = d.getFullYear() + 5;
  let array = [];
  
  for (let i = n; i>= 1900; --i)
    array.push(i);

  return array;
};