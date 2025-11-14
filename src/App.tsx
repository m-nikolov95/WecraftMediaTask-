import { useState } from 'react';

import ModalComponent from './components/modal-component/ModalComponent';

import './App.css';

function App() {
  let [shouldShowModal, setShouldShowModal] = useState(false);
  let [shouldCancelMeeting, setShouldCancelMeeting] = useState(false);

  const onModalTriggered = () => {
    setShouldShowModal((shouldShowModal) => !shouldShowModal);
  }

  const onCancelMeetingClicked = () => {
    onModalTriggered();
    
    setShouldCancelMeeting(true);
  }
  
  return (
    <div className='container'>
        <p className='headerParagraph'>Product catalogue</p>
        <p className='paragraph'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
        {
        shouldCancelMeeting ? 
          <p className='cancellationParagraph'>Meeting canceled.</p>
          : <button className='button' onClick={onModalTriggered}>CANCEL</button>
        }
        <ModalComponent shouldShowModal={shouldShowModal} 
          onModalTriggered={onModalTriggered} 
          onCancelMeetingClicked={onCancelMeetingClicked} />
    </div>
  );
}

export default App;