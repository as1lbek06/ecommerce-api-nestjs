# Multi-stage build uchun
FROM node:18-alpine AS development

WORKDIR /usr/src/app

# package.json va package-lock.json nusxalash
COPY package*.json ./

# Dependencies o'rnatish
RUN npm ci --only=development

# Barcha fayllarni nusxalash
COPY . .

# Build amalga oshirish
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /usr/src/app

# package.json va package-lock.json nusxalash
COPY package*.json ./

# Faqat production dependencies o'rnatish
RUN npm ci --only=production && npm cache clean --force

# Build qilingan fayllarni nusxalash
COPY --from=development /usr/src/app/dist ./dist

# Port ochish
EXPOSE 3000

# App ishga tushirish
CMD ["node", "dist/main"]
