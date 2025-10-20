# online-code-editor
Online Code Editor with Live Preview — A browser-based IDE built with React, Monaco Editor and Tailwind CSS. Write HTML / CSS / JavaScript and see an instant iframe preview. Perfect as a portfolio project or starting point for a CodePen-like app.


🚀 Features

Real-time preview (HTML, CSS, JS) inside an iframe

VS Code-like editing experience using Monaco Editor

Responsive split layout (editor panes + preview)

Tailwind CSS for quick, modern styling

Quick share/save ideas: localStorage example included (optional DB instructions)

Fast dev build with Vite + SWC



🧰 Tech Stack

Frontend

React (Vite template — JavaScript + SWC)

@monaco-editor/react (Monaco Editor wrapper)

Tailwind CSS (styling utility)

Bundler / Dev

Vite (fast dev server & build)

Optional Backend / Persistence

Node.js + Express + MongoDB / Firebase / Supabase (for snippet saving & sharing)

Deployment

Vercel, Netlify, or any static-host supporting Vite builds



🔧 Prerequisites

Node.js (LTS) and npm installed.

Verify:

node -v
npm -v


Recommended: VS Code or other modern editor.


🛠️ Full Setup (step-by-step)

1. Create project (Vite)
# create project using Vite
npm create vite@latest online-editor -- --template react
cd online-editor


When asked, choose:

JavaScript + SWC variant

No for rolldown-vite (experimental)

Yes to install & start if you prefer auto-install

2. Install runtime dependencies
npm install @monaco-editor/react
# install Tailwind dependencies (dev)
npm install -D tailwindcss postcss autoprefixer


If you get Windows npx issues (cannot determine executable), see Troubleshooting below.

3. Create Tailwind + PostCSS config (manual safe method)

If npx tailwindcss init -p fails on your machine, add these files manually:




Start the dev server

npm run dev


Open http://localhost:5173 in your browser.
