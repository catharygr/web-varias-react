import { useState, useEffect } from "react";
import "./DatosFylo.css";

export default function DatosFylo() {
  // Estado para almacenar la cantidad de datos usados en MB
  const [usedData, setUsedData] = useState(185);
  const maxData = 100;

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
          <div className="icon" onClick={handleUploadClick}>
            <img
              src="/assets/imagenes/datos-fylo/icon-upload.svg"
              alt="Imagen de la nube"
            />
          </div>
        </div>
      </div>
      <div className="segunda-tercera">
        <div className="segunda-seccion">
          <h1>
            Has usado <span>815 GB</span> de tu almacenamiento
          </h1>
          <div className="bar">
            <div
              className="progreso"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="indicator"></div>
            </div>
          </div>
          <div className="gb">
            <span>0 GB</span> <span>{maxData} GB</span>
          </div>
        </div>

        <div className="tercera-seccion">
          <div>
            <span>185 MB</span> Left
          </div>
        </div>
      </div>
    </main>
  );
}
