import React from 'react'

const Chat = () => {
  return (
    <div className="chat">
      <h4>ChatGPT</h4>
      <div className="chatContainer">
          {/* <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          /> */}
      </div>
      <div className="itemChat">
        <div className="inputChat">
          <input
            type="text"
            placeholder="Chat"
          />
        </div>
        <div className="buttonChat">
          {/* <button onClick={handleClick}>Chat</button> */}
          Chat
        </div>
      </div>
    </div>
  )
}

export default Chat