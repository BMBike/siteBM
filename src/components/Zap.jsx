/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Zap.module.css";

export default function Zap() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511930554813&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={styles.wp}
        src="/images/wpp.png"
        alt="Clique aqui para falar com a gente pelo Whatsapp!"
      />
    </a>
  );
}
