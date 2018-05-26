import React, { Component } from 'react';
import './App.css';

var PAGES = {
    0: {title: "Home", content: (<HomePage/>)},
    1: {title: "About Jimmy", content: (<AboutPage/>)},
    2: {title: "Projects", content: (<ProjectsPage/>)},
    3: {title: "Resume", content: (<ResumePage/>)},
    4: {title: "Contact Jimmy", content: (<ContactPage/>)}
  };

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
    let title = "Projects";
    let content = (
      <div>
        <p>Here are some projects I've worked on.</p>
      </div>
    );
    return (
      <div>
        <SecondaryPage title={title} content={content}/>
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
      <div>
        <MenuIcon clickHandler={() => this.toggleListVisible()}/>
        <MenuList visible={this.state.listVisible}
          selectFunction={this.props.selectFunction}/>
      </div>
    );
  }
}

class MenuIcon extends Component {
  render() {
    return (
      <span className="menu-icon" onClick={() => this.props.clickHandler()}>
        <div></div>
        <div></div>
        <div></div>
      </span>
    );
  }
}

class MenuList extends Component {
  renderLink(index) {
    return (<NavLink value={PAGES[index].title} onClick={this.makeOnClick(index)}/>);
  }

  makeOnClick(index) {
    return function() {
      this.props.selectFunction(index);
    }
  }

  render() {
    let links = [];
    for (let pageIndex in PAGES)
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
      <div className="nav-link" onClick={this.props.onClick}>{this.props.value}</div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
    this.state = {
      pageIndex: 0
    };
  }

  renderPage(index) {
    return PAGES[index].content;
  }

  render() {
    return (
      <article onClick={() => this.flip()}>
        <Menu selectFunction={this.setPage}/>
        {this.renderPage(this.state.pageIndex)}
      </article>
    );
  }

  flip() {
    if (this.state.pageIndex >= Object.keys(PAGES).length - 1)
      this.setState({pageIndex: 0});
    else
      this.setState({pageIndex: this.state.pageIndex + 1});
  }

  setPage(index) {
    this.setState({pageIndex: index});
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
