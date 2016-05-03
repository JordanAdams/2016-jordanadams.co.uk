import 'whatwg-fetch';
import React from 'react';
import ApiBrowser from '../components/ApiBrowser';

const Home = ({
  response,
  onSendRequest
}) => {
  return (
    <div>
      <header>
        <img src="/dist/images/avatar.jpg" />
        <h1>Jordan Adams</h1>
        <p>100% Organic Developer. Made in Britain.</p>
      </header>

      <section className="social-links">
        <a href="http://twitter.com/jordancalluma">Twitter</a>
        <a href="http://github.com/jordanadams">Github</a>
        <a href="https://www.linkedin.com/in/jordancallumadams">Linkedin</a>
      </section>

      <ApiBrowser response={response} onSendRequest={onSendRequest} />
    </div>
  );
};

Home.displayName = 'Home';
Home.propTypes = {
  response: React.PropTypes.shape({
    status: React.PropTypes.number,
    body: React.PropTypes.string
  }),
  onSendRequest: React.PropTypes.func
};

export default Home;
