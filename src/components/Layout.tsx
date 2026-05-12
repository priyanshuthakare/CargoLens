import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navigation from './Navigation';
import Footer from './Footer';
import { Databuddy } from '@databuddy/sdk/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <Databuddy
        clientId={import.meta.env.VITE_DATABUDDY_CLIENT_ID || "a685c18e-c702-4839-b963-ccec1436c7f6"}
        trackInteractions={true}
        trackWebVitals
        trackErrors
      />
    </>
  );
}
