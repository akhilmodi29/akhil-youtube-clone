# 🎬 Akhil YouTube Clone

A fully functional YouTube clone built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **React Router DOM**.

---

## 🚀 Features

- 🏠 **Home Page** — Fetches and displays trending videos from YouTube API
- 🔍 **Search Suggestions** — Live search with debouncing (200ms)
- 📺 **Watch Page** — Embeds YouTube video player
- 💬 **Live Chat** — Simulated real-time chat with auto-generated messages
- 🗂️ **Sidebar** — Toggle-able sidebar with navigation links
- 🔘 **Category Buttons** — Filter videos by category
- 🗃️ **Redux State Management** — Global state for sidebar toggle and live chat

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Library |
| Redux Toolkit | State Management |
| React Router DOM | Client-side Routing |
| Tailwind CSS | Styling |
| YouTube Data API v3 | Fetch Videos |

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akhilmodi29/akhil-youtube-clone.git
   cd akhil-youtube-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```
   REACT_APP_GOOGLE_API_KEY=your_youtube_api_key_here
   ```
   Get your API key from [Google Cloud Console](https://console.cloud.google.com/)

4. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Head.js              # Header with search bar
│   ├── Body.js              # Layout with sidebar + outlet
│   ├── Sidebar.js           # Navigation sidebar
│   ├── MainContainer.js     # Buttons + video grid
│   ├── ButtonList.js        # Category filter buttons
│   ├── VideoContainer.js    # Fetches & displays videos
│   ├── VideoCard.js         # Individual video card
│   ├── WatchPage.js         # Video player page
│   ├── LiveChat.js          # Live chat simulation
│   ├── ChatMessage.js       # Single chat message
│   └── CommentsContainer.js # Comments section
├── utils/
│   ├── store.js             # Redux store
│   ├── appSlice.js          # Sidebar state slice
│   ├── chatSlice.js         # Live chat state slice
│   ├── constants.js         # API URLs
│   └── helper.js            # Utility functions
└── App.js                   # Root component with routing
```

---

## 🔧 Available Scripts

```bash
npm start        # Run development server
npm run build    # Build for production
npm test         # Run tests
```

---

## 🌐 Deployment

When deploying to **Vercel** or **Netlify**, add the environment variable in your platform's dashboard:

```
REACT_APP_GOOGLE_API_KEY = your_api_key_here
```

---

## 👨‍💻 Author

**Akhil Modi**
- GitHub: [@akhilmodi29](https://github.com/akhilmodi29)
