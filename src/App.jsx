import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: royalblue; text-align: center; }");
  const [js, setJs] = useState("console.log('Hello from JS');");
  const [srcDoc, setSrcDoc] = useState("");
  const [autoRun, setAutoRun] = useState(true);

  // Auto-update preview when code changes
  useEffect(() => {
    if (autoRun) {
      const timeout = setTimeout(() => {
        const combined = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <style>${css}</style>
            </head>
            <body>
              ${html}
              <script>${js}<\/script>
            </body>
          </html>
        `;
        setSrcDoc(combined);
      }, 300); // debounce
      return () => clearTimeout(timeout);
    }
  }, [html, css, js, autoRun]);

  const handleRun = () => {
    const combined = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `;
    setSrcDoc(combined);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      {/* Header */}
      <header className="bg-gray-950/60 backdrop-blur-lg border-b border-gray-800 flex items-center justify-between px-6 py-3 shadow-lg">
        <h1 className="text-xl font-bold text-blue-400 tracking-wide">⚡ Online Code Editor</h1>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              checked={autoRun}
              onChange={(e) => setAutoRun(e.target.checked)}
              className="accent-blue-500"
            />
            Auto Run
          </label>
          <button
            onClick={handleRun}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md font-medium transition"
          >
            ▶ Run
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Code Editors */}
        <div className="w-1/2 grid grid-rows-3 gap-3 p-3 overflow-y-auto bg-gray-900/50 backdrop-blur-md border-r border-gray-800">
          <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gray-800 text-blue-400 text-sm px-3 py-1 font-mono border-b border-gray-700">
              HTML
            </div>
            <Editor
              height="30vh"
              language="html"
              theme="vs-dark"
              value={html}
              onChange={setHtml}
              options={{ fontSize: 14, minimap: { enabled: false }, lineNumbers: "on" }}
            />
          </div>

          <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gray-800 text-green-400 text-sm px-3 py-1 font-mono border-b border-gray-700">
              CSS
            </div>
            <Editor
              height="30vh"
              language="css"
              theme="vs-dark"
              value={css}
              onChange={setCss}
              options={{ fontSize: 14, minimap: { enabled: false }, lineNumbers: "on" }}
            />
          </div>

          <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gray-800 text-yellow-400 text-sm px-3 py-1 font-mono border-b border-gray-700">
              JavaScript
            </div>
            <Editor
              height="30vh"
              language="javascript"
              theme="vs-dark"
              value={js}
              onChange={setJs}
              options={{ fontSize: 14, minimap: { enabled: false }, lineNumbers: "on" }}
            />
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="w-1/2 p-3 flex flex-col bg-gray-950/40 backdrop-blur-md">
          <h2 className="font-semibold text-purple-400 mb-2 text-lg">Live Preview</h2>
          <div className="flex-1 rounded-lg overflow-hidden border border-gray-700 shadow-lg bg-white">
            <iframe
              srcDoc={srcDoc}
              title="preview"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-2 border-t border-gray-800 text-gray-500 text-sm">
        Made by Rajat using <span className="text-blue-400 font-medium">React + Monaco + Tailwind</span>
      </footer>
    </div>
  );
}

export default App;
