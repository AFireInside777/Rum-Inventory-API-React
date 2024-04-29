function ModalEorD( props: any) {

    return (
        <div id="modal2" className="mx-auto text-center">
            <div className="text-bg-primary w-100 rounded-top d-flex flex-md-row justify-content-center" id="instructions2">
                <p>Rum Name: {props[1]}</p>
                <p>Rum Company: {props[2]}</p>
                <p>Rum Price: {props[3]}</p>
                <p>Rum Age: {props[4]}</p>
            </div>
            <div className="text-bg-warning w-100" id="instructions">
                Would you like to Edit or Delete this selection?
            </div>
            <div className="text-bg-danger w-100 rounded-bottom" id="instructions">
                <button className="EDButs" onClick={()=>props.switchEd(props)}>Edit Selection</button>
                <button className="EDButs" onClick={()=>props.switchD(props)}>Delete Selection</button>
                <button className="EDButs" onClick={()=>props.cancelM(props)}>Cancel Edit/Delete</button>
            </div>
        </div>
    )
}

export default ModalEorD