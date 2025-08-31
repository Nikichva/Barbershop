// src/main.js
import "/src/styles/tailwind.css";
import "/src/styles/icomoon.css";
import "/src/styles/globals.css";
import JustValidate from "just-validate";

// import and init any libs (e.g., Swiper) exactly like before
// import Swiper from "swiper"; ...

const burger = document.querySelector(".burger");
const close = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
// media query for MD breakpoint
const md = window.matchMedia("(min-width: 768px)");

function openMenu() {
  menu.classList.add("transform-[translateX(0%)]", "opacity-100");
  menu.classList.remove("transform-[translateX(100%)]", "opacity-0");
  body.classList.add("bg-[linear-gradient(rgba(0,0,0,.70),rgba(0,0,0,.70))]");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menu.classList.remove("transform-[translateX(0%)]", "opacity-100");
  menu.classList.add("transform-[translateX(100%)]", "opacity-0");
  body.classList.remove(
    "bg-[linear-gradient(rgba(0,0,0,.70),rgba(0,0,0,.70))]"
  );
  document.body.style.overflow = "";
}
burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
// When media query are changed
md.addEventListener("change", (e) => {
  if (e.matches) {
    // Now ≥768px — will reset menu and overflow
    closeMenu();
  }
});

// const validate = new JustValidate("#form");
try {
  const validator = new JustValidate("#footer_form");

  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Podaj imię",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Min 2 znaki!",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Podaj numer telefonu",
      },
      {
        rule: "number",
        errorMessage: "To nie jest liczba",
      },
      {
        rule: "minLength",
        value: 9,
        errorMessage: "Nieprawidłowy numer telefonu!",
      },
    ])

    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}
