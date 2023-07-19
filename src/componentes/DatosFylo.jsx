import { useState, useEffect } from "react";
import "./DatosFylo.css";

export default function DatosFylo() {
  // Estado para almacenar la cantidad de datos usados en MB
  const [usedData, setUsedData] = useState(0);
  const maxData = 100;

  // Función para aumentar 200 MB cada vez que se hace clic en el icono de subir
  function handleUploadClick() {
    setUsedData((prevUsedData) => Math.min(prevUsedData + 200, maxData * 10));
  }

  // Función para aumentar el progreso en 10 MB cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setUsedData((prevUsedData) => Math.min(prevUsedData + 10, maxData * 10));
    }, 500);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Cálculo del porcentaje de progreso
  const progressPercentage = (usedData / (maxData * 10)) * 100;

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
            You’ve used <span>{usedData} GB</span> of your storage
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
            <span>{maxData * 10 - usedData} MB</span> Left
          </div>
        </div>
      </div>
    </main>
  );
}
