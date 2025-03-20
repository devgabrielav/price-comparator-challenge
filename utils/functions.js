function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .split(' ')
    .filter(word => !['de', 'o', 'a', 'e', 'do', 'da'].includes(word))
    .join(' ');
}

const wordsMatch = (product, result) => {
  const normalizedProductTitle = normalizeText(product.title);
  const productWords = normalizedProductTitle.split(' ');

  const productInResult = result.find((category) => {
    const normalizedCategoryTitle = normalizeText(category.category);
    const categoryWords = normalizedCategoryTitle.split(' ');
    return productWords.every(word => categoryWords.includes(word));
  });

  return productInResult;
}

const createProdObject = (product) => ({
  title: product.title,
  supermarket: product.supermarket
});

export {
  wordsMatch,
  createProdObject
}