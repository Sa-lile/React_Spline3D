import "./styles/main.scss";
import "./App.css";
import Spline from "@splinetool/react-spline";
import Logo from "./images/logo.png";
import Instagram from "./images/instagram.svg";
import Facebook from "./images/facebook.svg";
import Linkedin from "./images/linkedin.svg";

function App() {
  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/KIHUKysh-BGuqpT0/scene.splinecode" />
      <nav>
        <div className="itemsContainer">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="navList">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">projects</a>
              </li>
            </ul>
          </div>
          <div className="burgerContainer">
            <div className="burgerTrigger"></div>
            <div className="Menu"></div>
          </div>
        </div>
      </nav>
      <section>
        <div className="itemsContainer">
        <div className="contents">
          <h1>
            Let's build <span>something epic.</span>
          </h1>
          <p>
            Enhancing digital product experiences for businesses in Australia
            and New Zealand is our specialty. Click below to learn more about
            our software company.
          </p>
        </div>
        <div className="buttons">
          <button className="one">Get started</button>
          <button className="two">Our story..</button>
        </div>
        </div>
      </section>
      <footer>
        <div className="contents">
          <ul>
            <li>
              <a href="/">
                <img src={Instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Facebook} alt="facebook" />
              </a>
            </li>
          </ul>
          <div className="creator">
            <p>UI created by Emerson Visuals</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
