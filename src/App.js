import React, { Component } from 'react';
import './App.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <MainTitle text="Jimmy Kylstra"/>
      </div>
    );
  }
}

class SecondaryPage extends Component {
  render() {
    return(
      <div>
        <PageTitle text={this.props.title}/>
        {this.props.content}
      </div>
    );
  }
}

class AboutPage extends Component {
  render() {
    let title = "About Jimmy";
    let content = (
      <div>
        <p>Here is some content about me.</p>
        <p>Content content content.</p>
      </div>
    );
    return (
      <div>
        <SecondaryPage title={title} content={content}/>
      </div>
    );
  }
}

class ResumePage extends Component {
  render() {
    let title = "Resume";
    let content = (
      <div>
        <p>This is where my resume will go.</p>
      </div>
    );
    return (
      <div>
        <SecondaryPage title={title} content={content}/>
      </div>
    );
  }
}

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <p>Projects page</p>
      </div>
    );
  }
}

class ContactPage extends Component {
  render() {
    let title = "Contact Jimmy";
    let content = (
      <div>
        <p>This is where a contact box will go.</p>
      </div>
    );
    return (
      <div>
        <SecondaryPage title={title} content={content}/>
      </div>
    );
  }
}

class MainTitle extends Component {
  render() {
    return (
      <h1 id="main-title">{this.props.text}</h1>
    );
  }
}

class PageTitle extends Component {
  render() {
    return (
      <h1 id="page-title">{this.props.text}</h1>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  pageDict = {
    0: (<HomePage/>),
    1: (<AboutPage/>),
    2: (<ResumePage/>),
    3: (<ContactPage/>)
  };

  renderPage(index) {
    return this.pageDict[index];
  }

  render() {
    return (
      <article onClick={() => this.flip()}>
        {this.renderPage(this.state.page)}
      </article>
    );
  }

  flip() {
    if (this.state.page >= Object.keys(this.pageDict).length - 1)
      this.setState({page: 0});
    else
      this.setState({page: this.state.page + 1});
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
      <div className="App">
        <Face images={this.state.images} msPerFrame={15000}/>
        <Body/>
      </div>
    );
  }
}


export default App;
