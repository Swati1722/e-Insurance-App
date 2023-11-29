import React from 'react'

const AddEmoplyeeModel = ( {showAdminRegistrationModal, toggleAdminRegistrationModal}) => {

    const [show, setShow] = useState(showAdminRegistrationModal);

    if (show !== showAdminRegistrationModal) {
        setShow(showAdminRegistrationModal);
    }

    const handleClose = () => {
        setShow(false);
        toggleAdminRegistrationModal();
    };



  return (
    
    <>
        <Modal
        show={show}
        onHide={(handleClose)}
        size="lg" 
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        

        <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto',backgroundColor:  "#f7f6f8" }}>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>
    
    
    
    </>
  )
}

export default AddEmoplyeeModel
