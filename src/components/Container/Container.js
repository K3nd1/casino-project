import React, { useState, useEffect } from "react";
import styles from "./Container.module.css";
import banerSport from "../../img/banerSport.png";
import baner from "../../img/baner2.png";
import Card from "../Card";
import llion from "../../img/llion.png";
import arsenal from "../../img/arsenal.png";
import everton from "../../img/everton.png";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";
import four from "../../img/4.png";
import five from "../../img/5.png";
import six from "../../img/6.png";
import seven from "../../img/7.png";
import eight from "../../img/8.png";
import nine from "../../img/9.png";
import ten from "../../img/10.png";
import eleven from "../../img/11.png";
import twelve from "../../img/12.png";
import thirteen from "../../img/13.png";
import fourteen from "../../img/14.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Container() {
  const [loop, setLoop] = useState([
    {
      id: 1,
      img: one,
      title: "ALOHA",
    },
    {
      id: 2,
      img: two,
      title: "ARCANEREELS",
    },
    {
      id: 3,
      img: three,
      title: "ARCHANGELS",
    },
    {
      id: 4,
      img: four,
      title: "ASGARDIAN STONES",
    },
    {
      id: 5,
      img: five,
      title: "BERRY BURST MAX",
    },
    {
      id: 6,
      img: six,
      title: "BLOOD SUCKERS 2",
    },
    {
      id: 7,
      img: seven,
      title: "BOOM BROTHERS",
    },
  ]);

  const [loop1, setLoop1] = useState([
    {
      id: 1,
      img: eight,
      title: "AMERICAN ROULETTE",
    },
    {
      id: 2,
      img: nine,
      title: "BLACKJACK",
    },
    {
      id: 3,
      img: ten,
      title: "BALCKJACK VIP",
    },
    {
      id: 4,
      img: eleven,
      title: "MINI BALCKJACK",
    },
    {
      id: 5,
      img: twelve,
      title: "AUTO ROULETTE",
    },
    {
      id: 6,
      img: thirteen,
      title: "BLACKJACK",
    },
    {
      id: 7,
      img: fourteen,
      title: "ROULETTE",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(window.innerWidth);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up functi
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        {width < 1230 ? (
          open ? (
            <div>
              <div className={styles.firstContainerBlock}>
                <h6>SCOMMESSE</h6>
                <h6 className={styles.active}>LIVE</h6>
                <h6>CASINO</h6>
                <h6>SMILE CASINO</h6>
                <h6>CASINO LIVE</h6>
                <h6>POKER</h6>
                <h6>VIRTUAL</h6>
                <h6>IPPICA</h6>
                <h6>PROMOZIONI</h6>
              </div>

              <div onClick={handleToggle} className={styles.middleContainer}>
                <CloseIcon fontSize="inherit" color="inherit" />
              </div>
            </div>
          ) : (
            <div onClick={handleToggle} className={styles.middleContainer}>
              <MenuIcon fontSize="inherit" color="inherit" />
            </div>
          )
        ) : (
          <div className={styles.firstContainerBlock}>
            <h6>SCOMMESSE</h6>
            <h6 className={styles.active}>LIVE</h6>
            <h6>CASINO</h6>
            <h6>SMILE CASINO</h6>
            <h6>CASINO LIVE</h6>
            <h6>POKER</h6>
            <h6>VIRTUAL</h6>
            <h6>IPPICA</h6>
            <h6>PROMOZIONI</h6>
          </div>
        )}

        <div className={styles.firstContainerInfo}>
          <p>
            14:29 Martedì, 9 Marzo 2021 <br /> HELPDESK 0831 234567
          </p>
        </div>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.secondContainerImg1}>
          <img src={banerSport} />
          <div>
            <h5>Lorem Ipsum</h5>
            <h6>
              is simply dummy text of the printing
              <br />
              and typesetting industry.
            </h6>
            <button>GIOCA ORA</button>
          </div>
        </div>

        <div className={styles.secondContainerImg2}>
          <img className={styles.secondContainerImg2Baner} src={baner} />
          <div className={styles.secondContainerImg2Flex}>
            <h5>ENGLAND</h5>
            <h6>PREMIER LEAGUE</h6>
            <img src={llion} />
            <div className={styles.ArEV}>
              <div>
                <img src={arsenal} />
                <p>Arsenal</p>
              </div>
              <div>
                <img src={everton} />
                <p>Everton</p>
              </div>
            </div>
            <div className={styles.secondContainerImg2Bottom}>
              <button>GIOCA ORA</button>
              <h6>21:00</h6>
              <h6>23/04/2021</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        <div className={styles.thirdContainerGrid1}>
          <div className={styles.thirdContainerGrid1Text}>
            <h5>CASINO</h5>
            <h6>TUTTO</h6>
          </div>
          <div className={styles.thirdContainerGrid1Items}>
            {loop.map((item) => {
              return <Card key={item.id} title={item.title} image={item.img} />;
            })}
          </div>
        </div>
        <div className={styles.thirdContainerGrid2}>
          <div className={styles.thirdContainerGrid1Text}>
            <h5>LIVE CASINO</h5>
            <h6>TUTTO</h6>
          </div>
          <div className={styles.thirdContainerGrid1Items}>
            {loop1.map((item) => {
              return <Card key={item.id} title={item.title} image={item.img} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
