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
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sed libero in odio posuere vulputate. Praesent interdum ipsum mi,
              ac consectetur urna rutrum a. Donec sit amet tincidunt nisi.
              Mauris consequat sit amet diam sit amet vulputate. Quisque orci
              leo, ullamcorper convallis urna placerat, rutrum suscipit eros.
              Integer et placerat massa, a vestibulum quam. Phasellus malesuada
              maximus justo, pretium volutpat ligula pretium ut. Sed vel nisl
              tincidunt, convallis arcu quis, malesuada ante. Aenean sit amet
              feugiat mi. Aliquam in quam vel justo venenatis efficitur. Sed
              mattis efficitur diam, et iaculis arcu condimentum et. Suspendisse
              quis ultricies sem. Quisque vestibulum condimentum vulputate.
            </p>
          </div>
          <div className="links">
            <p>
              <span className="link">
                <a href="https://open.spotify.com/artist/2xUU5XZ4cHaQGl7NAlgMNJ?si=Oy8E_Up3RM-M2WJA87XHEw">
                  Spotify
                </a>
              </span>
              <br></br>
              <span className="link">
                <a href="https://imyblinky.bandcamp.com">Bandcamp</a>
              </span>
              <br></br>
              <span className="link">
                <a href="https://soundcloud.com/imy-blinky">SoundCloud</a>
              </span>
              <br></br>
              <span className="link">
                <a href="https://www.triplejunearthed.com/artist/imy-blinky">
                  triple j Unearthed
                </a>
              </span>
            </p>
          </div>
          <div className="contact">
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
  );
}

export default App;
