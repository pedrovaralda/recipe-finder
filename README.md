# Recipe Finder

## Descrição
O Recipe Finder é uma aplicação desenvolvida com React e TypeScript que permite aos usuários buscar receitas de comida com base nos ingredientes que eles fornecem. Os usuários podem ver uma lista de receitas correspondentes e visualizar detalhes sobre cada receita ao clicar em um cartão.

## Funcionalidades
- Busca de Receitas: Permite ao usuário digitar ingredientes e buscar receitas que contenham esses ingredientes.
- Exibição de Receitas: Mostra uma lista de receitas correspondentes com imagem e título.
- Detalhes da Receita: Ao clicar em um cartão de receita, o usuário pode ver os detalhes da receita, incluindo ingredientes e instruções.

## Estrutura do Projeto
```sh
/public
  index.html
/src
  /components
    SearchBar.tsx
    RecipeCard.tsx
    RecipeDetail.tsx
  /api
    api.ts
  App.tsx
  index.tsx
  styles.css
```

## Instruções de Configuração
1. Clone o Repositório
```sh
git clone https://github.com/pedrovaralda/recipe-finder.git
```

2. Instale as Dependências
Navegue até o diretório do projeto e instale as dependências:
```sh
cd recipe-finder
npm install
```

3. Configure a Chave da API
Substitua 'YOUR_SPOONACULAR_KEY' em src/api/api.ts com sua chave da API do Spoonacular.

4. Inicie o Servidor de Desenvolvimento
```sh
npm start
```

5. Acesse a Aplicação
Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.
