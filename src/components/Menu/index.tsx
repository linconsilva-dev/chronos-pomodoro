import { useEffect, useState } from "react";

import {
  HouseIcon,
  CogIcon,
  HistoryIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // não segue o href ao ser clicado

    setTheme(prevTheme => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#'>
        <CogIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
