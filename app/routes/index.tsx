import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import chill from "~/../public/img/chill.jpg";
import tobi from "~/../public/img/tobic.jpg";
import roast from "~/../public/img/roast.jpg";
import trump from "~/../public/img/tv.jpg";
import dd from "~/../public/img/rocket.jpeg";
import handcoin from "~/../public/img/ott.jpg";
import email from "~/../public/img/email.png";


const rotatingWords = ["From Ottawa Valley.", "To Tay Valley."];
export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);


  // Word rotation effect (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
        <img src={logo} alt="The Valleywag Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>THE VALLEYWAG</h4>
            <h1>
               <span className={`${fadeOut ? "fade-out" : "fade-in"}`}>
                {rotatingWords[index]}
              </span>
            </h1>
            <p>Sign up for news from a locals perspective.</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Subscribe</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
      </div>
      <div className="inner-content2">
        <h2>Enjoy our <span>free newsletter</span></h2>
        <Link to="#"><p>The Valleywag delivers the weekly news from a locals perspective. There's really nothing else like it in the world. Subscribe to see for yourself.</p></Link>
      </div>
      <div className="inner-content3">
        <div className="box">
          <img src={handcoin} />
        </div>
        <div className="box">
          <img src={dd} />
        </div>
        <div className="box">
          <img src={trump} />
        </div>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox daily.</h3>
            <p>Read by people who usually don't take themselves too seriously.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={tobi} />
          <h1>One weekly newsletter</h1>
          <p>The internet moves fast so we move slow.</p>
        </div>
        <div className="box">
          <img src={roast} />
          <h1>Poasts that roast</h1>
          <p>We don't make the rules, we just break'm.</p>
        </div>
        <div className="box">
          <img src={chill} />
          <h1>No bad vibes</h1>
          <p>Hot steaks and scroll-stopping takes.</p>
        </div>
      </div>
      <div className="btn">
        <Link to="#" className="pricebtn">
            Sign up for free
      </Link>
      </div>
<div className="footer">
  <img src={logo} alt="Logo" />
<div className="footer-top">
  <div className="footer-signup">
    <p>Subscribe to The Valleywag.</p>
    <form method="post" action="https://app.jeffamzn.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Sign up</button>
      </div>
      <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
      <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
      <input type="hidden" name="nonce" />
    </form>
  </div>
  
<div className="footer-links">
  <div className="column">
    <h4>Company</h4>
    <Link to="#">Home</Link>
  </div>
  <div className="column">
    <h4>Newsletters</h4>
    <a title="The Valleywag Newsletter" href="https://www.thevalleywag.com">The Valleywag</a>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
  <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>
  <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
  </div>
  <div className="footer-social">
  <a href="mailto:hey@thevalleywag.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</div>
    </div>
  );
}