const Vibrant = require('node-vibrant');
Vibrant.from('src/assets/images/Logo1.jpg').getPalette()
  .then((palette) => {
    for (const name in palette) {
      if (palette[name]) {
        console.log(name, palette[name].hex);
      }
    }
  }).catch(err => console.error(err));
