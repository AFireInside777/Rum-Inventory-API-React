import { DeleteTheRum } from "../helpers/APICalls"

function ModalDelete( props: any) {

    return (
        <div id="modal" className="mx-auto text-center">
            <div className="text-bg-primary w-100 rounded-top d-flex flex-md-row justify-content-center" id="instructions2">
                <p>Rum Name: {props[1]}</p>
                <p>Rum Company: {props[2]}</p>
                <p>Rum Price: {props[3]}</p>
                <p>Rum Age: {props[4]}</p>
            </div>
            <div className="text-bg-warning w-100" id="instructions">
                Are you sure you would like to delete this selection?
            </div>
            <div className="text-bg-danger w-100 rounded-bottom d-flex justify-content-center" id="instructions">
                <div>
                    <button className="DelButs" onClick={()=>DeleteTheRum(props)}>
                        <p>Submit Delete</p>
                    </button>
                    <button onClick={()=>props.cancelM()} className="DelButs">
                        <p>Cancel Delete</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete