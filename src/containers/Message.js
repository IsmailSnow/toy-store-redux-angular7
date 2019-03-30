import React from 'react'
import { connect } from 'react-redux'
import { closeMessageAction } from '../store/message/message.actions'
import '../styles/message.css'

const Message = ({ isOpened, message, closeMessageAction }) => (
  isOpened && <aside className="Message" onClick={closeMessageAction}>
    <section className="MessageContent">
      Information : {message}
    </section>
  </aside>
)

const mapStateToProps = ({ messageReducer }) => {
  const { isOpened, message } = messageReducer
  return { isOpened, message }
}

const mapDispatchToProps = {
  closeMessageAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
