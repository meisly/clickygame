import React from "react";
import Header from "./components/Header"
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./friends.json";
import "./App.css";


class App extends React.Component {



  state = {
    all: this.checkLevel(images, this.level),
    clicked: [],
    score: 0,
    level: 1
  };

  checkLevel(images, level) {
    images = this.randomizeImages(images);
    switch (level) {
      case 6:
        return images.slice(0, 36);
      case 5:
        return images.slice(0, 24);
      case 4:
        return images.slice(0, 16);
      case 2:
        return images.slice(0, 9);
      case 3:
        return images.slice(0, 12);
      case 1:
      default:
        return images.slice(0, 4);
    }
  }
  render() {
    return (
      <div>
        <Header score={this.state.score} level={this.state.level} />
        <Wrapper total={this.state.all.length}>
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
    if (this.state.clicked.includes(id)) {
      alert("dang, y'all screwed up now")
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
      if ( newScore === this.state.all.length && this.state.level === 6){
        alert("Congratulations! You won a free Ipad Mini!  JK, but you did win the game");
        this.initializeGame();
      }
      if (newScore === this.state.all.length) {
        
        this.nextLevel();
      }
    }
  }
  randomizeImages (imageArr) {
    let array = [...imageArr];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  nextLevel = () => {
    let newLevel = this.state.level + 1;
    this.setState({
      all: this.checkLevel(images, newLevel),
      level: newLevel,
      score: 0,
      clicked: []
    });
  }
  initializeGame = () => {
    this.setState({
      all: this.checkLevel(images, 1),
      clicked: [],
      score: 0,
      level: 1
    })
  }

}

export default App;
