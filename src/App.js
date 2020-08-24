import React from "react";
import "./App.css";
import { Form, Button } from "semantic-ui-react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function App() {
  const [obj, setObj] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...obj }),
    })
      .then(() => {
        setObj({ name: "", email: "", message: "" });
        alert("Success!");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="splash">
        <div className="imy">Imy Blinky</div>
      </div>
      <div className="main">
        <div className="content">
          <div className="links">
            <p>
              <span className="link">
                <a href="https://open.spotify.com/artist/2xUU5XZ4cHaQGl7NAlgMNJ?si=Oy8E_Up3RM-M2WJA87XHEw">
                  Spotify
                </a>
              </span>{" "}
              <span className="link">
                <a href="https://imyblinky.bandcamp.com">Bandcamp</a>
              </span>{" "}
              <span className="link">
                <a href="https://soundcloud.com/imy-blinky">SoundCloud</a>
              </span>{" "}
              <span className="link">
                <a href="https://www.triplejunearthed.com/artist/imy-blinky">
                  triple j Unearthed
                </a>
              </span>
            </p>
          </div>

          {/* <div className="about">
            <p>
            </p>
          </div> */}
          <div className="wrapper">
          <iframe
            src="https://open.spotify.com/embed/artist/2xUU5XZ4cHaQGl7NAlgMNJ"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <div className="contact">
            <div
              style={{
                marginBottom: "14px",
                fontWeight: "bold",
                color: "rgba(0, 0, 0, 0.87)",
              }}
            >
              Contact
            </div>
            <Form onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <Form.Input
                label="Name"
                type="text"
                name="name"
                value={obj.name}
                onChange={(e) => setObj({ ...obj, name: e.target.value })}
              />
              <Form.Input
                label="Email"
                type="email"
                name="email"
                value={obj.email}
                onChange={(e) => setObj({ ...obj, email: e.target.value })}
              />
              <Form.TextArea
                label="Message"
                name="message"
                value={obj.message}
                onChange={(e) => setObj({ ...obj, message: e.target.value })}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
