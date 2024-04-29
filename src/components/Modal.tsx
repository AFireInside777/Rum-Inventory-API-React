function Modal(props: any) 
{
   
    return (
        <div id="modal" className="mx-auto text-center">
            <div className="text-bg-primary w-100 rounded-top" id="instructions">
                <p>Thank you for using our Rum Inventory API.</p>
            </div>
            <div className="text-bg-warning w-100" id="instructions">
                Please click one of the selections above to either edit or delete the selection.
            </div>
            <div className="text-bg-danger w-100 rounded-bottom" id="instructions" onClick={()=>props.addmodal()}>
                You may also click on this message to Add a New Car.
            </div>
        </div>
    )

}


export default Modal