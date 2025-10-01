// pages/chat.js
import { useState, useRef, useEffect } from "react"
import Layout from "../components/Layout"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", text: "Hi — welcome to SPROSE. How can I help today?" },
    { id: 2, role: "user", text: "Show me how SPROSE maps English to qubit code." },
    { id: 3, role: "assistant", text: "I can outline the steps and show an example. Would you like a high-level summary or a detailed flow?" }
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function sendMessage() {
    if (!input.trim()) return
    const userMsg = { id: Date.now(), role: "user", text: input.trim() }
    setMessages((m) => [...m, userMsg])
    setInput("")

    // simulated assistant reply (replace with your API call)
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: "assistant",
        text:
          "Great — here is a short demonstration:\n\n1) Parse English → AST\n2) Map AST to qubit primitives\n3) Emit target qubit code\n\nAsk me to expand any step."
      }
      setMessages((m) => [...m, reply])
    }, 700)
  }

  return (
    <Layout>
      <div className="min-h-[70vh] bg-slate-50 text-slate-800 font-sans">
        <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1 bg-white border rounded-lg p-4 h-full">
            <div className="text-sm text-slate-500 mb-3">Conversations</div>
            <ul className="space-y-3">
              <li className="p-3 rounded hover:bg-slate-50 cursor-pointer flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">A</div>
                <div className="flex-1 text-sm">Intro to SPROSE</div>
              </li>
              <li className="p-3 rounded bg-slate-50 cursor-pointer flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-sky-100 flex items-center justify-center text-sky-700">Q</div>
                <div className="flex-1 text-sm">Quantum translator</div>
              </li>
              <li className="p-3 rounded hover:bg-slate-50 cursor-pointer flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">I</div>
                <div className="flex-1 text-sm">IoT & Edge</div>
              </li>
            </ul>

            <div className="mt-6">
              <div className="text-xs text-slate-500">Shortcuts</div>
              <div className="mt-2 flex flex-col gap-2">
                <button className="text-sm p-2 rounded border hover:bg-slate-50 text-left">New conversation</button>
                <button className="text-sm p-2 rounded border hover:bg-slate-50 text-left">Import prompt</button>
                <button className="text-sm p-2 rounded border hover:bg-slate-50 text-left">Export chat</button>
              </div>
            </div>
          </aside>

          {/* Chat area */}
          <section className="lg:col-span-3 bg-white border rounded-lg flex flex-col h-[70vh]">
            <div className="p-4 border-b">
              <div className="text-sm text-slate-600">Quantum translator — conversation</div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`${m.role === "user" ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-800"} max-w-[75%] p-3 rounded-lg`}>
                      <div className="whitespace-pre-line text-sm leading-relaxed">{m.text}</div>
                      <div className="text-xs text-slate-400 mt-2">{m.role === "assistant" ? "SPROSE" : "You"}</div>
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message — e.g. 'Translate: prepare 2 qubits in superposition'"
                  className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
                <button onClick={sendMessage} className="px-4 py-2 bg-sky-600 text-white rounded-lg">Send</button>
                <button className="px-3 py-2 border rounded-lg">Upload</button>
              </div>
              <div className="mt-2 text-xs text-slate-400">Tip: Be specific — SPROSE prefers structured, step-by-step instructions.</div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

