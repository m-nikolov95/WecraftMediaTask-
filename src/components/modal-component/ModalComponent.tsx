import CloseIcon from '@mui/icons-material/Close';

import { ModalComponentProps } from '../../props/modal-component-props';

import './ModalStyles.css';

function ModalComponent(props: ModalComponentProps) {
    return props.shouldShowModal ? (
        <div className='modal'>
            <div className='modalContent'>
                <button className='closeButton' onClick={props.onModalClicked}>
                    <CloseIcon />
                </button>
                <p className='modalHeader'>Cancel meeting</p>
                <p>Are you sure you want to cancel this meeting?</p>
                <div className='buttonContainer'>
                    <button className='modalButton' onClick={props.onModalClicked}>CANCEL MEETING</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default ModalComponent;