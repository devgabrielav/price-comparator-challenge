
# Categorização

Solução para o Challenge Categorização.

## Sobre a solução

Para a solução, criei a função **"readJson"**, que faz a leitura do JSON. Logo no início da função, criei um array vazio, onde serão categorizados os itens. Dentro de um forEach, essa função utiliza **"wordsMatch"** para verificar cada produto no arquivo JSON, verificando se a categoria do produto já existe no array que será retornado no final da função.

Caso a categoria já exista no array, o produto será adicionado à chave "products" dessa categoria, e a chave "count" terá seu valor incrementado em 1. Caso a categoria ainda não exista, ela será criada, o produto será adicionado à chave "products", e a chave "count" receberá o valor 1, referente ao primeiro produto da categoria.

Ao final da função, o array "result" será retornado com os produtos devidamente categorizados.

Além disso, criei algumas funções auxiliares para a verificação das palavras:

- **"normalizeText"**: transforma palavras com acentos e caracteres especiais, remove artigos e padroniza todas as palavras para lower case.
- **"wordsMatch"**: utiliza "normalizeText" para verificar se a categoria do produto já existe, retornando true ou false.
- **"createProdObject"**: apenas cria o objeto que será adicionado à chave "products" da categoria.


## Tech Utilizada

Javascript, Node



## Rodando o projeto

Após fazer o clone do projeto.

Para testar a função utilizando o JSON para teste, rode o seguinte comando no terminal

```bash
  npm start
```
## Autor

- [devgabrielav](https://github.com/devgabrielav)

