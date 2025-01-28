# elearning-unipi

E-Learning app for Universitas Insan Pembangunan Indonesia. This is bachelor project tho, not official app

# Setup

- This setup guide for local machine
- Clone this repo to your local machine
- Open the root directory `elearning-unipi` from terminal
- latest things are on dev branch

## Backend

1. Go to Backend directory

   ```bash
   cd ./Backend
   ```

2. Install all modules

   ```bash
   npm install
   ```

> karena saya malas nginggris, seterusnya pake b.indo ya ges

3. Paste file .env yang saya kasih. Kalo ga ada berarti ente ga diajak, yassalam 🗿. Canda gez, kalian bisa masukin data .env kalian sendiri.

4. Pergi ke direactory `data`, isi file data setiap .json. Terserah kalian datanya asal sesuai tipe datanya.

5. Kalian juga bisa ubah pengaturan DB lokal kalian di `/config/config.json`

6. Buat DBnya

   ```bash
   npx sequelize-cli db:create
   ```

7. Migrate DB
   ```bash
   npx sequelize-cli db:migrate:all
   ```
8. Seed data ke DB
   ```bash
   npx sequelize-cli db:seed:all
   ```

# Run

## Backend

1. Go to `Backend` directory

```bash
cd ./Backend
```

2. Run the local server

```bash
npx nodemon bin/wwww
```

## Frontend

1. Go to `Frontend/elearning-unipi` directory

```bash
cd ./Frontend/elearning-unipi
```

2. Run the local server

```bash
npm run dev
```
