import css from "./page.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Services from "@/components/Services";
import "./globals.css";

const Home = () => {
  return (
    <div>
      <Layout background="/home_hero.jpg" height={736}>
        <Header></Header>
        <section className={css.heroSection}>
          <div>
            <div className={css.titleContainer}>
              <h1 className="leading-tight font-thin text-white uppercase tracking-tight">
                <span className={css.titleSpan}>Uncover</span> Carpathian’s
                Secrets
              </h1>
            </div>
            <p className={css.places}>
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
          </div>
          <div>
            <h1 className="leading-none font-thin text-white uppercase tracking-wide">
              <span className={css.titleSpan}>7</span>Days
            </h1>
            <span className={css.titleText}>journey</span>
            <p className={css.text}>
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <button className={css.button}>
              <Image
                src="/button_left.svg"
                alt="Button left"
                width={44}
                height={71}
                priority
              />
              Join now
              <Image
                src="/button_right.svg"
                alt="Button left"
                className={css.btnLeftBorder}
                width={44}
                height={71}
                priority
              />
            </button>
          </div>
        </section>
      </Layout>
      <Layout background="/about.jpg" height={824}>
        <About></About>
      </Layout>
      <Services></Services>
    </div>
  );
};

export default Home;
