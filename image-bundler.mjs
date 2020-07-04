import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

optimizeImages();
export function optimizeImages() {
  const optimize = imagemin(['./src/assets/images/*.jpg'], {
    destination: 'build/images',
    plugins: [imageminMozjpeg({ quality: 50 })],
  });

  optimize.then((images) => {
    const imageOutput = images.map(({ destinationPath, sourcePath }) => ({
      destinationPath,
      sourcePath,
    }));
    console.log({ imageOutput });
  });
}
