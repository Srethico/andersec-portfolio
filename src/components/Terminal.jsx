// src/components/Terminal.jsx

import { useState } from "react";
import "../styles/Terminal.css";

export default function Terminal() {

  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const commands = {

  help: [
    "Comandos disponibles:",
    "whoami",
    "skills",
    "projects",
    "contact",
    "hack nasa",
    "clear"
  ],

  whoami: [
    "Anderson Ortiz Muñoz",
    "Ingeniero de Sistemas",
    "Ciberseguridad | Backend | Pentesting"
  ],

  skills: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Pentesting",
    "Networking",
    "Linux",
    "Docker"
  ],

  projects: [
    "Web Pentesting Lab",
    "Sistema Facturación DIAN",
    "AnderSec Portfolio"
  ],

  contact: [
    "Email: ethicoander@protonmail.com",
    "GitHub: github.com/Srethico"
  ],

  hack: [
    "Access denied.",
    "Nice try hacker."
  ]

};
  const handleCommand = (cmd) => {

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[cmd] || ["Comandos disponibles:",
    "whoami",
    "skills",
    "projects",
    "contact",
    "hack nasa",
    "clear"];

    setHistory([
      ...history,
      { cmd, output }
    ]);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    handleCommand(input);

    setInput("");

  };

  return (

    <section className="terminal-section">

      <div className="terminal">

        <div className="terminal-header">

          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

        </div>

        <div className="terminal-body">

          {history.map((item, index) => (

            <div key={index}>

              <p className="terminal-command">
                root@andersec:~$ {item.cmd}
              </p>

              {item.output.map((line, i) => (
                <p key={i} className="terminal-output">
                  {line}
                </p>
              ))}

            </div>

          ))}

          <form onSubmit={handleSubmit}>

            <span className="terminal-prompt">
              root@andersec:~$
            </span>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />

          </form>

        </div>

      </div>

    </section>

  );

}