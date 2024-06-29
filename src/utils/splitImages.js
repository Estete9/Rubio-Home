const splitImages = (images) => {
  const keys = Object.keys(images);
  const numSections = 4;
  const sectionSize = Math.ceil(keys.length / numSections);
  const sections = [];

  for (let i = 0; i < numSections; i += 1) {
    sections.push(keys.slice(i * sectionSize, (i + 1) * sectionSize));
  }

  return sections;
};

export default splitImages;
