import { useEffect } from "react";
import logo from "~/../public/img/ja1.png";

export default function Index() {
  useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

return (
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="text">
        <h1>Know what's going on.</h1>
         <p>Right now there are hundreds of news stories happening across Canada. But spotting the best ones can be a challenge. Join our free newsletter to get <b>every Canadian news story that matters</b>.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          {/* <input type="text" name="name" placeholder="Enter Your Name" /> */}
          <p><input className="email" type="name" name="name" required placeholder="First Name *" /></p>
          <p><input className="email" type="email" name="email" required placeholder="Email Address *" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="f854f" type="hidden" name="l" checked value="f854f96d-e421-4c68-8abf-4e6d451b9b9a" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}