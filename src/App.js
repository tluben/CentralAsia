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
  //TEDDY TODO review the state change
  TeddyToDo1Value: 1,
  //TEDDY TODO pass the next 3 values down to any component of your choice, maybe make a profile page for use with teddytodo3value
  //TEDDY TODO further expand state with more/ better data. If you implement correctly, edit state to whatever you want. success here is passing and using the values in one or more component
  TeddyToDo2Value: 2,
  TeddyToDo3Value: {
    name: "Teddy name to do",
    teddlyList: [
      {
        "TeddyToDo1Value" :  1,
        "TeddyToDo2Value" : 2
      },
      false,
      5
    ],
    teddyMoney: 100
  } 
}

//TEDDY TODO Introducing methods. Methods are functions associated with classes. In this case the calss is App.
isListView(listView){
  if(listView === true){
    // TEDDY TODO open console on http://localhost:3000/portfolio see "its working" comment all relevant code with "GREG TODO its working" for me to review
    console.log("its working")
    return true 
  } 
  console.log("its not working")
  return false
}

// GREG TODO 
// firstStateUpdateForTeddy(){
//   this.setState({TeddyToDo1Value: 2})
// }

// TEDDY TODO uncomment the below 3 functions and use them to display information on the subsequent screens

// TeddyToDo1(listView){
//   if(listView === true){
//     return true 
//   } 
//   return false
// }

// TeddyToDo2(listView){
//   if(listView === true){
//     return true 
//   } 
//   return false
// }

// TeddyToDo3(listView){
//   if(listView === true){
//     return true 
//   } 
//   return false
// }

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} TeddyToDo1Value={this.state.TeddyToDo1Value}/>

          {/* TEDDY TODO review this and then delete this whole line TeddyToDo1Value={this.state.TeddyToDo1Value} projects={this.state.projects} listView={this.state.listView} isListView={this.isListView()}*/}
          <Route exact path="/portfolio" component={()=><Portfolio
            firstStateUpdateForTeddy={this.firstStateUpdateForTeddy}
            TeddyToDo1Value={this.state.TeddyToDo1Value}
            projects={this.state.projects}
            listView={this.state.listView}
            isListView={this.isListView}
          />}/>
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
