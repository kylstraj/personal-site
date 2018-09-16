import React from 'react';
import { Link } from 'react-router-dom';
import SecondaryPage from '../SecondaryPage';

const AboutPage = () => (
  <SecondaryPage title="Hi, I'm Jimmy.">
    <p>
      I'm a computer programmer. My interests include web development, machine learning, low-latency computing, and Carolina basketball. 
      I used to be a lawyer, and I'm still licensed to make citizens' arrests. 
      I live in Chicago with my wife, Amy, and my sons, Abe and Saul.
    </p>
    <p>
      I made this website with React and Webpack. 
      You can see some other things I've made on my <Link to="/projects">projects page</Link> and my <a href="https://github.com/kylstraj">GitHub</a>.
    </p>
  </SecondaryPage>
);

export default AboutPage;
