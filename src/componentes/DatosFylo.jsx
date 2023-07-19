import "./DatosFylo.css";

export default function DatosFylo() {
  return (
    <main>
      <div className="primera-seccion">
        <img
          className="logo"
          src="/assets/imagenes/datos-fylo/logo.svg"
          alt="Fylo logo"
        />
        <div className="icons">
          <div className="icon">
            <img
              src="/assets/imagenes/datos-fylo/icon-document.svg"
              alt="Imagen"
            />
          </div>
          <div className="icon">
            <img
              src="/assets/imagenes/datos-fylo/icon-folder.svg"
              alt="Imagen de carpeta"
            />
          </div>
          <div className="icon">
            <img
              src="/assets/imagenes/datos-fylo/icon-upload.svg"
              alt="Imagen de la nube"
            />
          </div>
        </div>
      </div>
      <div className="segunda-tercera">
        <div className="second-section">
          <h1>
            You’ve used <span>815 GB</span> of your storage
          </h1>
          <div className="bar">
            <div className="progress">
              <div className="indicator"></div>
            </div>
          </div>
          <div className="gb">
            <span>0 GB</span> <span>1000 GB</span>
          </div>
        </div>

        <div className="third-section">
          <div>
            <span>185</span> GB Left
          </div>
        </div>
      </div>
    </main>
  );
}
