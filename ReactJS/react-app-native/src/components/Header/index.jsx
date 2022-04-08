import { Link, useLocation } from "react-router-dom"
import styles from "./headerstyle.module.scss"


export function Header() {
  const location = useLocation();
  console.log(location.pathname);


  return (
    <header className={styles.header}>
      <span>Pure React App</span>
      
      {location.pathname !== "/" && (
        <Link to="/">Go To home</Link>
      )}
    </header>
  )
}