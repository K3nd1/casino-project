import React from "react";
import styles from "./Footer.module.css";
import Icons from "../Icons";
import FooterIcons from "../FooterIcons";
import AlTechLabIcon from "../AlTechLabsIcon";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFirst}>
        <div className={styles.footerFirstLeft}>
          <h3>LOGO</h3>
          <p className={styles.footerFirstLeftText}>
            Sicurezza e Responsabilita
          </p>
          <Icons />
          <p className={styles.footerFirstLeftText}>
            IL GIOCO È VIETATO AI MINORI E PUÒ CAUSARE <br />
            DIPENDENZA PATOLOGICA
          </p>
        </div>
        <div className={styles.footerFirstRight}>
          <div>
            <h6>GIOCHI</h6>
            <hr />
            <p>Sport</p>
            <p>Live</p>
            <p>Casino</p>
            <p>Bingo</p>
            <p>Ippica</p>
            <p>Virtual</p>
          </div>
          <div>
            <h6>COME GIOCARE</h6>
            <hr />
            <p>Registrazione</p>
            <p>Contratto di gioco</p>
            <p>Versamenti</p>
            <p>Prelievi</p>
            <p>Supporto</p>
          </div>
          <div>
            <h6>CHI SIAMO</h6>
            <hr />
            <p>GFBWIN888</p>
            <p>Contatti</p>
            <p>FAQ</p>
            <p>Assistenza</p>
          </div>
          <div>
            <h6>DISCLAIMER</h6>
            <hr />
            <p>Gioco Responsabile</p>
            <p>Privacy e sicurezza</p>
            <p>Cookies</p>
            <p>Condizioni generali</p>
            <p>Probabilità di vincita</p>
            <p>Vincite per mese</p>
          </div>
        </div>
      </div>
      <div className={styles.footerSecond}>
        <div className={styles.footerSecondP}>
          <FooterIcons />
        </div>
        <div className={styles.footerSecondText}>
          <p>POWERED BY:</p>
          <div>
            <AlTechLabIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
