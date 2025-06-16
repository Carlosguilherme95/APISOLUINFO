# Usa imagem oficial do Node
FROM node:18

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o restante do código para o container
COPY . .

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação com ts-node-dev
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/index.ts"]
