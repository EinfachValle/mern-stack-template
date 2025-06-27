# mern-stack-template

A well-structured, full-stack boilerplate built with the MERN stack (MongoDB, Express, React, Node.js), Material UI (MUI), Socket.IO for real-time communication, Mailgun for transactional emails, Redux for state management, and `react-i18next` for internationalization.

## Features

- ⚛️ **React 19 + Redux** frontend (with hooks and Redux Toolkit)
- 💅 **Material UI** for fast, accessible, and consistent UI
- 🌐 **Internationalization (i18n)** via `react-i18next`
- 🔌 **Socket.IO** for real-time client-server communication
- 📧 **Mailgun Integration** for sending emails (verification, notifications, etc.)
- 🧱 Modular and scalable folder structure

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Frontend   | React, Redux, MUI, i18next |
| Backend    | Node.js, Express           |
| Database   | MongoDB (via Mongoose)     |
| Realtime   | Socket.IO                  |
| Email      | Mailgun                    |
| State Mgmt | Redux Toolkit              |
| Auth (opt) | JWT                        |

---

## ⚙️ Requirements

- **Node.js**: `>= v22.17.0`
- **Yarn**: Package manager (used throughout)
- **MongoDB**: Local or Atlas instance
- **Mailgun**: API key and domain

---

## 🚀 Getting Started

### Prerequisites

- Node.js (22.17.0)
- MongoDB (local or Atlas)
- Mailgun account + domain (sandbox or live)
- Environment variables setup

### Environment Variables

Create a `.env` file in both `/server` and `/client` (if applicable):

`yarn clone-env`
