import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Aliquam interdum nibh et neque laoreet, at ultricies nibh rhoncus.
              Aliquam erat volutpat. Phasellus suscipit arcu eget tincidunt
              viverra. Duis sagittis nisi leo, id laoreet augue tempor vitae.
              Integer nec sapien quis leo condimentum commodo at nec tellus.
              Donec id ante in sem rhoncus egestas. Sed id molestie lectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              urna felis, imperdiet at ultrices ultrices, porttitor vitae
              turpis. Duis et neque porttitor, tincidunt ipsum id, consequat
              risus. Phasellus tristique aliquet venenatis. Cras fringilla
              dictum libero nec tincidunt. Nam congue risus vitae dapibus
              porttitor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
