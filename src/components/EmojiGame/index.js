/* 

-  Below function is used in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, clickedEmojiId: [], gameResult: false, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiClicked = id => {
    const {clickedEmojiId} = this.state
    if (clickedEmojiId.includes(id) === false) {
      this.setState(prevState => ({
        clickedEmojiId: [...prevState.clickedEmojiId, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({gameResult: true})
    }
  }

  playAgain = score => {
    const {topScore} = this.state
    if (topScore < score) {
      this.setState({topScore: score})
    }
    this.setState({score: 0, gameResult: false, clickedEmojiId: []})
  }

  render() {
    const {score, clickedEmojiId, gameResult, topScore} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    console.log(shuffledEmojisList)
    const emojiListLength = shuffledEmojisList.length
    const wonOrLose = emojiListLength === clickedEmojiId.length

    return (
      <div>
        <NavBar score={score} topScore={topScore} gameResult={gameResult} />
        <div className="game-bg-container">
          {gameResult === false && wonOrLose === false ? (
            <ul className="game-container">
              {shuffledEmojisList.map(eachItem => (
                <EmojiCard
                  emojiDetail={eachItem}
                  key={eachItem.id}
                  emojiClicked={this.emojiClicked}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              emojiListLength={emojiListLength}
              score={score}
              wonOrLose={wonOrLose}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
