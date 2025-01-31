import Image from "next/image";
import RoadMapF from "../public/roadmap final.svg";
import Logo from "../public/30TOL-logo.svg";
import Facebook from "../public/facebook.png";
import Instagram from "../public/instagram.png";
import X from "../public/x.png";

export default function RoadMap() {
    return (
        <div className="road-map">
            <div className="road-map-container">
                <Image
                    className="road-map-image"
                    src={RoadMapF}
                    height={552}
                    alt="Road map"
                />
                <div className="road-map-info">
                    <p className="road-map-title">
                        Your Transformation, One Step at a Time
                    </p>
                    <p className="road-map-message">
                        Fitness is a journey&mdash;every day brings
                        <br />
                        you closer to the life you want
                    </p>
                </div>
                <div className="frame">
                    <div className="week">
                        <div style={{ position: "absolute", top: 263, left: 90 }}>
                            <p id="number">1</p>
                            <div className="pulser"></div>
                        </div>
                        <svg style={{ left: 60 }} className="timeline" viewBox="0 0 801 54" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 50.8952L123.009 2.63477H801" fill="none" stroke="#FCD0D6" strokeWidth="5" />
                        </svg>
                        <div className="week-message" style={{ top: 353, left: 208 }}>
                            <p className="week-title">Week 1 &#8208; Relief &amp; Clarity&#58;</p>
                            <p className="week-description">
                                Feel the weight start to lift as you open up,
                                <br />
                                discovering clarity in a safe, non-judgmental
                                <br />
                                space.
                            </p>
                        </div>
                    </div>
                    <div className="week">
                        <div style={{ position: "absolute", top: 220, left: 810 }}>
                            <p id="number">2</p>
                            <div className="pulser"></div>
                        </div>
                        <svg style={{ top: 311, left: 773 }} className="timeline" viewBox="0 0 801 54" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 50.8952L123.009 2.63477H801" fill="none" stroke="#FCD0D6" strokeWidth="5" />
                        </svg>
                        <div className="week-message" style={{ top: 110, left: 928 }}>
                            <p className="week-title">Week 4 &#8208; Increase Resilience&#58;</p>
                            <p className="week-description">
                                Begin to notice your reactions shift—less
                                <br />
                                anxiety, more calmness, and tools to manage
                                <br />
                                stress.
                            </p>
                        </div>
                    </div>
                    <div className="week">
                        <div style={{ position: "absolute", top: 177, left: 1518 }}>
                            <p id="number">3</p>
                            <div className="pulser"></div>
                        </div>
                        <svg style={{ top: 268, left: 1487 }} className="timeline" viewBox="0 0 801 54" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 50.8952L123.009 2.63477H801" fill="none" stroke="#FCD0D6" strokeWidth="5" />
                        </svg>
                        <div className="week-message" style={{ top: 276, left: 1636 }}>
                            <p className="week-title">Week 8 &#8208; Lasting Positivity&#58;</p>
                            <p className="week-description">
                                Wake up with a renewed sense of well-being,
                                <br />
                                as you start to take control of your mental and
                                <br />
                                emotional health.
                            </p>
                        </div>
                    </div>
                    <div className="week">
                        <div style={{ position: "absolute", top: 134, left: 2230, paddingRight: 400 }}>
                            <p id="number">4</p>
                            <div className="pulser"></div>
                        </div>
                        <svg style={{ top: 225, left: 2201 }} className="timeline" viewBox="0 0 801 54" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 50.8952L123.009 2.63477H801" fill="none" stroke="#FCD0D6" strokeWidth="5" />
                        </svg>
                        <div className="week-message" style={{ top: 24, left: 2348 }}>
                            <p className="week-title">3 Months &amp; Beyond &#8208; Thriving&#58;</p>
                            <p className="week-description">
                                Live with confidence, peace, and joy as you
                                <br />
                                embrace the lasting impact of therapy on
                                <br />
                                every area of your life.
                            </p>
                        </div>
                    </div>
                    <div className="week">
                        <div id="last" style={{ position: "absolute", top: 199, left: 2945 }} className="pulser last"></div>
                    </div>
                </div>
            </div>
            <div className="road-map-bottom">
                <footer className="footer">
                    <div className="footer-top">
                        <Image
                            className="logo"
                            src={Logo}
                            height={50}
                            alt="Logo"
                        />

                        <div className="footer-right">
                            <nav className="footer-items">
                                <a href="/shop">Shop</a>
                                <a href="/contact-us">Contact Us</a>
                                <a href="/about">About</a>
                                <a href="/journal">Journal</a>
                                <a href="/custom">Custom</a>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="socials">
                            <Image
                                src={Facebook}
                                height={34.5}
                                alt="facebook"
                            />
                            <Image
                                src={Instagram}
                                height={34.5}
                                alt="instagram"
                            />
                            <Image
                                src={X}
                                height={34.5}
                                alt="x"
                            />
                        </div>
                        <div className="footer-right">
                            <nav className="footer-items">
                                <a href="/faq">FAQ&apos;s</a>
                                <a href="/returns">Returns</a>
                                <a href="/ordering">Ordering</a>
                                <a href="/shipping">Shipping</a>
                                <a href="/policies">Personalization Policies</a>
                            </nav>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <p>Copyright &copy; 2023 BOTOL. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}