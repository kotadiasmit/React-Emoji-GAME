import './index.css'

const EmojiCard = props => {
  const {emojiDetail, emojiClicked} = props
  const {id, emojiUrl, emojiName} = emojiDetail
  const onEmojiClick = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji" onClick={onEmojiClick}>
      <button type="button" className="emoji-btn">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
