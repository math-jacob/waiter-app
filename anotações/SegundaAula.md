# Segunda Aula - Dashboard dos pedidos com React

## Criando projeto do frontend utilizando Vite

Vite
- Ótima ferramenta de desenvolvimento frontend para projetos simples
- Faz todo o setup inicial para focar no desenvolvimento da aplicação

"yarn create vite"
- Cria projeto com vite
- Após configuração, vai gerar a pasta do projeto
- "yarn" após a configuração para instalar todas as dependências

"yarn dev"
- Roda o projeto vite
- Esse script ta presente no package.json

## Limpando a estrutura e organização do projeto

Deletar os arquivos/diretórios:
- assets
- App.css
- index.css

editorconfig
- Botão direito do mouse no diretório web
- Gerar .editorconfig
- Configurar o arquivo

eslint
- "npm init @eslint/config"

Arquivo index.html
- É o ponto de entrada ho html
- É a partir desse arquivo que o Vite carrega o main.tsx e, consequentemente, o App.tsx
- Ou seja, a partir do index.html é carregada toda a aplicação

No index.html
- Trocar o título da página
- Comentar o favic (opcional)

## Biblioteca Styled Components

CSS-in-JS
- css escrito dentro do javascript

Styled Components
- Pacote que implementa CSS-in-JS
- "yarn add styled-components"
- "yarn add -D @types/styled-components"
- Instalar a extensão "styled components" do VS code

## Estilização global e assets

- criar diretório src/styles
- criar arquivo GlobalStyles.ts
- copiar diretório assets no github da aula

Codar arquivo GlobalStyles.ts
- Código dos estilos globais

Editar App.tsx para incluir GlobalStyles

## Desenvolvendo o componente Header

Criar diretório src/components/Header
- Codar arquivo index.tsx
- Codar arquivo styles.ts

## Desenvolvendo o componente Orders

Criar diretório src/components/Orders
- Codar arquivo index.tsx
- Codar arquivo styles.ts

OBS: Criou-se um componente OrdersBoard para tratar os diferentes boards "Fila de espera, Em produção, Pronto!"
- No style.ts, OrdersContainer tem um botão pois devemos utilizar a propriedade onClick para abrir o modal com os detalhes do pedido