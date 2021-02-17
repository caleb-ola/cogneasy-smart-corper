import React from "react";
import "./speakers.css";
import Fade from "react-reveal/Fade";

const SpeakerDetails = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={500}>
            <div className="card ">
              <img
                src="/images/speaker1.png"
                className="card-img-top"
                alt="Dayo salako, COO, Ennovate Lab"
              />
              <div className="card-body">
                <h5 className="card-title">Dayo Salako</h5>
                <p className="card-text">COO, Ennovate Lab</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={1000}>
            <div className="card ">
              <img
                src="/images/speaker2.png"
                className="card-img-top"
                alt="Seun Adepoju, Doctoral Researcher, School of Future Environment, Aukland"
              />
              <div className="card-body">
                <h5 className="card-title">Seun Adepoju</h5>
                <p className="card-text">
                  Doctoral Researcher, School of Future Environment, Aukland
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={1500}>
            <div className="card ">
              <img
                src="/images/speaker3.png"
                className="card-img-top"
                alt="Caleb Dada, Co-founder /Operations Lead Eridan Group"
              />
              <div className="card-body">
                <h5 className="card-title">Caleb Dada</h5>
                <p className="card-text">
                  Co-founder /Operations Lead Eridan Group
                </p>{" "}
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={1500}>
            <div className="card ">
              <img
                src="/images/speaker4.png"
                className="card-img-top"
                alt="Chima Omike"
              />
              <div className="card-body">
                <h5 className="card-title">Chima Omike</h5>
                <p className="card-text">COO, Ennovate Lab</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={1000}>
            <div className="card ">
              <img
                src="/images/speaker5.png"
                className="card-img-top w-100 h-260"
                alt="Tumi Oduale, Wife, Mother, Artist, Product Manager and Entrepreneur"
              />
              <div className="card-body">
                <h5 className="card-title">Tumi Oduale</h5>
                <p className="card-text">
                  Wife, Mother, Artist, Product Manager and Entrepreneur
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Fade bottom duration={500}>
            <div className="card p-0">
              <img
                src="/images/speaker6.png"
                className="card-image-top w-100 h-260"
                alt="Jesudamilare Adesegun-David, Co-Founder, Ennovate Lab"
              />
              <div className="card-body ">
                <h5 className="card-title">Jesudamilare Adesegun-David</h5>
                <p className="card-text">Co-Founder, Ennovate Lab</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
