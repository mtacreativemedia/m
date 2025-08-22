import React from 'react';
import Hero from './components/Hero';
import InvitationDetails from './components/InvitationDetails';
import Countdown from './components/Countdown';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-center">
      <Hero />
      <InvitationDetails />
      <Countdown />
      <RSVPForm />
      <Footer />
    </div>
  );
}

export default App;