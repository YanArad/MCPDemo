import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./App.module.css";

const THEME_STORAGE_KEY = "mcp-demo-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleThemeChange() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <main className={styles.application}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="MCP Demo home">
          MCP Demo
        </a>
        <div className={styles.actions}>
          <label className={styles.themeControl} title="Toggle Dark Mode">
            <span className={styles.icon} aria-hidden="true">
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </span>
            <input
              className={styles.toggle}
              type="checkbox"
              checked={isDark}
              onChange={handleThemeChange}
              aria-label="Toggle dark mode"
            />
            <span className={styles.track} aria-hidden="true">
              <span className={styles.thumb} />
            </span>
          </label>
          <button className={styles.profile} type="button" aria-label="Open profile">
            HD
          </button>
        </div>
      </header>

      <section id="home" className={styles.content} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Workspace</p>
        <h1 id="page-title">College management</h1>
        <p className={styles.summary}>
          Keep the interface comfortable in any environment. Your theme preference is saved automatically.
        </p>
        <div className={styles.stats}>
          <article>
            <span>Students</span>
            <strong>3</strong>
          </article>
          <article>
            <span>Faculties</span>
            <strong>3</strong>
          </article>
          <article>
            <span>Theme</span>
            <strong>{isDark ? "Dark" : "Light"}</strong>
          </article>
        </div>
      </section>
    </main>
  );
}
