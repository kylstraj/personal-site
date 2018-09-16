import React, { Component } from 'react';
import HomePage from './components/HomePage';
import SecondaryPage from './components/SecondaryPage';
import './App.css';

class AboutPage extends Component {
  render() {
    let title = "Hi, I'm Jimmy Kylstra.";
    return (
      <SecondaryPage 
        title={title} 
        linkFunction={this.props.linkFunction}
      >
        <p>I'm a computer programmer. My interests include web development, machine learning, low-latency computing, and Carolina basketball. I used to be a lawyer, and I'm still licensed to make citizens' arrests. I live in Chicago with my wife, Amy, and my sons, Abe and Saul.</p>
        <p>I made this website with React and Webpack. You can see some other things I've made on my <Link text="projects page" pageIndex={1} linkFunction={this.props.linkFunction}/> and my <a href="https://github.com/kylstraj">GitHub</a>.</p>
      </SecondaryPage>
    );
  }
}

class ResumePage extends Component {
  render() {
    let title = "Resume";
    return (
      <SecondaryPage title={title}>
        <div>
          <embed src="resume.pdf"></embed>
        </div>
      </SecondaryPage>
    );
  }
}

class ProjectsPage extends Component {
  render() {
    let title = "Projects";
    return (
      <SecondaryPage title={title}>
        <p>Here are some projects I've worked on.</p>
      </SecondaryPage>
    );
  }
}

class ContactPage extends Component {
  render() {
    let title = "Contact Jimmy";
    return (
      <SecondaryPage title={title}>
        <p>This is where a contact box will go.</p>
      </SecondaryPage>
    );
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
    };
  }

  toggleListVisible() {
    this.setState({listVisible: !this.state.listVisible});
  }

  render() {
    return (
      <div id="menu">
        <MenuIcon clickHandler={() => this.toggleListVisible()}/>
        <MenuList 
          visible={this.state.listVisible}
          selectFunction={this.props.selectFunction}
          pages={this.props.pages}
        />
      </div>
    );
  }
}

class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <span className={this.state.selected ? "menu-icon selected" : "menu-icon"}
        onClick={() => {
          this.props.clickHandler();
          this.setState({selected: !this.state.selected});
        }}>
        <div></div>
        <div></div>
        <div></div>
      </span>
    );
  }
}

class MenuList extends Component {
  renderLink(index) {
    return (
      <NavLink key={index}
      value={this.props.pages[index].title} 
      onClick={this.makeOnClick(index)}/>
    );
  }

  makeOnClick(index) {
    let onClick = function() {
      this.props.selectFunction(index);
    };
    onClick = onClick.bind(this);
    return onClick;
  }

  render() {
    let links = [];
    for (let pageIndex in this.props.pages)
      links.push(this.renderLink(pageIndex));

    return (
      <span className={this.props.visible ? "visible" : "invisible"}>
        {links}
      </span>
    );
  }
}

class NavLink extends Component {
  render() {
    return (
      <span className="nav-link" onClick={this.props.onClick}>{this.props.value}</span>
    );
  }
}

class Link extends Component {
  render() {
    return (
      <span className="text-link" 
        onClick={() => this.props.linkFunction(this.props.pageIndex)}>
        {this.props.text}
      </span>
    );
  }
}

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
        {this.renderPage(this.state.pageIndex)}
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
      <div className="App">
        <Face images={this.state.images} msPerFrame={15000}/>
        <Body/>
      </div>
    );
  }
}

export default App;
