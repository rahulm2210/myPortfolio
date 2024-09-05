import "./Contact.css";
import Swal from "sweetalert2";
import { useRef } from "react";

const Contact = () => {
  const name1 = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9f38788c-b7cc-4b6a-8d4c-66dd16216881");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
      name1.current.value = "";
      email.current.value = "";
      subject.current.value = "";
      message.current.value = "";
    }
  };
  return (
    <section id="contact" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Contact Me</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form className="email-form" onSubmit={onSubmit}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                ref={name1}
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                ref={email}
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                ref={subject}
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                ref={message}
                                rows="5"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        I hope you have visited my portfolio section. If you
                        have any suggestions please feel free drop me a message.
                        You can also get in touch with me through the Social
                        media.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <i className="fas fa-location-arrow"></i> 103, Mahavir
                          Plaza, Sector 19, Airoli, Navi Mumbai - 400708.
                        </li>
                        <li>
                          <i className="fas fa-mobile-alt"></i> (91) 7045501952
                        </li>
                        <li>
                          <i className="fas fa-envelope"></i>
                          <a href="mailto:rahul486mejari@gmail.com">
                            rahul486mejari@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/pages/Rdesign/1526407834245253?ref_type=bookmark"
                            target="_blank"
                          >
                            <span className="ico-circle">
                              <i className="fab fa-facebook-square"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="www.linkedin.com/in/rahulmejari2210"
                            target="_blank"
                          >
                            <span className="ico-circle">
                              <i className="fab fa-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
