import { useEffect, useRef } from "react";
import './dialog.style.css';

export function Dialog( {isOpen , onClose}) {

  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal()
  }

  const closeDialog = () => {
    dialogRef.current.close()
  }

  useEffect(() => {
    console.log("Deveriamos mostrar o modal?", isOpen)
    if (isOpen) {
      openDialog()
    } 
    else {
      closeDialog()
    }
  }, [isOpen])


  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>Fechar</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eaque aliquam quibusdam odio aut doloribus distincti</p>
      </dialog>
    </>
  );
}
