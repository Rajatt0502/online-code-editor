# Online-code-editor
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
# Create project using Vite
npm create vite@latest online-editor -- --template react
cd online-editor


When asked, choose:

JavaScript + SWC variant

No for rolldown-vite (experimental)

Yes to install & start if you prefer auto-install

2. Install runtime dependencies
npm install @monaco-editor/react
# Install Tailwind dependencies (dev)
npm install -D tailwindcss postcss autoprefixer


If you get Windows npx issues (cannot determine executable), see Troubleshooting below.

3. Create Tailwind + PostCSS config (manual safe method)

If npx tailwindcss init -p fails on your machine, add these files manually:




Start the dev server

npm run dev


Open http://localhost:5173 in your browser.

<img width="1919" height="1024" alt="image" src="https://github.com/user-attachments/assets/78b3f27a-cb2e-4ba1-82d6-8442c7fba784" />


<img width="235" height="536" alt="Screenshot 2025-10-19 231459" src="https://github.com/user-attachments/assets/e58231ed-bdce-4001-b42a-1e7fc62c9b6c" />


<img width="1919" height="970" alt="Screenshot 2025-10-19 232709" src="https://github.com/user-attachments/assets/e1e5a518-c86f-4eed-9454-53bdde82dc02" />
