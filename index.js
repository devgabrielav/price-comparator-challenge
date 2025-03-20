import { wordsMatch, createProdObject } from "./utils/functions.js";
import { jsonTest } from "./utils/jsonTest.js";

function readJson(jsonData) {
  const result = [];

  jsonData.forEach((product) => {
    const productInResult = wordsMatch(product, result);
    
    if (productInResult) {
      const index = result.indexOf(productInResult);
      result[index].count += 1;
      result[index].products.push(createProdObject(product))
    } else {
      result.push({
        category: product.title,
        count: 1,
        products: [createProdObject(product)]
      })
    }
  });

  return result;
}

console.dir(readJson(jsonTest) ,{ depth: null });