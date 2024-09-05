import { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./Work.css";

function Work() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  const images = [
    {
      img: "src/assets/images/work-1.jpg",
      name: "Sunglow Resort",
      url: "http://sunglowresorts.com",
    },
    {
      img: "src/assets/images/work-2.jpg",
      name: "S. M. Batha High School",
      url: "http://www.smbatha.net",
    },
    {
      img: "src/assets/images/work-3.jpg",
      name: "Master Computech Pvt. Ltd.",
      url: "https://www.mastercomputech.com",
    },
    {
      img: "src/assets/images/work-4.jpg",
      name: "Idealake Information Technologies Ltd.",
      url: "https://www.idealake.com",
    },
    {
      img: "src/assets/images/work-5.jpg",
      name: "JM Financial",
      url: "https://www.jmfl.com",
    },
    {
      img: "src/assets/images/work-6.jpg",
      name: "Axis Bank",
      url: "https://www.axisbank.com",
    },
    {
      img: "src/assets/images/work-7.jpg",
      name: "Axis Dining",
      url: "https://dining.eazydiner.com/axisbank",
    },
    {
      img: "src/assets/images/work-8.jpg",
      name: "ICICI Lombard",
      url: "https://www.icicilombard.com",
    },
    {
      img: "src/assets/images/work-9.jpg",
      name: "Bank Of India Mutual Fund",
      url: "https://www.boimf.in",
    },
    {
      img: "src/assets/images/work-10.jpg",
      name: "SBI Mutual Fund",
      url: "https://www.sbimf.com",
    },
    {
      img: "src/assets/images/work-11.jpg",
      name: "Kotak Mutual Fund",
      url: "https://www.kotakmf.com",
    },
    {
      img: "src/assets/images/work-13.jpg",
      name: "Canara Robeco Mutual Fund",
      url: "https://www.canararobeco.com",
    },
    {
      img: "src/assets/images/work-14.jpg",
      name: "ICICI Prudential Mutual Fund",
      url: "https://www.icicipruamc.com",
    },
    {
      img: "src/assets/images/work-15.jpg",
      name: "Future Generali Insurance",
      url: "https://www.futuregenerali.in/Corporate",
    },
    {
      img: "src/assets/images/work-12.jpg",
      name: "DSP Mutual Fund",
      url: "https://www.dspim.com",
    },
    {
      img: "src/assets/images/work-16.jpg",
      name: "IRIS Business Services Limited",
      url: "https://www.irisbusiness.com",
    },
    {
      img: "src/assets/images/work-17.jpg",
      name: "IRIS CARBON",
      url: "https://www.iriscarbon.com",
    },
    {
      img: "src/assets/images/work-18.jpg",
      name: "IRIS CARBON Product",
      url: "https://dev.iriscarbon.com",
    },
  ];
  return (
    <section
      id="work"
      className="portfolio-mf paralax-mf sect-pt4 route bg-image"
    >
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a white">Portfolio</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {images.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="work-box">
                <a className="work-img">
                  <img
                    src={item.img}
                    alt="img"
                    className="img-fluid"
                    onClick={() => openLightboxOnSlide(index + 1)}
                  />
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">{item.name}</h2>
                      <div className="w-more">
                        <a
                          className="w-ctegory"
                          href={item.url}
                          target="_blank"
                        >
                          {item.url}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
              "src/assets/images/work-1.jpg",
              "src/assets/images/work-2.jpg",
              "src/assets/images/work-3.jpg",
              "src/assets/images/work-4.jpg",
              "src/assets/images/work-5.jpg",
              "src/assets/images/work-6.jpg",
              "src/assets/images/work-7.jpg",
              "src/assets/images/work-8.jpg",
              "src/assets/images/work-9.jpg",
              "src/assets/images/work-10.jpg",
              "src/assets/images/work-11.jpg",
              "src/assets/images/work-13.jpg",
              "src/assets/images/work-14.jpg",
              "src/assets/images/work-15.jpg",
              "src/assets/images/work-12.jpg",
              "src/assets/images/work-16.jpg",
              "src/assets/images/work-17.jpg",
              "src/assets/images/work-18.jpg",
            ]}
            slide={lightboxController.slide}
          />
        </div>
      </div>
    </section>
  );
}
export default Work;
