**Emoji Game**

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif" alt="emoji-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/emoji-game-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game View](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Won Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Lose Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png)

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the _Score_ and _Total Score_ for the current game should be **0**
- When an **Emoji** is clicked,

  - If it is not the same as any of the previously clicked emojis, then the _Score_ should be incremented by one
  - If all the emojis are clicked exactly once

    - [Won Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-won-game-lg-output.png) view should be displayed

  - If it is the same as any of the previously clicked emojis
    - [Lose Game](https://assets.ccbp.in/frontend/content/react-js/emoji-game-lose-game-lg-output.png) view should be displayed
  - If the score achieved in the current game is higher than the previous scores then the _Top Score_ should be updated accordingly

- When the _Play Again_ button is clicked, then we should be able to play the game again
  - The _Score_ value should be reset but not the _Top Score_ value
- The `EmojiGame` component receives the `emojisList` as a prop. It consists of a list of emoji objects with the following properties in each emoji object

  |    Key    | Data Type |
  | :-------: | :-------: |
  |    id     |  Number   |
  | emojiName |  String   |
  | emojiUrl  |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-game-view-component-breakdown-structure.png" alt="emoji game view component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-win-lose-component-breakdown-structure.png" alt="emoji game win or lose component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/EmojiGame/index.js`
- `src/components/EmojiGame/index.css`
- `src/components/NavBar/index.js`
- `src/components/NavBar/index.css`
- `src/components/EmojiCard/index.js`
- `src/components/EmojiCard/index.css`
- `src/components/WinOrLoseCard/index.js`
- `src/components/WinOrLoseCard/index.css`
</details>
