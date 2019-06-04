import React, { Component } from "react"
import Modal from "./modal";
class TheGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startI: 1,
      startJ: 1,
      endI: 0,
      endJ: 1,
      keyPressed: "down",
      foodI: 4,
      foodJ: 4,
      points:0
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keydown, false)
    let gameArray = Array(20)
      .fill(0)
      .map(x => Array(20).fill(0))
    let direction = Array(20)
      .fill(0)
      .map(x => Array(20).fill(null))
    gameArray[this.state.startI][this.state.startJ] = 1
    gameArray[this.state.foodI][this.state.foodJ] = 2
    direction[this.state.startI][this.state.startJ] = "down"
    direction[this.state.endI][this.state.endJ] = "down"
    gameArray[this.state.endI][this.state.endJ] = 1
    this.setState({ ...this.state, gameArray: gameArray, direction: direction })
    setInterval(this.onEverySecond, 200)
  }
  onEverySecond = () => {
    if (!this.state.dead) {
      let newDirection = this.state.direction
      newDirection[this.state.startI][this.state.startJ] = this.state.keyPressed
      let dontGoHere = newDirection[this.state.startI][this.state.startJ]
      let lastDirection = this.state.direction[this.state.endI][this.state.endJ]
      let newGameArray = this.state.gameArray

      if (this.state.keyPressed == "left") {
        this.setState({
          ...this.state,
          startJ: this.state.startJ == 0 ? 19 : this.state.startJ - 1,
          lastPressed : "left"
        })
      } else if (this.state.keyPressed == "right") {
        this.setState({
          ...this.state,
          startJ: this.state.startJ == 19 ? 0 : this.state.startJ + 1,
          lastPressed : "right"
        })
      } else if (this.state.keyPressed == "down") {
        this.setState({
          ...this.state,
          startI: this.state.startI == 19 ? 0 : this.state.startI + 1,
          lastPressed : "down"
        })
      } else if (this.state.keyPressed == "up" ) {
        this.setState({
          ...this.state,
          startI: this.state.startI == 0 ? 19 : this.state.startI - 1,
          lastPressed: "up"
        })
      }

      if (
        this.state.gameArray[this.state.startI][this.state.startJ] == 2
      ) {

        this.state.gameArray[this.state.startI][this.state.startJ] = 0
        let newGameArray1 = this.state.gameArray
        let i = Math.floor(Math.random()*20);
        let j = Math.floor(Math.random()*20);
        while(newGameArray1[i][j] === 1){
        i = Math.floor(Math.random()*20);
        j = Math.floor(Math.random()*20);
        
}       newGameArray1[i][j] = 2
 this.setState({...this.state, gameArray: newGameArray1, points :this.state.points+1})
      } else {
        newDirection[this.state.endI][this.state.endJ] = null

        newGameArray[this.state.endI][this.state.endJ] = 0

        if (lastDirection == "left") {
          this.setState({
            ...this.state,
            endJ: this.state.endJ == 0 ? 19 : this.state.endJ - 1,
          })
        } else if (lastDirection == "right") {
          this.setState({
            ...this.state,
            endJ: this.state.endJ == 19 ? 0 : this.state.endJ + 1,
          })
        } else if (lastDirection == "down") {
          this.setState({
            ...this.state,
            endI: this.state.endI == 19 ? 0 : this.state.endI + 1,
          })
        } else if (lastDirection == "up") {
          this.setState({
            ...this.state,
            endI: this.state.endI == 0 ? 19 : this.state.endI - 1,
          })
        }
      }
      if (newGameArray[this.state.startI][this.state.startJ] == 1) {
        document.getElementById("open-modal").style.opacity = 1;
        document.getElementById("open-modal").style.pointerEvents = "auto";
        
        this.setState({ ...this.state, dead: true })
      } else 
      {newGameArray[this.state.startI][this.state.startJ] = 1

      this.setState({
        ...this.state,
        gameArray: newGameArray,
        direction: newDirection,
      })}
    }
  }
  reset = () => {
    console.log("resetting")
    document.getElementById("open-modal").style.opacity = 0;
    document.getElementById("open-modal").style.pointerEvents = "none";
        
    let newState = {
      dead:false,
      startI: 1,
      startJ: 1,
      endI: 0,
      endJ: 1,
      keyPressed: "down",
      foodI: 4,
      foodJ: 4,
      points:0

    }
    document.addEventListener("keydown", this.keydown, false)
    let gameArray = Array(20)
      .fill(0)
      .map(x => Array(20).fill(0))
    let direction = Array(20)
      .fill(0)
      .map(x => Array(20).fill(null))
    gameArray[newState.startI][newState.startJ] = 1
    gameArray[newState.foodI][newState.foodJ] = 2
    direction[newState.startI][newState.startJ] = "down"
    direction[newState.endI][newState.endJ] = "down"
    gameArray[newState.endI][newState.endJ] = 1
    this.setState({ ...newState, gameArray: gameArray, direction: direction })
  }
  keydown = e => {
    if (e.key === "ArrowLeft") {
      if(this.state.lastPressed !== "right")
      this.setState({ ...this.state, keyPressed: "left" })
    } else if (e.key === "ArrowRight") {
      if(this.state.lastPressed !== "left")
      this.setState({ ...this.state, keyPressed: "right" })
    } else if (e.key === "ArrowDown") {if(this.state.lastPressed !== "up")
      this.setState({ ...this.state, keyPressed: "down" })
    } else if (e.key === "ArrowUp") {if(this.state.lastPressed !== "down")
      this.setState({ ...this.state, keyPressed: "up" })
    }
  }
  render() {
    return (
      <div>
        <Modal score={this.state.points} reset={this.reset}/>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>{Array(20)
          .fill(0)
          .map((x, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "row" }}>
              {Array(20)
                .fill(0)
                .map((x, j) => (
                  <div
                    key={j}
                    style={{
                      height: "2.1em",
                      width: "2.1em",
                      backgroundColor: this.state.gameArray
                        ? i==this.state.startI && j == this.state.startJ?"#7f53ac":this.state.gameArray[i][j] == 1
                          ? "#8a2be2"
                          : this.state.gameArray[i][j] == 2
                          ? "#657ced"
                          : "rgba(255, 255, 255, 0.5)"
                        : "green",
                      border: "2px solid rgba(255, 255, 255, 0.1)",
                      animation: this.state.gameArray?this.state.gameArray[i][j]==2?"smallbig 1s infinite":"none":"none"
                    }}
                  >
                  </div>
                ))}
            </div>
          ))}</div>
      </div>
    )
  }
}

export default TheGame
