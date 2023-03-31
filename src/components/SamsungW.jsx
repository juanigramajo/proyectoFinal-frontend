export default function SamsungW() {
  return (
    <div className="container-fluid my-5 ">
      <div className="row ml-3">
        <div className="col-md-6">
          <h2 className="titulosLanding">Samsung Galaxy Watch</h2>
          <h3 className="subtitulosLanding text-justify">
            Un reloj como nunca antes lo viste
          </h3>
          <p className="parrafoLanding my-3 text-justify">
            Descubrí la siguiente generación de Galaxy Watch Active. El nuevo
            Galaxy Watch Active se destaca del resto de relojes deportivos,
            porque además de registrar tus progresos, te da consejos para que
            siempre estés en la primera línea de juego.
          </p>
          <h4 className="subtitulosLanding text-justify">
            No permitas que tu estilo te abandone
          </h4>
          <p className="parrafoLanding my-3 text-justify">
            El Galaxy Watch Active tiene un diseño discreto y ligero con una
            pantalla que te permite ver rápidamente, y sin complicaciones todos
            tus progresos camino a la línea de llegada. Además, tenés una gran
            variedad de correas a tu disposición para combinar con todos tus
            estilos
          </p>
        </div>
        <div className="col-md-6">
          <iframe
            className="videoYoutube"
            src="https://www.youtube.com/embed/P4YuzFSIbJM"
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
