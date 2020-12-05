class ColorPicker {
  constructor(image){
    this.canvas = null;
    this.context = null;
    this.image = image;
    this.result = null;

    this.drawImage();
  }


  drawImage(){
    this.canvas = document.createElement("canvas");
    this.canvas.src = this.image;
    this.context = this.canvas.getContext("2d");

    this.loadImage().then(img => {
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.context.drawImage(img, 0, 0);
      this.calculateResult();
    });
    
  }

  calculateResult(){
    let store = {};
    const imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imgData.data;

    const total_pixels = this.canvas.width * this.canvas.height;
    const coverage = total_pixels / 4;

    const max_pixel_index = total_pixels - 1;

    for (let i = 0; i < coverage; ++i) {
      const x = this.getPixelIndex(Math.floor(Math.random() * max_pixel_index));
      const key = `${data[x]},${data[x + 1]},${data[x + 2]}`;
      const val = store[key];
      store[key] = val ? val + 1 : 1;
    }

    const rgb_code = Object.keys(store).reduce((a, b) =>
      store[a] > store[b] ? a : b
    );

    this.result = `rgb(${rgb_code})`;
  }

  getPixelIndex(numToRound) {
    //Each pixel is 4 units long: r,g,b,a
    const remainder = numToRound % 4;
    if (remainder == 0) return numToRound;
    return numToRound + 4 - remainder;
  }

  loadImage(){
    return new Promise(resolve => {
      let img = new Image();
      img.src = this.image;
      img.onload = () => resolve(img);
     
    });
  }

}
