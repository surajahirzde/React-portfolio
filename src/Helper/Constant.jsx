import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const sideBarLinks = [
  {
    name: "Instagram",
    path: "https://www.instagram.com/surajahirzde/",
    icon: <FaInstagram color="red" />,
  },
  {
    name: "Github",
    path: "https://github.com/surajahirzde/",
    icon: <FaGithub color="black" />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/suraj-yadav-79254b250/",
    icon: <FaLinkedin color="rgb(19, 148, 228)" />,
  },
];
export class TextChanger {
  constructor(e, t, r = 200) {
    (this.text =
      "string" == typeof e ? e : e[Math.floor(Math.random() * e.length)]),
      (this.element = t),
      (this.speed = r),
      (this.current = 0),
      (this.timer = null);
  }
  ChangeText() {
    (this.element.textContent = ""),
      (this.timer = setInterval(() => {
        let e = document.createElement("span");
        (e.textContent = this.text[this.current]),
          this.element.appendChild(e),
          this.current++,
          this.current === this.text.length && clearInterval(this.timer);
      }, this.speed));
  }
}
