import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondaryPage from './components/SecondaryPage';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Menu from './components/Menu';
import './App.css';

class Body extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
    this.PAGES = [
      {title: "About", content: (<AboutPage linkFunction={this.setPage}/>)},
      {title: "Projects", content: (<ProjectsPage/>)},
      {title: "Resume", content: (<ResumePage/>)},
      {title: "Contact", content: (<ContactPage/>)}
    ];
    this.state = {
      pageIndex: 0,
      page: {title: "Home Page", content: (<HomePage/>)}
    };
  }

  renderPage(index) {
    return this.state.page.content;
  }

  render() {
    return (
      <article> 
        <Menu selectFunction={this.setPage} pages={this.PAGES}/>
        <Switch>
          <Route
            path="/about"
            component={AboutPage}
          />
          <Route
            path="/projects"
            component={ProjectsPage}
          />
          <Route
            path="/resume"
            component={ResumePage}
          />
          <Route
            path="/contact"
            component={ContactPage}
          />
          <Route
            path="/"
            component={HomePage}
          />
          <Route
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </article>
    );
  }

  setPage(index) {
    this.setState({pageIndex: index,
                   page: this.PAGES[index]});
  }
}

class Face extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.images[0],
      imageIdx: 0,
      numImages: this.props.images.length,
      timeout: setTimeout(() => this.flip(), this.props.msPerFrame)
    };
  }

  flip() {
    let newIdx = this.state.imageIdx + 1;
    if (newIdx >= this.state.numImages)
      newIdx = 0;
    this.showImage(newIdx);
  }

  showImage(idx) {
    clearTimeout(this.state.timeout);
    this.setState({
      image: this.props.images[idx],
      imageIdx: idx,
      numImages: this.state.numImages,
      timeout: setTimeout(() => this.flip(), this.props.msPerFrame)
    });
  }

  render() {
    return (
      <div id="face-panel">
        <img src={this.state.image} onClick={() => this.flip()} alt="Alternate text"></img>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["jimmy-amy-abe-cropped.jpg",
               "sibs.jpg",
               "Hawaii.jpg"]
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Face images={this.state.images} msPerFrame={15000}/>
          <Body/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
