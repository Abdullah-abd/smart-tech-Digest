# Smart Tech Digest 🍉

**Smart Tech Digest** is a responsive, category-driven, and location-aware news web application built using **React** and **Tailwind CSS**. It offers a personalized and optimized reading experience by leveraging geolocation, network info, and user interests to serve trending articles.

---

## 🚀 Features

### 📍 Geolocation-Based News
- Detects user’s country via IP using `ipapi.co`.
- Automatically shows local news under the **"For You"** tab.
- Falls back to **India** if geolocation fails or is blocked.

### 📡 Network Condition Detection
- Uses the **Network Information API** to detect:
  - Slow connections (2G/3G).
  - Data-saving preferences.
- Displays a toast warning if the user is on a limited connection.

### 📚 Tabbed News Sections
- `For You` – Localized news based on geolocation.
- `Tech` – Latest updates in modern technology stacks and tools.
- `Design` – Trends, UI/UX practices, and creative inspiration.
- `Trends` – Browse country-wise trending articles, searchable and collapsible.

### 📰 Post Details View
- Each article has a dedicated route (`/posts/:id`).
- Supports both locally hosted and Cloudinary-hosted images.

---

## 🔧 Tech Stack

- **Frontend:** React (with TypeScript)
- **Styling:** Tailwind CSS (with custom theme)
- **Routing:** `wouter`
- **State & Hooks:** React Hooks (custom + built-in)
- **Media Optimization:** Cloudinary (`@cloudinary/react`)
- **Geolocation API:** `ipapi.co`
- **Toasts:** `react-hot-toast`

---

## ⚙️ Custom Hooks Used

| Hook             | Purpose                                                       |
|------------------|---------------------------------------------------------------|
| `useGeolocation` | Detects user’s country with fallback to India if needed       |
| `useNetworkInfo` | Checks connection speed and data-saving preference            |
| `useInView`      | Detects when elements enter the viewport (IntersectionObserver) |

---

## 💡 UX & Edge Case Handling

- ✔️ Default fallback to India for location.
- ✔️ Safe defaults if Network Info API is not supported.
- ✔️ Toast warning on slow networks.
- ✔️ Friendly messages for invalid routes or no search results.
- ✔️ Lazy-load posts on scroll (with `IntersectionObserver`).

---

## 📸 Preview

![Smart Tech Digest preview](https://your-image-link-if-any.png)

---

## 📁 Folder Structure Overview

src/
│
├── assets/ # Static post data by category/country
├── components/ # Reusable UI components (NewsCard, CountryTrends, etc.)
├── hooks/ # Custom hooks (Geolocation, NetworkInfo, InView)
├── pages/ # HomePage, PostPage
├── utils/ # Cloudinary setup or shared utilities
├── App.tsx
└── main.tsx
