import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Categories": "Categories",
      "Sales": "Sales",
      "FAQ": "FAQ",
      "About": "About",
      "Contact": "Contact",
      "Sign In": "Sign In",
      "Sign Up": "Sign Up",
      "groceries": "groceries",
      "tagline": "Get fresh groceries online without stepping out to make delicious food with the freshest ingredients",
      "Search here": "Search here",
      "Fresh Vegetables": "Fresh Vegetables",
      "100% Guarantee": "100% Guarantee",
      "Cash on Delivery": "Cash on Delivery",
      "Fast Delivery": "Fast Delivery",
      "Dairy Products": "Dairy Products",
      "Vegetables & Fruits": "Vegetables & Fruits",
      "Spices & Seasonings": "Spices & Seasonings",
      "Honey": "Honey",
      "Flour": "Flour",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  },
  ru: {
    translation: {
      "Home": "Главная",
      "Categories": "Категории",
      "Sales": "Продажи",
      "FAQ": "Часто задаваемые вопросы",
      "About": "О нас",
      "Contact": "Контакты",
      "Sign In": "Войти",
      "Sign Up": "Регистрация",
      "groceries": "продукты",
      "tagline": "Получайте свежие продукты онлайн, не выходя из дома, чтобы приготовить вкусную еду из самых свежих ингредиентов",
      "Search here": "Искать здесь",
      "Fresh Vegetables": "Свежие овощи",
      "100% Guarantee": "100% гарантия",
      "Cash on Delivery": "Наложенный платеж",
      "Fast Delivery": "Быстрая доставка",
      "Dairy Products": "Молочные продукты",
      "Vegetables & Fruits": "Овощи и фрукты",
      "Spices & Seasonings": "Специи и приправы",
      "Honey": "Мед",
      "Flour": "Мука",
      "Lorem ipsum dolor sit amet, consectetur adipiscing элит.": "Lorem ipsum dolor sit amet, consectetur adipiscing элит."
    }
  },
  uz: {
    translation: {
      "Home": "Bosh sahifa",
      "Categories": "Kategoriyalar",
      "Sales": "Sotuvlar",
      "FAQ": "TSS",
      "About": "Haqida",
      "Contact": "Aloqa",
      "Sign In": "Kirish",
      "Sign Up": "Ro'yxatdan o'tish",
      "groceries": "mahsulotlar",
      "tagline": "Yangi oziq-ovqat mahsulotlarini onlayn oling va eng yangi ingredientlar bilan mazali taom tayyorlang",
      "Search here": "Bu yerda qidiring",
      "Fresh Vegetables": "Yangi sabzavotlar",
      "100% Guarantee": "100% kafolat",
      "Cash on Delivery": "Yetkazib berishda naqd to'lash",
      "Fast Delivery": "Tez yetkazib berish",
      "Dairy Products": "Sut mahsulotlari",
      "Vegetables & Fruits": "Sabzavotlar va mevalar",
      "Spices & Seasonings": "Ziravorlar va mavsumlar",
      "Honey": "Asal",
      "Flour": "Un",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
