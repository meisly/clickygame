import React from "react";
import Header from "./components/Header"
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./friends.json";
import "./App.css";

class App extends React.Component {


  state = {
    all: images,
    clicked: [],
    score: 0
  };

  render() {
    return (
      <div>
      <Header score={this.state.score}/>
      <Wrapper>
        <h1 className="title">Click each image once and only once to win!</h1>
        {this.state.all.map(image => (
          <ImageCard
            key={image.id}
            image={image.image}
            handleClick={() => this.handleClick(image.id)}
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
      if(newScore === this.state.all.length){
        alert("Congratulations!  You won a free iphone")
        this.initializeGame();
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
      all: images,
      clicked: [],
      score: 0
    })
  }
}

export default App;
