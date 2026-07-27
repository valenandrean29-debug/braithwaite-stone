# Analisis Tech Stack Proyek

Berikut adalah hasil analisis terkait tech stack yang digunakan dalam proyek **Braithwaite and Stone** mulai dari frontend, backend, database, hingga framework yang digunakan:

## 1. Interface (Frontend)
- **Library Utama:** **React** (versi 19.x)
- **Build Tool & Framework:** **Vite** (versi 8.x)
- **Dependensi Tambahan:** `@vitejs/plugin-react`
- **Styling:** Vanilla CSS (berdasarkan file `.css` yang ada seperti `Branches.css`).
- **Deskripsi:** Antarmuka dibangun menggunakan React sebagai Single Page Application (SPA). Proyek ini menggunakan Vite sebagai *build tool* dan *development server* yang menawarkan performa yang jauh lebih cepat dibandingkan bundler tradisional.

## 2. Backend
- **Bahasa Pemrograman:** **Python**
- **Framework Utama:** **Flask** (versi 3.0.0)
- **Dependensi Tambahan (berdasarkan `requirements.txt`):**
  - `flask-cors` (versi 4.0.0): Untuk menangani isu Cross-Origin Resource Sharing (CORS) agar API bisa diakses oleh frontend.
  - `supabase` (versi 2.29.0): SDK Python untuk berinteraksi dengan layanan Supabase (Auth dan Database).
  - `python-dotenv` (versi 1.0.1): Untuk memuat variabel environment dari file `.env`.
  - `email-validator` & `python-dateutil`: Untuk keperluan validasi data email dan pemrosesan tanggal pada input proposal.
- **Deskripsi:** Backend dikembangkan dengan Flask untuk menyediakan berbagai layanan RESTful API, seperti endpoint untuk otentikasi (`/api/auth/register`, `/api/auth/login`), validasi proposal (`/api/proposal/validate`), dan riwayat proposal (`/api/proposal/history/<user_id>`).

## 3. Database & Authentication
- **Layanan / Platform:** **Supabase** (berbasis PostgreSQL)
- **Detail Penggunaan:**
  - **Database:** Supabase digunakan sebagai layanan database relasional. Data yang disimpan misalnya pada tabel `proposals` (menyimpan email, tanggal, nama, region, waktu, telepon, dan detail proyek).
  - **Authentication:** Menggunakan fitur *Supabase Auth* secara langsung di backend untuk menangani *Sign Up* dan *Sign In* menggunakan metode email dan password.
- **Deskripsi:** Supabase bertindak sebagai *Backend-as-a-Service* (BaaS) utama yang menyediakan manajemen user dan penyimpanan data terpusat, dan dihubungkan secara aman melalui backend Flask.
