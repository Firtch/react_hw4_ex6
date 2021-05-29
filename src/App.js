import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  // 0 = 0
  // 1 = x
  // 2 = пусто
  field = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];

  state = {
    xTurn: true,
  };

  onClickButton = (e) => {    
    const pos = e.target.id.split(",")
    const posX = pos[0];
    const posY = pos[1];
    
    if(this.field[parseInt(pos[0])][parseInt(pos[1])] >= 2) {
      let xTurn = this.state.xTurn;
      if(this.state.xTurn) {
        this.field[posX][posY] = 1;
        e.target.innerText = "X";
        xTurn = !xTurn;        
      } else {
        this.field[posX][posY] = 0;
        e.target.innerText = "0";
        xTurn = !xTurn;
      }

      console.log(this.field);

      if(this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2] && this.field[0][0] < 2 ||
        this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2] && this.field[1][0] < 2 ||
        this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2] && this.field[2][0] < 2 ||
        this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0] && this.field[0][0] < 2 ||
        this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1] && this.field[0][1] < 2 ||
        this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2] && this.field[0][0] < 2 || 
        this.field[2][0] === this.field[1][1] && this.field[2][0] === this.field[2][0] && this.field[2][0] < 2) {
          alert(this.state.xTurn ? "X winner" : "0 winner");
          window.location.reload(false);
        }
      
      this.setState({xTurn});
      
      
    }
  
  
    
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>
              <button id="0,0" onClick={this.onClickButton}></button>
            </td>
            <td>
              <button id="0,1" onClick={this.onClickButton} />
            </td>
            <td>
              <button id="0,2" onClick={this.onClickButton} />
            </td>
          </tr>
          <tr>
            <td>
              <button id="1,0"  onClick={this.onClickButton} />
            </td>
            <td>
              <button id="1,1"  onClick={this.onClickButton} />
            </td>
            <td>
              <button id="1,2"  onClick={this.onClickButton} />
            </td>
          </tr>
          <tr>
            <td>
              <button id="2,0"  onClick={this.onClickButton} />
            </td>
            <td>
              <button id="2,1"  onClick={this.onClickButton} />
            </td>
            <td>
              <button id="2,2"  onClick={this.onClickButton} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
