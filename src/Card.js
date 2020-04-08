import React from 'react';

const lockCombo = ["1", "2", "3", "4"];
const success = "Success! You've opened lock number 1!";
const failure = "Please try again!";



class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posOne: "",
            posTwo: "",
            posThree: "",
            posFour: ""
        }
    }

    checkAnswer = (lockInputArr, lockAnswerArr) => {
        for (let i = 0; i < lockInputArr.length; i++) {
            if (lockInputArr[i] !== lockAnswerArr[i]) {
                return false
            }
        }
        return true
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const position = target.id;

        if (position === "1") {
            this.setState({
                posOne: value
            });
        } else if (position === "2") {
            this.setState({
                posTwo: value
            });
        } else if (position === "3") {
            this.setState({
                posThree: value
            });
        } else if (position === "4") {
            this.setState({
                posFour: value
            });
        }

        const checkValues = (value) => {
            if (value !== "") {
                return true
            } else {
                return false
            }
        }

        // this returns an array of the values in this.state
        const lockInputArr = Object.values(this.state);

        if (lockInputArr.every(checkValues)) {
            const isCombinationCorrect = this.checkAnswer(lockInputArr, lockCombo);
            if (isCombinationCorrect === true) {
                alert(success);
            } else {
                alert(failure);
            }
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>
                    <span className="bg-light-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posOne}</span>
                    <span className="bg-light-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posTwo}</span>
                    <span className="bg-light-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posThree}</span>
                    <span className="bg-light-green dib br3 pa3 ma2 grow bw4 shadow-5">{this.state.posFour}</span>

                </div>
                <br></br>
                <form>
                    <input type="text" maxLength="1" className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id="1" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="1" className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id="2" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="1" className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id="3" onChange={this.handleInputChange}></input>
                    <input type="text" maxLength="1" className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" id="4" onChange={this.handleInputChange}></input>
                </form>
            </div>
        );
    }
}

export default Card;
