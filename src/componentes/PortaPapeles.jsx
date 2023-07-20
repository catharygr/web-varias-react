export default function PortaPapeles() {
  return (
    <>
      <header>
        <div className="img-container"></div>
      </header>
      <main>
        <section className="hero-section">
          <img src="./images/logo.svg" alt="company logo" className="logo" />
          <h1 className="hero__title">A history of everything you copy</h1>
          <p className="hero__paragraph">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <button className="ios-btn">Download for iOS</button>
          <button className="mac-btn">Download for Mac</button>
        </section>

        <section className="keep-track-section">
          <h2 className="section-title">Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className="flex-container">
            <img src="./images/image-computer.png" alt="computer" />
            <div className="column">
              <div className="column-item">
                <h3>Quick Search</h3>
                <p>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="column-item">
                <h3>iCLoud Sync</h3>
                <p>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="column-item">
                <h3>Complete History</h3>
                <p>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="access-section">
          <h2 className="section-title">Access Clipboard anywhere</h2>
          <p>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="./images/image-devices.png"
            alt="tablet and mobile device"
          />
        </section>

        <section className="supercharge-section">
          <h2 className="section-title">Supercharge your workflow</h2>
          <p>We've got the tools to boost your productivity.</p>
          <div className="flex-container">
            <div className="row-item">
              <img src="./images/icon-blacklist.svg" alt="icon list" />
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>

            <div className="row-item">
              <img src="./images/icon-text.svg" alt="letter A icon" />
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            <div className="row-item">
              <img src="./images/icon-preview.svg" alt="icon eye" />
              <h3>Sneak preview</h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>

        <section className="companies-section">
          <div className="flex-container">
            <div className="row-item">
              <img src="./images/logo-google.png" alt="logo google" />
            </div>

            <div className="row-item">
              <img src="./images/logo-ibm.png" alt="logo ibm" />
            </div>

            <div className="row-item">
              <img src="./images/logo-microsoft.png" alt="logo microsoft" />
            </div>

            <div className="row-item">
              <img src="./images/logo-hp.png" alt="logo Hewlett Packard" />
            </div>

            <div className="row-item">
              <img
                src="./images/logo-vector-graphics.png"
                alt="logo Vector Graphics"
              />
            </div>
          </div>
        </section>

        <section className="clipboard">
          <h2 className="section-title">Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you are ready to start adding to your clipboard.
          </p>
          <button className="ios-btn">Download for IOS</button>
          <button className="mac-btn">Download for Mac</button>
        </section>
      </main>
    </>
  );
}
