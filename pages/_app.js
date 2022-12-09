import Navebar from "../components/Navebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navebar></Navebar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
