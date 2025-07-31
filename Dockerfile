# Multi-stage build otimizado para EasyPanel
FROM node:18-alpine AS builder

WORKDIR /app

# Configurar npm para economizar memória
ENV NODE_OPTIONS="--max-old-space-size=1024"
ENV NPM_CONFIG_MAXSOCKETS=3

# Instalar dependências com otimizações
COPY package*.json ./
RUN npm ci \
    --prefer-offline \
    --no-audit \
    --no-fund \
    --progress=false \
    --loglevel=error \
    --include=dev

# Copiar código e fazer build
COPY . .
RUN npm run build

# Stage de produção minimal
FROM node:18-alpine AS production

WORKDIR /app

# Configurar npm para produção
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

# Instalar apenas dependências de produção
COPY package*.json ./
RUN npm ci \
    --only=production \
    --prefer-offline \
    --no-audit \
    --no-fund \
    --progress=false \
    --loglevel=error && \
    npm cache clean --force && \
    rm -rf ~/.npm

# Copiar arquivos buildados e necessários
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/shared ./shared

EXPOSE 3000

CMD ["node", "dist/index.js"]