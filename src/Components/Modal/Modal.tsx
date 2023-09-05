import React, { Component, ReactNode } from "react";
import './Modal.css'

type Props = {
    children: ReactNode;
}

type ModalProps = {
    onModalClose: () => void;
}

class Modal extends Component<ModalProps & Props> {
    render(): React.ReactNode {
        const { onModalClose } = this.props;

        return (
            <div className="Modal-Container">
                <button className="Modal-CloseButton" onClick={onModalClose}>CLICK ME</button>
                <div className="Modal-Overlay" />
                <div className="Modal-Content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;