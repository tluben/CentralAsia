import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import projects from "./data/portfolio.json"

class App extends React.Component {
state = {
  projects: projects,
  listView: false, 
}

isListView(listView){
    if(listView === true){
      return true 
    } 
    return false
}

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={()=><Portfolio projects={this.state.projects} listView={this.state.listView} isListView={this.isListView()}/>} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;

