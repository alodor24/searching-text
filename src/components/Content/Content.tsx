import "./Content.styles.css";

const Content = () => {
  return (
    <div className="content__container">
      <p>
        La sinopsis de un libro es un resumen breve de los{" "}
        <span className="content__text-found">elementos</span> principales de la
        obra. En ella se destacan los momentos más importantes de la trama, los
        personajes principales y su desarrollo.
      </p>
      <p>
        La sinopsis de un libro famoso puede ayudar a los lectores a comprender
        la historia y decidir si quieren leerlo.
      </p>
      <p>
        Un ejemplo de sinopsis de un libro famoso es la de La Odisea de Homero.
        En esta obra, se narra el viaje de Ulises para volver a su patria,
        Ítaca, después de la conquista de Troya.
      </p>
      <p>
        La Odisea es un poema épico que recoge leyendas y cuentos populares. En
        él se describe el viaje de Ulises, que se extiende por diez años, y las
        aventuras que vive junto a su tripulación.
      </p>
    </div>
  );
};

export default Content;
