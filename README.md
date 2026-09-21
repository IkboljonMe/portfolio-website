# Portfolio Website

My personal portfolio website made with React, TypeScript and Vite. It shows who I am, my skills, my work experience and has a contact form that sends messages straight to my email. The `backend` folder has an auth API (register, login, JWT) that I started for a blog, it is not connected to the site yet.

**Live:** https://ikboljonme-web.vercel.app

## What is inside

- Hero section with typing animation and animated particles background
- About me section
- Skills with tabs and a modal for each skill
- Work experience timeline
- Contact form using EmailJS
- Responsive design with Sass modules and Framer Motion animations

## Built with

**Frontend**

- React 18 + TypeScript
- Vite
- Sass (SCSS modules)
- Framer Motion
- tsParticles
- React Vertical Timeline
- EmailJS
- React Icons

**Backend**

- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs

## How to run

```bash
git clone https://github.com/IkboljonMe/portfolio-website.git
cd portfolio-website
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Fill `.env` with your keys from [EmailJS](https://www.emailjs.com/) if you want the contact form to work. The site opens on http://localhost:5173

To build for production run `npm run build`, files will be in `frontend/dist`.

### Backend

You need MongoDB running (local or Atlas).

```bash
cd backend
npm install
mkdir Config
cp config.env.example Config/config.env
npm run dev
```

The API runs on http://localhost:5000

| Method | Route | Description |
| --- | --- | --- |
| POST | `/auth/register` | Create user, returns JWT |
| POST | `/auth/login` | Login, returns JWT |
| GET | `/auth/private` | Needs `Authorization: Bearer <token>` |

---

Made by [IkboljonMe](https://github.com/IkboljonMe)
