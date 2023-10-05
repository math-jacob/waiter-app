# Primeira Aula - API com Node.js e Typescript

## Configurações iniciais

"yarn init -y"
- Inicialização do projeto Node.js

"yarn add -D typescript"
- Instalação do typescript

"yarn tsc --init"
- gera arquivo de configuração tsconfig.json

Criar arquivo src/index.ts
- Testar se typescript está funcionando

"yarn tsc"
- Compila todos os arquivos .ts em .js
- Arquivos .js ficam na mesma pasta do .ts

Mudar "outDir" no tsconfig.json
- "outDIr": "dist"
- Os arquivos .js compilados vão para uma pasta dist

Fazer scripts no package.json
- build

Padronizando o código
- Instalar as extensões do vscode editorconfig e eslint

Configurando editorconfig
- Botão direito + Generate .editorconfig
- Configurar .editorconfig

Configurando eslint
- "npm init @eslint/config"

## Instalando express

"yarn add express"
- instala o express

Codar src/index.ts