import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Visita y descubre <br className="sm:block hidden" /> geniales proyectos web
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Landpage para tu empresa o marca. Una identidad digital en la web es necesario hoy en dia para el crecimiento de tu negocio
      </p>
      <a href="https://carsalcedo.github.io/fcarreraportafolio/" target="_blank" rel="noopener noreferrer">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] rounded-xl" />
    </div>
  </section>
  )
}

export default CardDeal