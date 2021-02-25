import React from "react";
import { Link } from "react-router-dom";
import "./bio.css";
// import "~slick-carousel/slick/slick.css/";
// import "~slick-carousel/slick/slick-theme.css/";
import Slider from "react-slick";

const Bio = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker1.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>

            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Dayo Salako</h2>
                <h5>COO, Ennovatelab</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Dayo Salako is a social entrepreneur who is passionate about
                  systems creation. She has been working on various
                  youth-focused community development projects for about a
                  decade as both programs coordinator and project manager. Dayo
                  has directly mentored about 15 youths in areas varying from
                  personal and career development to entrepreneurship. She has
                  organized empowerment and coaching programs for over 400
                  youths in the past 5 years.{" "}
                </p>{" "}
                <p className="writeoff-text">
                  Although she had her first degree in a medical science field,
                  she decided to pursue a career in business administration and
                  strategic management due to her passion to work with and add
                  value to people and the economy of her country Nigeria. She
                  believes she has a great role to play in the future growth and
                  development of Africa and has chosen to put in all efforts to
                  ensure this becomes a reality by dedicating her life to
                  empowering and investing in Africans.{" "}
                </p>{" "}
                <p>
                  Dayo currently works as an Operations Lead and Business
                  strategist at Ennovate Lab Ogbomoso, which she believes is a
                  good place to start working on achieving her vision for
                  Nigeria and Africa at large. Connect with her on{" "}
                  <a href="https://www.linkedin.com/in/temidayosalako/">
                    LinkedIn
                  </a>
                  {"."}
                </p>
              </div>
            </div>
          </div>

          <div className="disguise"></div>

          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker2.JPG)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Oluwaseun David Adepoju</h2>
                <h5>Global Challenges Faculty, ALU, Rwanda</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Oluwaseun ADEPOJU is a Global Challenges Faculty at the
                  African Leadership University KIGALI Rwanda. Before joining
                  the university, he was the manager of TECHmIT Africa, a
                  Technology and innovation ecosystem advocacy organisation.
                </p>{" "}
                <p className="writeoff-text">
                  As a technology advocate, he was featured in the German
                  Cooperation MakeIT Africa 2018 report as one of the experts
                  working in the technology field in Africa. He sits on the
                  board of many technology startups in Africa with portfolio
                  structures in Nigeria, Kenya and Rwanda.{" "}
                </p>{" "}
                <p>
                  He is a doctoral researcher in Creative Technologies at the
                  School of Future Environment, Auckland University of
                  Technology, New Zealand. Connect with him on{" "}
                  <a href="https://www.linkedin.com/in/oluwaseun-david-adepoju-b8168984">
                    LinkedIn
                  </a>
                  {"."}
                </p>
              </div>
            </div>
          </div>
          <div className="disguise"></div>
          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker3.jpeg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Caleb Dada</h2>
                <h5>Co-founder /Operations Lead Eridan Group</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Mr. Caleb Dada is an exceptional management executive. His
                  background is in Electrical and Electronics Engineering with
                  his bachelor’s degree from Nigeria’s Premier University,
                  University of Ibadan. He is a Lagos business School alumnus,
                  there he completed a management acceleration course.{" "}
                </p>{" "}
                <p>
                  He is the founder of Kretivent, an enterprise resource
                  planning agency. He served as the Human Resource Manager at
                  Lighthouse Group for 2years before joining Eridan. He's also a
                  Personal Finance and Investment Coach .{" "}
                </p>{" "}
                <p>
                  He currently has a community called Ava Finance (Personal
                  Finance and Smart Investment) where he teaches how to build
                  wealth in the 21st century. Connect with him on{" "}
                  <a href="http://linkedin.com/in/dada-caleb-3b159b68">
                    LinkedIn
                  </a>
                </p>
                {"."}
              </div>
            </div>
          </div>
          <div className="disguise"></div>
          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker4.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Chima Omike</h2>
                <h5>Co-founder, Ennovate Lab.</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Chima is a current MBA candidate at the Fletcher School of Law
                  and Diplomacy, USA. He graduated from the department of
                  Electronic Engineering at the University of Nigeria, Nsukka.
                  Since then, he obtained two MSc. degrees in Advanced
                  Electronics and Renewable Energy from the Université de
                  Bourgogne and Université du Havre in France.{" "}
                </p>{" "}
                <p>
                  His professional background includes over 7 years working for
                  engineering and IT firms in software, clean energy and
                  manufacturing industries in Nigeria, Malta and France. He also
                  has experience in public policy through his work at the
                  European Commission to advise current EU-Africa collaboration
                  on clean energy partnerships.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Chima co-founded Ennovate Lab and assists with strategic
                  direction for business operations and cross-sector
                  partnerships. Connect with him on{" "}
                  <a href="https://www.linkedin.com/in/omikechima/">LinkedIn</a>
                </p>
                {"."}
              </div>
            </div>
          </div>
          <div className="disguise"></div>
          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker5.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Deborah Oduale</h2>
                <h5>Project Manager</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Deborah Oduale is a Project Manager who has worked across 3
                  leading organisations in the UK: Experian - a FinTech service
                  provider; National Grid - the UK's Energy transmission
                  company; and currently with XPS Pensions Group.
                </p>
                <p>
                  She is passionate about her art with abstract and pop art
                  paintings being her forte. Every piece of painting she does is
                  aimed at ministering hope. Her YouTube channel Tumi Oduale Art
                  hosts the Oyinbo Pepper NYSC series, her very hilarious and
                  informative video diaries documenting her experience during
                  the service year.
                </p>
                <p>
                  Above all she is a Christian, and lover of God who is keen on
                  getting more women to love God and experience deep encounters
                  with him. She lives with her husband and son in the UK.
                  Connect with her on{" "}
                  <a href="https://www.linkedin.com/in/deborah-iyinkanmi-oduale-29312884/">
                    LinkedIn
                  </a>
                  {"."}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="disguise"></div>
          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row h-100">
          <div className="col-lg-3 col-md-3 col-sm-12 sideone">
            <Link to="/#speakers">
              <i class="fas fa-times-circle"></i>
            </Link>
          </div>
          <div
            className="col-lg-9 col-md-9 col-sm-12 sidetwo"
            style={{
              backgroundImage: `url(/images/speaker6.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <h5 className="sidetwo-header">Speakers' Bio</h5>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Jesudamilare Adesegun-David</h2>
                <h5>Co-founder, Ennovate Lab</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Jesudamilare "JD" Adesegun-David is a Thought Alchemist and a
                  Community Transformation Strategist. Ennovate Lab, a community
                  he co-leads, is an Innovation Hub and a Startup Foundry
                  committed to building resilient innovation ecosystems in
                  underserved university communities and creating borderless
                  innovative solutions for communities of all kinds.
                </p>
                <p>
                  Through Cogneasy, a flagship product of the Lab’s Startup
                  Foundry, JD is helping to overturn the productive knowledge
                  deficit of Africa. More than 3000 people, including government
                  officials, professionals and educators, have been equipped
                  with productive thinking skills and strategies since 2018.
                </p>
                <p>
                  A graduate of Agronomy in 2011 and a Teach with Africa Fellow
                  (South Africa) in 2015, he has a knack for bridging the
                  seeming divide between diverse disciplines. More recently, he
                  was included in the YNaija New Establishment List for 2019 and
                  his work has been featured in local and global media. Connect
                  with him on{" "}
                  <a href="https://www.linkedin.com/in/jesudamilareadesegundavid/">
                    LinkedIn
                  </a>
                  {"."}
                </p>
              </div>
            </div>
          </div>
          <div className="disguise"></div>
          <div className="bio-link redirect">
            <Link to="/">
              <div className="bio-linkage">
                <strong>{"<Back to home"}</strong>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="main">
          <div className="row full-cover">
            <div className="col-lg-3 col-md-12 col-sm-12 sideone">
              <i class="fas fa-times-circle"></i>
            </div>
            <div
              className="col-lg-9 col-md-12 col-sm-12 sidetwo"
              style={{
                backgroundImage: `url(/images/speaker1.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div>
                <h5 className="sidetwo-header">Speakers' Bio</h5>
              </div>
            </div>
            <div className="writeoff">
              <div className="writeoff-header">
                <h2>Dayo Salako</h2>
                <h5>COO, Ennovatelab</h5>
              </div>
              <div className="writeoff-content">
                <p className="writeoff-text">
                  Dayo Salako is a social entrepreneur who is passionate about
                  systems creation. She has been working on various
                  youth-focused community development projects for about a
                  decade as both programs coordinator and project manager. Dayo
                  has directly mentored about 15 youths in areas varying from
                  personal and career development to entrepreneurship. She has
                  organized empowerment and coaching programs for over 400
                  youths in the past 5 years.{" "}
                </p>{" "}
                <p className="writeoff-text">
                  Although she had her first degree in a medical science field,
                  she decided to pursue a career in business administration and
                  strategic management due to her passion to work with and add
                  value to people and the economy of her country Nigeria. She
                  believes she has a great role to play in the future growth and
                  development of Africa and has chosen to put in all efforts to
                  ensure this becomes a reality by dedicating her life to
                  empowering and investing in Africans. Dayo currently works as
                  an Operations Lead and Business strategist at Ennovate Lab
                  Ogbomoso, which she believes is a good place to start working
                  on achieving her vision for Nigeria and Africa at large.
                  Connect with her on LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Slider>
  );
};

export default Bio;

{
  /* <div className="main">
      <div className="row full-cover">
        <div className="col-lg-3 col-md-12 col-sm-12 sideone">
          <i class="fas fa-times-circle"></i>
        </div>
        <div
          className="col-lg-9 col-md-12 col-sm-12 sidetwo"
          style={{
            backgroundImage: `url(/images/speaker3.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h5 className="sidetwo-header">Speakers' Bio</h5>
          </div>
        </div>
        <div className="writeoff">
          <div className="writeoff-header">
            <h2>Dayo Salako</h2>
            <h5>COO, Ennovatelab</h5>
          </div>
          <div className="writeoff-content">
            <p className="writeoff-text">
              Dayo Salako is a social entrepreneur who is passionate about
              systems creation. She has been working on various youth-focused
              community development projects for about a decade as both programs
              coordinator and project manager. Dayo has directly mentored about
              15 youths in areas varying from personal and career development to
              entrepreneurship. She has organized empowerment and coaching
              programs for over 400 youths in the past 5 years.{" "}
            </p>{" "}
            <p className="writeoff-text">
              Although she had her first degree in a medical science field, she
              decided to pursue a career in business administration and
              strategic management due to her passion to work with and add value
              to people and the economy of her country Nigeria. She believes she
              has a great role to play in the future growth and development of
              Africa and has chosen to put in all efforts to ensure this becomes
              a reality by dedicating her life to empowering and investing in
              Africans. Dayo currently works as an Operations Lead and Business
              strategist at Ennovate Lab Ogbomoso, which she believes is a good
              place to start working on achieving her vision for Nigeria and
              Africa at large. Connect with her on LinkedIn
            </p>
          </div>
        </div>
      </div>
    </div> */
}
