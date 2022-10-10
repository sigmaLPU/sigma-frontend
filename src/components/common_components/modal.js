import React, {useState} from 'react'
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import CloseIcon from '@mui/icons-material/Close';


export default function ModalPopUp(props){

	const customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)',
	  },
	};

	// let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			{
				props?.activeComponent ? 
					<div onClick={openModal} style={{cursor:"pointer"}}>{props?.activeComponent}</div> 
					: 
					<IconButton color="inherit" onClick={openModal} aria-label="open drawer" style={{width:"30px",height:"28.54px",float:"right",border:"1px solid black" , borderRadius:"8px"}}>
						<CallMadeIcon />
					</IconButton>
      }<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      	<div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
	      	<IconButton onClick={closeModal}>
	      		<CloseIcon/>
	      	</IconButton>
      	</div>
      	<div style={{paddingBottom:"5rem"}}>
	       	{props?.children}
      	</div>
      </Modal>
    </div>
	)
}
