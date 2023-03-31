export default function GarminW() {
  return (
    <div className="container-fluid my-5">
      <div className="row ml-3">
        <div className="col-md-6">
          <h2 className="titulosLanding">Garmin Fenix 6S</h2>
          <h3 className="subtitulosLanding text-justify">
            Piensa en algo mejor, no más grande
          </h3>
          <p className="parrafoLanding my-3 text-justify">
            Los relojes multideporte de tamaño compacto de la serie fenix 6S te
            permiten complementar tus sesiones de entrenamiento con mapas,
            música, control del ritmo y mucho más.
          </p>

          <h3 className="subtitulosLanding">Métricas de rendimiento</h3>
          <p className="parrafoLanding my-3 text-justify">
            Consulta métricas de entrenamiento avanzadas que incluyen dinámica
            de carrera1, VO2 máximo adaptado al calor y la altitud, control de
            recuperación y mucho más.
          </p>
        </div>

        <div className="col-md-6">
          <iframe
            className="videoYoutube"
            src="https://www.youtube.com/embed/U7bEVQndGFg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
