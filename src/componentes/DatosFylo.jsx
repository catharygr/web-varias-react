import "./DatosFylo.css";

export default function DatosFylo() {
  return (
    <main>
      <div className="first-section">
        <img className="logo" src="images/logo.svg" alt="Fylo logo" />
        <div className="icons">
          <div className="icon">
            <img src="images/icon-document.svg" alt="Document image" />
          </div>
          <div className="icon">
            <img src="images/icon-folder.svg" alt="Folder image" />
          </div>
          <div className="icon">
            <img src="images/icon-upload.svg" alt="Cloud image" />
          </div>
        </div>
      </div>
      <div className="second-third">
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
