import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import { ReactLenis } from 'lenis/react'
import { ParallaxProvider } from 'react-scroll-parallax';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* <title>MUHAJIREEN Consultant Ltd</title> */}
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ParallaxProvider>
            <ReactLenis root>
              <Component {...pageProps} />
            </ReactLenis>
          </ParallaxProvider>
        </PersistGate>
      </Provider>
      <ToastContainer />
    </div>

  )
}

export default MyApp
