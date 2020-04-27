import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import projects from "./data/portfolio.json"
import AnimalPage from "./components/pages/AnimalPage";
import HuntCard from "./components/pages/HuntCard";
import HuntPage from "./components/pages/HuntPage"


class App extends React.Component {
state = {
  // Hunts: {
  //   ibex:["ibex","aa"],
  //   argali:["argali","bb"],
  //   redStag:["stag","ccc"]
  // },
  Hunts: [
    {
      animalName: "ibex",
      description: "hello world",
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.worldsportfishing.com%2Fwp-content%2Fuploads%2F2012%2F02%2Fibex.jpg&f=1&nofb=1"
    },
    {
      animalName: "stag",
      description: "hello world 2",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthepayereyes.com%2Fstore%2Fwp-content%2Fuploads%2F2019%2F01%2Fredstag.jpg&f=1&nofb=1"
    },
    {
      animalName: "argali",
      description: "hello world 3",
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsasscer.files.wordpress.com%2F2014%2F05%2Fargali_sheep.jpg&f=1&nofb=1"
    },
  ],
  animals: ["ibex","stag","deer"],

  projects: projects,
  listView: false,
  //TEDDY TODO review the state change
  TeddyToDo1Value: 1,
  //TEDDY TODO pass the next 3 values down to any component of your choice, maybe make a profile page for use with teddytodo3value
  //TEDDY TODO further expand state with more/ better data. If you implement correctly, edit state to whatever you want. success here is passing and using the values in one or more component
  TeddyToDo2Value: 2,
  TeddyToDo3Value: {
    lname: "Teddy name to do",
    sports:["mma","tennis"],
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
//This line works
firstStateUpdateForTeddy = () => {
  //this line doesnt
//firstStateUpdateForTeddy(){
  console.log("State function")
  this.setState({TeddyToDo1Value: 2})
}

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
          <Route exact path="/animalpage" component={AnimalPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={()=> <About 
            TeddyToDo2Value={this.state.TeddyToDo2Value}
            TeddyToDo3Value={this.state.TeddyToDo3Value}
            />}/>

          {/* TEDDY TODO review this and then delete this whole line TeddyToDo1Value={this.state.TeddyToDo1Value} projects={this.state.projects} listView={this.state.listView} isListView={this.isListView()}*/}
          <Route exact path="/portfolio" component={()=><Portfolio
            firstStateUpdateForTeddy={this.firstStateUpdateForTeddy}
            TeddyToDo1Value={this.state.TeddyToDo1Value}
            projects={this.state.projects}
            listView={this.state.listView}
            isListView={this.isListView}
          />}/>
          <Route path="/contact" component={Contact} />
          <Route path="/hunttype" component={() =><HuntPage
            Hunts={this.state.Hunts}
          />}/>
        </div>
      </Router>
    );
  }
}

export default App;

