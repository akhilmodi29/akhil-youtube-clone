# 🎬 Akhil YouTube Clone

A fully responsive, production-ready **YouTube Clone** built with **React 19**, **Redux Toolkit**, **Tailwind CSS**, and **React Router DOM**. Featuring an authentic **YouTube Dark Mode**, real-time search suggestions with caching & debouncing, video search results, simulated live chat, and dynamic watch pages with suggested videos.

---

## 🚀 Features

- 🌙 **YouTube Dark Theme** — Pure YouTube `#0f0f0f` dark mode styling across the entire application.
- 🏠 **Trending Videos Feed** — Fetches and displays popular videos using the YouTube Data API v3.
- 🔍 **Live Search Autocomplete & Debouncing** — 200ms debounced search suggestions with Redux caching to eliminate redundant network calls.
- 🔎 **Search Results Page (`/results`)** — Queries the YouTube Search API and displays matching videos with thumbnails, channel names, and descriptions.
- 📺 **Dynamic Watch Page (`/watch?v=...`)**:
  - Responsive 16:9 embedded YouTube video player.
  - Live video details (Title, Channel with Subscribe button, Like count, and View count).
  - Proportional, nested comments section scaled to video width.
- 💬 **Interactive Live Chat**:
  - Real-time simulation generating continuous stream of incoming messages with polling.
  - Ability for users to post their own messages into the chat stream.
- 🗂️ **Suggested / Related Videos** — Rendered right under Live Chat; clicking any video instantly switches the active player.
- 🧭 **Interactive Navigation & Categories**:
  - Collapsible sidebar with category filtering (**Gaming**, **Music**, **Sports**, **Movies**, **Trending**, **News**, **Live**).
  - Horizontal scrolling category button pills for fast topic browsing.
- ⚡ **Zero-CORS Native Proxy Architecture**:
  - Development: Configured with `setupProxy.js` (`http-proxy-middleware`) with `changeOrigin: true`.
  - Production: Configured with `vercel.json` edge rewrites for serverless proxying and seamless client-side SPA routing on page refreshes.
- 🛡️ **Defensive Rendering** — Built with optional chaining and fallback states to prevent application crashes if API limits are reached.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI component library |
| **Redux Toolkit** | Centralized global state management (`app`, `searchCache`, `chat`) |
| **React Router DOM v7** | Client-side routing with nested layouts (`/`, `/watch`, `/results`) |
| **Tailwind CSS** | Responsive dark mode styling & layout |
| **YouTube Data API v3** | Videos feed, video details, and search query results |
| **Google Autocomplete API** | Live search suggestions |
| **http-proxy-middleware** | Local development reverse proxy |

---

## 📁 Project Structure

```
youtube-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Head.js              # Centered search bar, suggestions dropdown & action icons
│   │   ├── Body.js              # Main layout containing Sidebar and Router Outlet
│   │   ├── Sidebar.js           # Collapsible dark navigation sidebar with category routes
│   │   ├── MainContainer.js     # Top category buttons & video grid container
│   │   ├── ButtonList.js        # Horizontal scrolling category filters
│   │   ├── Button.js            # Individual category button pill
│   │   ├── VideoContainer.js    # Home page trending video grid
│   │   ├── VideoCard.js         # Individual video card with thumbnail & view counts
│   │   ├── SearchResults.js     # Dedicated search results list component
│   │   ├── WatchPage.js         # Video player, metadata, comments & suggested videos
│   │   ├── LiveChat.js          # Live chat stream container with input form
│   │   ├── ChatMessage.js       # Single chat message component
│   │   └── CommentsContainer.js # Nested N-level comments thread
│   ├── utils/
│   │   ├── store.js             # Redux store configuration
│   │   ├── appSlice.js          # Sidebar open/close state
│   │   ├── searchSlice.js       # Search suggestion LRU/dictionary cache
│   │   ├── chatSlice.js         # Live chat messages buffer
│   │   ├── constants.js         # API endpoints & configuration
│   │   └── helper.js            # Random name & message generators
│   ├── setupProxy.js            # Local dev server CORS proxy
│   ├── App.js                   # Application root with router configuration
│   ├── index.css                # Tailwind directives & global dark background
│   └── index.js                 # React root render
├── .env                         # Local environment variables (git-ignored)
├── vercel.json                  # Production proxy rewrites & SPA routing fallback
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Project dependencies & scripts
```

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

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GOOGLE_API_KEY=your_youtube_data_api_key_here
   ```
   *(Obtain a key from the [Google Cloud Console](https://console.cloud.google.com/) with YouTube Data API v3 enabled).*

4. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment (Vercel)

This project is pre-configured for one-click deployment on **Vercel**:

1. Push your code to GitHub.
2. In **[Vercel Dashboard](https://vercel.com/)**, click **Add New Project** and import the repository.
3. In **Project Settings &rarr; Environment Variables**, add:
   - **Key**: `REACT_APP_GOOGLE_API_KEY`
   - **Value**: `your_youtube_data_api_key`
4. Click **Deploy**.

> The included `vercel.json` automatically handles:
> - Client-side SPA routing (preventing 404 on refreshing `/watch` or `/results`).
> - Serverless proxying for Google search autocomplete without CORS errors.

---

## 👨‍💻 Author

**Akhil Modi**
- GitHub: [@akhilmodi29](https://github.com/akhilmodi29)
