function setup() {
  // put setup code here
  createCanvas(240, 320);

}

function draw() {
  // put drawing code here

  let x = random(240);
  let y = random(320);
  let strokeColor = color(255, 128, 128, 128);
  stroke(strokeColor);
  let fillColor = color(128, 255, 128, 32);
  fill(fillColor);
  strokeWeight(2);
  let s = random(32);
  circle(x, y, s);

}

function drawImage() {
  let img_x = 32;
  let img_y = 32;
  let img = createImage(img_x, img_y);
  img.loadPixels();
  for (let i = 0; i < img_x; i++) {
    for (let j = 0; j < img_y; j++) {
      img.set(i, j, color('red'));
    }
  }
  img.updatePixels();
  return img;
}
