# ✨ Fullstack Chat & Video Calling App ✨

A real-time chat and video calling application built for 1-on-1 and group conversations. Includes messaging, video/audio calls, screen sharing, and full user authentication. Perfect for social networking, language exchange, or collaborative platforms.

---

## 🌟 Key Features

### 1. Real-time Messaging
- ✅ **Text chat** with instant delivery
- ✅ **Typing indicators** to see when others are typing
- ✅ **Reactions** (like, emoji reactions) for messages
- ✅ **Message threading** and reply support
- ✅ **Read/unread** message indicators

### 2. Video & Audio Calls
- 📹 **1-on-1 calling**
- 🖥 **Screen sharing** during calls
- ⏺ **Optional call recording**
- 🔒 Secure connections using **Stream Video SDK**

### 3. Authentication & Security
- 🔐 **JWT-based authentication**
- 🚪 **Protected routes** for authenticated users
- 🗝 **Password hashing** and secure token storage
- ⚡ **Logout functionality**

### 4. Social Features
- 🌍 Language exchange or global networking
- 👥 **Friend requests & management**
- 💌 Outgoing/incoming friend requests
- 🏆 **Recommended users** based on interactions

### 5. UI & Themes
- 🎨 **32 unique UI themes** with theme selector
- 🖥 **Fully responsive design** for mobile and desktop
- 🧩 Modern UI components with **TailwindCSS**

### 6. State Management & Data Fetching
- 🧠 **Zustand** for global state management
- ⚡ **TanStack Query** for fetching and caching server data
- Optimistic updates and error handling for smoother UX

### 7. Backend & API
- 🏗 Built with **Express.js** and **MongoDB**
- 🔄 REST API for authentication, users, and messaging
- 💬 **Stream API** for real-time chat & video
- 📊 Structured error handling and logging

### 8. Performance & Reliability
- 🚀 Fast client-server communication
- 🔄 Automatic reconnection for video calls
- 📂 **File upload support** for images and media
- ⚠ Graceful handling of errors and network issues

---

## 🧪 Environment Setup

### Backend (`/backend`)

Create a `.env` file in the backend directory:

```env
PORT = 5001
MONGO_URL = mongodb+srv://mohitsagar378_db_user:oqikW1DulPNnqoCB@cluster0.vagzmx8.mongodb.net/streamify_db?retryWrites=true&w=majority&appName=Cluster0
STREAM_API_KEY = q77qntyv3582
STREAM_API_SECRET = 224npzrpr7qg7zg4skss7w9rrn4cpep36wczark786vunbgqrjxrpzx2zzjpgxx3
JWT_SECRET_KEY = secretkey
NODE_ENV=development
```

### Frontend (`/frontend`)

Create a `.env` file in the frontend directory:

```env
VITE_STREAM_API_KEY=q77qntyv3582
```

---

## 🔧 Installation & Running

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the frontend.

---

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Stream Chat & Video SDK** - Real-time chat and video
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Stream API** - Real-time communication

### Deployment
- **Frontend**: Vercel, Netlify
- **Backend**: Render, Heroku

---

## ⚡ Additional Features

- 🔗 Custom call links for private video calls
- 👤 Avatar support and profile pictures
- 🌙 Dark mode and multiple themes
- 📈 Optimized for scalability and real-time interactions
- 🤖 Easy integration for chat bots or language translation features

---

## 📝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add some feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/YourFeature
   ```
6. **Open a Pull Request**

---
