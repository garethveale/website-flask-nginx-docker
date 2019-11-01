import React from 'react';
import { HomepageHeading } from './HomepageHeading';
import { ThumbnailRow } from './ThumbnailRow';
import { Footer } from '../common/Footer';

class Home extends React.Component {
    render() {
      return (
        <div>
          <HomepageHeading />
          <ThumbnailRow />
          <br />
          <Footer />
        </div>
      )
    }
}

export default Home;