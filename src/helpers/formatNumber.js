export default (number, type) =>
  type === 'IMA' ? number : number.slice(0, 3) + '-' + number.slice(3);
