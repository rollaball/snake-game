import React from "react"
const Modal = ({score, reset}) => {
  return (
    <div id="open-modal" class="modal-window">
      <div>
        <h1>You Died!</h1>
        <h2>Your Score: {score}</h2>
        <button onClick={e=>reset()}>Try again</button>
      </div>
    </div>
  )
}

export default Modal
