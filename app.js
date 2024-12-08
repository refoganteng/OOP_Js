//prototype array
Array.prototype.hello = () => {
  console.log("Hello, Word!");
};
const data1 = [1, 2, 3, 4, 5];
const data2 = [5, 6, 7, 8, 9];
console.log(data1.hello());
console.log(data2.hello());

//Membuat Object Dengan Factory Function
const hex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
console.log(hex(106, 98, 14));

const rgb = (r, g, b) => {
  return `rgb(${r}, ${g}, ${b})`;
};
console.log(rgb(106, 98, 14));
////////////////////
function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return color;
}

const color = convertColor(12, 43, 111);
console.log(color.hex());
console.log(color.rgb());

//Membuat Object Dengan Constructor Function
