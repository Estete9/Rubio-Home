function importAll(r) {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });

  return images;
}

const images = importAll(require.context('../assets/logos', false, /\.(png|jpe?g|svg)$/));

export default images;
