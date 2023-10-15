import css from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={css.mainContainer}>
      <header className={css.header}>
        <Image
          src="/carp_travel_logo.svg"
          alt="Carp Travel Logo"
          width={61}
          height={34}
          priority
        />
        <nav className={css.headerNav}>
          <Link href="#" className={css.navLink}>
            About
          </Link>
          <Link href="#" className={css.navLink}>
            Services
          </Link>
          <Link href="#" className={css.navLink}>
            Career
          </Link>
          <Link href="#" className={css.navLink}>
            Gallery
          </Link>
          <Link href="#" className={css.navLink}>
            Contacts
          </Link>
        </nav>
      </header>
      <section className={css.heroSection}>
        <div>
          <div className={css.titleContainer}>
            <h1 className={css.title}>
              <span className={css.titleSpan}>Uncover</span> Carpathian’s
              Secrets
            </h1>
          </div>
          <p className={css.places}>
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div>
          <h2 className={css.secondTitle}>
            <span className={css.titleSpan}>7</span>Days
          </h2>
          <span className={css.titleText}>journey</span>
          <p className={css.text}>
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
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
    </div>
  );
};

export default Home;
