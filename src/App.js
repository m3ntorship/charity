import React, { useEffect, useState } from 'react';
import { charityAPI } from './clients';
import Logo from './components/Logo';
import MainContact from './components/MainContact';
import FeaturedBanner from './components/FeaturedBanner';
import { ContactInfo } from './components/ContactInfo';

class App extends React.Component {
  render() {
    return (
      <header>
        <section className="logo-section py-8">
          <div className="container py-2 flex items-center justify-between">
            <Logo />
            <MainContact />
            <FeaturedBanner />
            <ContactInfo />
          </div>
        </section>
      </header>
    );
  }
}

const AppHooks = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    charityAPI('/tests').then(({ data: tests }) => {
      setTests(tests);
    });
  }, []);

  return tests.map(({ name }) => <div key={name}>{name}</div>);
};

export { AppHooks, App };
