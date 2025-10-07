# E-commerce API - NestJS + PostgreSQL

Bu loyiha NestJS va PostgreSQL yordamida yaratilgan to'liq E-commerce API hisoblanadi.

## 🚀 Xususiyatlar

- **Foydalanuvchi autentifikatsiyasi** - JWT token bilan
- **Role-based access control** - Admin va User rollari
- **Mahsulotlar boshqaruvi** - CRUD operatsiyalari
- **Kategoriyalar tizimi** - Mahsulotlarni kategoriyalarga bo'lish
- **Buyurtmalar tizimi** - To'liq buyurtma jarayoni
- **PostgreSQL ma'lumotlar bazasi** - TypeORM bilan
- **API hujjatlari** - Swagger bilan
- **Docker qo'llab-quvvatlashi** - Oson deploy uchun

## 📋 Talablar

- Node.js (v18 yoki yuqori)
- PostgreSQL (v13 yoki yuqori)
- Docker va Docker Compose (ixtiyoriy)

## 🛠 O'rnatish

### 1. Repositoriyani klonlash
```bash
git clone <repository-url>
cd ecommerce-api
```

### 2. Dependencies o'rnatish
```bash
npm install
```

### 3. Muhit o'zgaruvchilarini sozlash
`.env.example` faylini `.env` ga nusxalang va o'z ma'lumotlaringizni kiriting:
```bash
cp .env.example .env
```

Keyin `.env` faylida quyidagi qiymatlarni o'zgartiring:
```env
# Database sozlamalari
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=ecommerce

# JWT sozlamalari (ALBATTA O'ZGARTIRING!)
JWT_SECRET=your-super-secret-jwt-key-here

# Server sozlamalari
PORT=3000
NODE_ENV=development
```

### 4. PostgreSQL ma'lumotlar bazasini sozlash
PostgreSQL'ni o'rnating va `ecommerce` nomli ma'lumotlar bazasini yarating.

### 5. Ilovani ishga tushirish
```bash
# Development rejimida
npm run start:dev

# Production rejimida
npm run build
npm run start:prod
```

## 🐳 Docker bilan ishga tushirish

```bash
# Docker Compose bilan
docker-compose up -d

# Yoki faqat ma'lumotlar bazasi uchun
docker-compose up postgres -d
```

## 📚 API Hujjatlari

Ilova ishga tushgandan so'ng, Swagger API hujjatlarini quyidagi manzilda ko'rishingiz mumkin:
```
http://localhost:3000/api/docs
```

## 🔗 API Endpoints

### Authentication
- `POST /auth/register` - Ro'yxatdan o'tish
- `POST /auth/login` - Tizimga kirish

### Users
- `GET /users` - Barcha foydalanuvchilar (Admin)
- `GET /users/:id` - Foydalanuvchi ma'lumotlari
- `PATCH /users/:id` - Foydalanuvchi ma'lumotlarini yangilash
- `DELETE /users/:id` - Foydalanuvchini o'chirish (Admin)

### Categories
- `GET /categories` - Barcha kategoriyalar
- `GET /categories/:id` - Kategoriya ma'lumotlari
- `POST /categories` - Yangi kategoriya (Admin)
- `PATCH /categories/:id` - Kategoriya yangilash (Admin)
- `DELETE /categories/:id` - Kategoriya o'chirish (Admin)

### Products
- `GET /products` - Barcha mahsulotlar
- `GET /products/:id` - Mahsulot ma'lumotlari
- `GET /products/by-category/:categoryId` - Kategoriya bo'yicha mahsulotlar
- `POST /products` - Yangi mahsulot (Admin)
- `PATCH /products/:id` - Mahsulot yangilash (Admin)
- `DELETE /products/:id` - Mahsulot o'chirish (Admin)

### Orders
- `GET /orders` - Foydalanuvchi buyurtmalari
- `GET /orders/:id` - Buyurtma ma'lumotlari
- `POST /orders` - Yangi buyurtma
- `PATCH /orders/:id/status` - Buyurtma holatini yangilash (Admin)

## 🧪 Testlar

```bash
# Unit testlar
npm run test

# E2E testlar
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📂 Loyiha tuzilmasi

```
src/
├── auth/                  # Autentifikatsiya moduli
│   ├── decorators/       # Custom decoratorlar
│   ├── dto/              # Data Transfer Objects
│   ├── guards/           # Auth guards
│   └── strategies/       # Passport strategiyalar
├── categories/           # Kategoriyalar moduli
├── database/             # Database konfiguratsiyasi
├── orders/               # Buyurtmalar moduli
├── products/             # Mahsulotlar moduli
├── users/                # Foydalanuvchilar moduli
├── app.module.ts         # Asosiy modul
└── main.ts               # Entry point
```

## 🔒 Xavfsizlik

- Parollar bcrypt yordamida hash qilinadi
- JWT tokenlar autentifikatsiya uchun ishlatiladi
- Role-based access control implementatsiya qilingan
- Input validation class-validator yordamida amalga oshiriladi

## 🚀 Production uchun deploy

1. Environment o'zgaruvchilarini production qiymatlarga o'zgartiring
2. `NODE_ENV=production` qiling
3. `npm run build` buyrug'ini bajaring
4. `npm run start:prod` yoki Docker yordamida deploy qiling

## 🤝 Hissa qo'shish

1. Fork qiling
2. Feature branch yarating
3. O'zgarishlarni commit qiling
4. Branch'ni push qiling
5. Pull Request yarating

## 📄 Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.

## 📞 Aloqa

Savollar yoki takliflar uchun issue yarating yoki email yuboring.
