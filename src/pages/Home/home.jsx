import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import styles from "../Home/home.module.css";
import logo from "../../assets/images/FinestMartLogo.svg";
import human from "../../assets/images/human.png";
import check from "../../assets/images/Check.svg";
import dairy from "../../assets/images/Dairy.png";
import vegetables from "../../assets/images/vegetables.png";
import spices from "../../assets/images/Condiments.png";
import honey from "../../assets/images/honey.png";
import flour from "../../assets/images/bugdoy.png";

function Home() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img src={logo} alt="FinestMart Logo" className={styles.logo} />
        <ul className={styles.navigate}>
          <li>
            <a href="#" className={styles.active}>
              {t("Home")}
            </a>
          </li>
          <li>
            <a href="#">{t("Categories")}</a>
          </li>
          <li>
            <a href="#">{t("Sales")}</a>
          </li>
          <li>
            <a href="#">{t("FAQ")}</a>
          </li>
          <li>
            <a href="#">{t("About")}</a>
          </li>
          <li>
            <a href="#">{t("Contact")}</a>
          </li>
        </ul>

        <section>
          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={language}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">ENG</option>
          </select>
        </section>

        <div className={styles.auth}>
          <button className={styles.signIn}>{t("Sign In")}</button>
          <button className={styles.signUp}>{t("Sign Up")}</button>
        </div>
        <div className={styles.cart}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.text}>
          <h1>
            {t("Let your")}{" "}
            <span className={styles.highlight}>{t("groceries")}</span>{" "}
            {t("come to you")}
          </h1>
          <p>{t("tagline")}</p>
          <div className={styles.search}>
            <input type="text" placeholder={t("Search here")} />
            <button className={styles.searchBtn}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className={styles.features}>
            <span>
              <img src={check} alt="Check Icon" className={styles.checkIcon} />{" "}
              {t("Fresh Vegetables")}
            </span>
            <span>
              <img src={check} alt="Check Icon" className={styles.checkIcon} />{" "}
              {t("100% Guarantee")}
            </span>
            <span>
              <img src={check} alt="Check Icon" className={styles.checkIcon} />{" "}
              {t("Cash on Delivery")}
            </span>
            <span>
              <img src={check} alt="Check Icon" className={styles.checkIcon} />{" "}
              {t("Fast Delivery")}
            </span>
          </div>
        </div>
        <img
          src={human}
          alt="Human holding groceries"
          className={styles.human}
        />
      </div>

      <div className={styles.categoryCards}>
        <div className={styles.categoryCard}>
          <img src={dairy} alt="Dairy Products" />
          <p className={styles.categoryTitle}>{t("Dairy Products")}</p>
          <p className={styles.categoryDescription}>
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          </p>
        </div>
        <div className={styles.categoryCard}>
          <img src={vegetables} alt="Vegetables & Fruits" />
          <p className={styles.categoryTitle}>{t("Vegetables & Fruits")}</p>
          <p className={styles.categoryDescription}>
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          </p>
        </div>
        <div className={styles.categoryCard}>
          <img src={spices} alt="Spices & Seasonings" />
          <p className={styles.categoryTitle}>{t("Spices & Seasonings")}</p>
          <p className={styles.categoryDescription}>
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          </p>
        </div>
        <div className={styles.categoryCard}>
          <img src={honey} alt="Honey" />
          <p className={styles.categoryTitle}>{t("Honey")}</p>
          <p className={styles.categoryDescription}>
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          </p>
        </div>
        <div className={styles.categoryCard}>
          <img src={flour} alt="Flour" />
          <p className={styles.categoryTitle}>{t("Flour")}</p>
          <p className={styles.categoryDescription}>
            {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
