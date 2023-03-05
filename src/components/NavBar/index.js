import './index.css'

const NavBar = props => {
  const {score, topScore, gameResult} = props
  return (
    <nav className="nav-bar">
      <div className="game-heading-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-img"
        />
        <h1 className="game">Emoji Game</h1>
      </div>
      {gameResult === false && score !== 12 ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}
export default NavBar
