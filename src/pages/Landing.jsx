/* eslint-disable no-unused-vars */
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main2.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            An intuitive app designed to help you organize, streamline, and ace
            your job search journey. Whether you're actively seeking a new job
            or just exploring opportunities, Jobster is your go-to companion for
            managing every aspect of your job applications.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
