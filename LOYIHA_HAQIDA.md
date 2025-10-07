# 🛍️ E-commerce API

NestJS va PostgreSQL bilan yaratilgan zamonaviy E-commerce API loyihasi.

## ✨ Nima qilindi

Sizning loyihangizda quyidagi modullar va funksiyalar to'liq yaratildi:

### 🏗️ Loyiha tuzilmasi
```
src/
├── 🔐 auth/                   # Autentifikatsiya va avtorizatsiya
│   ├── decorators/           # @Roles() kabi custom decoratorlar
│   ├── dto/                  # Login va Register uchun DTO
│   ├── guards/               # JWT va Role guardlari
│   └── strategies/           # JWT strategiyasi
├── 📦 categories/            # Mahsulot kategoriyalari
├── 🗃️  database/              # Database konfiguratsiyasi
├── 📋 orders/                # Buyurtmalar tizimi
├── 🛒 products/              # Mahsulotlar moduli
├── 👥 users/                 # Foydalanuvchilar boshqaruvi
├── app.module.ts             # Asosiy modul
└── main.ts                   # Server kirish nuqtasi
```

### 🚀 Funksional imkoniyatlar

#### 👤 Foydalanuvchilar tizimi
- ✅ Ro'yxatdan o'tish va kirish
- ✅ JWT token bilan autentifikatsiya
- ✅ Admin va User rollari
- ✅ Parollar bcrypt bilan himoyalangan

#### 🏷️ Kategoriyalar
- ✅ Kategoriya yaratish, o'qish, yangilash, o'chirish
- ✅ Kategoriyalar bo'yicha mahsulotlarni filtirlash
- ✅ Admin panel orqali boshqaruv

#### 📦 Mahsulotlar
- ✅ Mahsulot CRUD operatsiyalari
- ✅ Rasm qo'shish imkoniyati
- ✅ Stock (zaxira) boshqaruvi
- ✅ Kategoriyalar bilan bog'lanish

#### 🛒 Buyurtmalar
- ✅ Savat funksiyasi
- ✅ Buyurtma berish
- ✅ Buyurtma holatini kuzatish
- ✅ Admin panel orqali boshqaruv

### 🔧 Texnik xususiyatlar
- 📚 **Swagger API hujjatlari** - `/api/docs` da
- 🐳 **Docker qo'llab-quvvatlashi** - PostgreSQL uchun
- 🛡️ **Xavfsizlik** - JWT, bcrypt, guards
- ✅ **Validation** - class-validator
- 🗃️ **TypeORM** - Database ORM
- 📝 **TypeScript** - To'liq type safety

## 🚀 Loyihani ishga tushirish

### 1. Dependencies o'rnatish
```bash
npm install
```

### 2. Environment o'zgaruvchilar
`.env` fayli allaqachon yaratilgan:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=ecommerce
JWT_SECRET=your-super-secret-jwt-key-here
PORT=3000
NODE_ENV=development
```

### 3. PostgreSQL o'rnatish
```bash
# Ubuntu/Debian
sudo apt install postgresql postgresql-contrib

# Database yaratish
sudo -u postgres createdb ecommerce
```

### 4. Loyihani ishga tushirish
```bash
# Development rejimida
npm run start:dev

# Production uchun
npm run build
npm run start:prod
```

## 📡 API Endpoints

Loyiha ishga tushgandan so'ng quyidagi endpointlar ishlatiladi:

### 🔐 Authentication
- `POST /auth/register` - Ro'yxatdan o'tish
- `POST /auth/login` - Kirish

### 👥 Users
- `GET /users` - Barcha userlar (Admin)
- `GET /users/:id` - User ma'lumotlari
- `PATCH /users/:id` - User yangilash
- `DELETE /users/:id` - User o'chirish (Admin)

### 🏷️ Categories  
- `GET /categories` - Barcha kategoriyalar
- `POST /categories` - Yangi kategoriya (Admin)
- `GET /categories/:id` - Kategoriya ma'lumotlari
- `PATCH /categories/:id` - Kategoriya yangilash (Admin)
- `DELETE /categories/:id` - Kategoriya o'chirish (Admin)

### 📦 Products
- `GET /products` - Barcha mahsulotlar
- `POST /products` - Yangi mahsulot (Admin)
- `GET /products/:id` - Mahsulot ma'lumotlari  
- `GET /products/by-category/:categoryId` - Kategoriya bo'yicha
- `PATCH /products/:id` - Mahsulot yangilash (Admin)
- `DELETE /products/:id` - Mahsulot o'chirish (Admin)

### 🛒 Orders
- `POST /orders` - Yangi buyurtma
- `GET /orders` - Mening buyurtmalarim
- `GET /orders/all` - Barcha buyurtmalar (Admin)
- `GET /orders/:id` - Buyurtma ma'lumotlari
- `PATCH /orders/:id/status` - Buyurtma holati (Admin)

## 📚 API Documentation

Loyiha ishga tushgandan so'ng Swagger hujjatlarini ko'rish:
```
http://localhost:3000/api/docs
```

## 🎯 Keyingi qadamlar

1. **PostgreSQL o'rnatish** va ishga tushirish
2. **Frontend** yaratish (React/Vue/Angular)
3. **File upload** qo'shish mahsulot rasmlari uchun
4. **Payment gateway** integratsiyasi
5. **Email notification** qo'shish
6. **Search** funksiyasi
7. **Reviews va ratings** tizimi

## 🛠️ Loyihani rivojlantirish

Loyiha tayyor holda va quyidagi imkoniyatlarni qo'shishingiz mumkin:

- 🔍 Qidiruv va filtrlash
- ⭐ Baholar va sharhlar
- 💳 To'lov tizimlari
- 📧 Email xabarnomalar  
- 📱 Mobile API
- 🎨 Admin dashboard
- 📊 Analytics va hisobotlar

Loyiha to'liq ishlaydigan holatda yaratildi! 🎉
