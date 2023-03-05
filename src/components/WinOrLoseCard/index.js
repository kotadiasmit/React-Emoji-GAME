import './index.css'

const WinOrLoseCard = props => {
  const {wonOrLose, score, emojiListLength, playAgain} = props
  let gameResultHeading
  let scoreText
  let resultImgUrl

  const btnClicked = () => {
    playAgain(score)
  }

  if (wonOrLose) {
    gameResultHeading = 'You Won'
    scoreText = 'Best Score'
    resultImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    gameResultHeading = 'You Lose'
    scoreText = 'Score'
    resultImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="game-result-container">
      <div className="result">
        <h1 className="heading">{gameResultHeading}</h1>
        <p className="para">{scoreText}</p>
        <p className="game-score">
          {score}/{emojiListLength}
        </p>
        <button className="btn" type="button" onClick={btnClicked}>
          Play Again
        </button>
      </div>
      <img src={resultImgUrl} alt="win or lose" className="resultImgUrl" />
    </div>
  )
}
export default WinOrLoseCard
