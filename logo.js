let palettes = [
    ["#fffbe6", "#ffd919", "#262104"],
    ["#15084d", "#ff4f19", "#5ce6e6"],
    ["#008bd6", "#fde200", "#f6f6f6"],
    [255, 0, 0],
    ["#1C1C1C", "#F47A9D", "#D9D9D9"]
  ];
  let idx = 0; // current palette
  let front;
  
  function setup() {
    createCanvas(200, 200);
    strokeWeight(4);
    front = createGraphics(width, height);
  }
  
  function draw() {
    let bgCol = palettes[idx][0];
    let sunCol = palettes[idx][1];
    let strokeCol = palettes[idx][2];
    
    background(255);
    
    // sun
    noStroke();
    fill(sunCol);
    circle(width/2, height/2, 60);
    
    // waves
    stroke(strokeCol);
    fill(bgCol);
    let y = height/2+10;
    while (y < height/2+100) {
      beginShape();
      let x = width/2-135;
      vertex(x, height);
      vertex(x, y);
      while (x < width/2+135) {
        curveVertex(x, y + sin(x/20+frameCount/20)*10);
        x += 10;
      }
      vertex(x, y);
      vertex(x, height);
      endShape(CLOSE);
      y += 25;
    }
    
    // big circle stencil
    front.background(bgCol);
    front.erase();
    front.circle(width/2, height/2, 125);
    front.noErase();
    image(front, 0, 0);
    noFill();
    circle(width/2, height/2, 125);
  }