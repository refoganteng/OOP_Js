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
function Color2(r, g, b) {
   this.r = r;
   this.g = g;
   this.b = b;
}

Color2.prototype.rgb = function () {
   const { r, g, b } = this;
   return `rgb(${r}, ${g}, ${b})`;
};

const objColor = new Color2(12, 300, 22);
console.log(objColor.rgb());

Color2.prototype.rgba = function (a = 1.0) {
   const { r, g, b } = this;
   return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// document.body.style.backgroundColor = new Color2(100, 100, 22).rgba(2);

//Membuat Object Dengan Class
class Color3 {
   constructor(r, g, b, name) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.name = name;
      console.log("proses constructor");
      console.log(`${r}`);
   }

   colorName() {
      console.log("the color name is " + this.name);
   }

   rgb() {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
  }

  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const jenengWarna = new Color3(12, 300, 22, "red");
console.log (jenengWarna)
