import { FC, ReactNode } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalComponentProps = {show: boolean; footer?: boolean; title?: string; handleClose: ()=>void, children?: ReactNode}

export const ModalComponent:  FC<ModalComponentProps> = ({show, handleClose, footer=false, children,title='heading'})=>{
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
       {footer && <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>}
      </Modal>
    )
}