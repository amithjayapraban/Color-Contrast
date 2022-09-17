const input = document.querySelector("input");
const example = document.querySelector(".textarea");

input.addEventListener("change", (e) => {
  const a = hexToRGB(e.target.value);
  const network = new brain.NeuralNetwork();
  network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
    { input: { r: 1, g: 0.42, b: 0.52 }, output: { dark: 1 } },
  ]);
  console.log(a);
  const result = network.run(a);

  example.style.background = e.target.value;
  if (result.dark > result.light) {
    example.style.color = "white";
  } else {
    example.style.color = "black";
  }
});
function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  r = r / 255;
  g = g / 255;
  b = b / 255;

  return (a = { r, g, b });
}
