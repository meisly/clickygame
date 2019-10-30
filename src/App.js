import React from "react";
import Header from "./components/Header"
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {


  state = {
    all: friends,
    clicked: [],
    score: 0
  };

  render() {
    return (
      <div>
      <Header score={this.state.score}/>
      <Wrapper>
        <h1 className="title">Click each image once and only once to win!</h1>
        {this.state.all.map(friend => (
          <ImageCard
            name={friend.name}
            image={friend.image}
            handleClick={() => this.handleClick(friend.id)}
          />
        )
        )}

      </Wrapper>
      </div>
    )
  };
  handleClick = (id) => {
    if (this.state.clicked.includes(id)){
      alert("dang, y'all fucked up now")
      this.initializeGame();
    } else {
      let randomizedImg = this.randomizeImages(this.state.all);
      let newClicked = this.state.clicked;
      let newScore = this.state.score + 1;

      newClicked.push(id);

      this.setState({
        all: randomizedImg,
        clicked: newClicked,
        score: newScore
      });
      if(this.state.score === this.state.all.length){
        alert("Congratulations!  You won a free iphone")
      }
    }
  }
  randomizeImages = (imageArr)=>{
    let array = imageArr;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  initializeGame = () =>{
    this.setState({
      all: friends,
      clicked: [],
      score: 0
    })
  }
}

export default App;
