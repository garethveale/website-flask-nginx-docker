import React from 'react';
import { HomepageHeading } from './HomepageHeading';
import { ThumbnailRow } from './ThumbnailRow';
import { About } from './About';
import { Footer } from '../common/Footer';

class Home extends React.Component {
    render() {
      return (
        <div>
          <HomepageHeading />
          <About />
          <ThumbnailRow />
          <br />
          <Footer />
        </div>
      )
    }
}

export default Home;