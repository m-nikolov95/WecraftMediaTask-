import { useState } from 'react';

import ModalComponent from './components/modal-component/ModalComponent';

import './App.css';

function App() {
  let [shouldShowModal, setShouldShowModal] = useState(false);

  const onModalClicked = () => {
    setShouldShowModal((shouldShowModal) => !shouldShowModal);
  }
  
  return (
    <div className='container'>
        <p className='headerParagraph'>Product catalogue</p>
        <p className='paragraph'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
        <button className='button' onClick={onModalClicked}>CANCEL</button>
        <ModalComponent shouldShowModal={shouldShowModal} onModalClicked={onModalClicked} />
    </div>
  );
}

export default App;