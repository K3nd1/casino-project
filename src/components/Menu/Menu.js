import React from "react";
import styles from "./Menu.module.css";
import Icons from "../Icons";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import Italy from "../Italy";
function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuFirst}>
        <Icons />
        <p className={styles.menuText}>
          IL GIOCE È VIETATO AI MINORI DI 18 ANNI E PIO CAUSARE DIPENDENZA
          PATOLOGICA.
          <br /> ROBABILITA DI VINVITA SUL SITO ADM.
        </p>
      </div>

      <div className={styles.menuSecond}>
        <h3>LOGO</h3>
      </div>

      <div className={styles.menuThird}>
        <div className={styles.menuThirdInputs}>
          <div className={styles.menuThirdInput1}>
            <PersonIcon fontSize="large" />
            <input type="text" placeholder="NOME UTENTE" />
          </div>
          <div className={styles.menuThirdInput2}>
            <LockIcon fontSize="large" color="inherit" />
            <input type="text" placeholder="PASSWORD" />
          </div>
        </div>

        <div className={styles.menuThirdButtons}>
          <button>LOGIN</button>
          <button>REGISTRATI</button>
          <Italy />
          <p>IT</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
