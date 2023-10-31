import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { StyledEngineProvider } from '@mui/material';
import AdminHead from '@/components/header/adminHead';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import AdminNav from '@/components/forms/AdminNav';
import { Provider } from 'react-redux';
import { store,persistor } from '@/app/auth/store/Store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Script from "next/script";
import Head from "next/head";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';


export default function App({ Component, pageProps, router }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const isTermsAndConditionsPage = router.pathname === '/terms';
  const isPageNoteFoundPage = router.pathname === '/404';
  const isPolicyPage = router.pathname === '/policy';
  return (
    <>
      {isClient && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Head>
        {/* Google Tag Manager script */}
        <meta name="google-site-verification" content="huEWaoqGqSrFbomHZRLng9ZDT1EKPD0HNrpadEBod_Y" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NFWC77493Q"
      />
       <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NFWC77493Q');
          `,
        }}
      />
      <Script
          id="schema-breadcrumblist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: `
                    {
                      "@context": "https://schema.org/", 
                      "@type": "BreadcrumbList", 
                      "itemListElement": [{
                        "@type": "ListItem", 
                        "position": 1, 
                        "name": "Home",
                        "item": "https://www.foodgienic.com/"  
                      },{
                        "@type": "ListItem", 
                        "position": 2, 
                        "name": "Our Services",
                        "item": "https://www.foodgienic.com/main/services"  
                      },{
                        "@type": "ListItem", 
                        "position": 3, 
                        "name": "About",
                        "item": "https://www.foodgienic.com/main/about"  
                      },{
                        "@type": "ListItem", 
                        "position": 4, 
                        "name": "Pricing",
                        "item": "https://www.foodgienic.com/main/pricing"  
                      }]
                    }
                  `,
        }}
      />

    <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Foodgienic",
              "url": "https://foodgienic.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://foodgienic.com/main/services{search_term_string}Services",
                "query-input": "required name=search_term_string"
              }
            }
          `,
        }}
      />

            <StyledEngineProvider injectFirst>
              {Component.getLayout ? (
                <>
                  <AdminHead setIsOpen={setIsOpen} isOpen={isOpen}/>
                  <div className='bg-grey-light min-w-full p-4 mb-0'>
                    <div className='main-content foodposition flex items-start w-full columns-2 gap-x-4 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap'>
                      {/* {isOpen && <AdminNav />} */}
                      <div className={`slidebarmain ${isOpen ? 'activesibebar' : ''}`}>
                        <AdminNav />
                      </div>
                      <Component {...pageProps} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {isPageNoteFoundPage ? null : <Header />}
                  <Component {...pageProps} />
                </>
              )}
              {isPageNoteFoundPage ? null : <Footer />}
            </StyledEngineProvider>
          </PersistGate>
        </Provider>
      )}
      <ToastContainer />
    </>
  );
}