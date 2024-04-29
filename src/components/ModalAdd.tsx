import {useForm, SubmitHandler} from 'react-hook-form'
import { AddNewRum } from '../helpers/APICalls'

interface IFormInput {
    rum_name: any,
    rum_company: any,
    rum_price: any,
    rum_age: any
}

function ModalAdd(props: any) {

    let styleValues: any = {
        width: "300px",
        justifyContent: "center"
    }

    let makeRumsObj = (rumObject: any) => 
    {   
        rumObject.rum_price = parseFloat(rumObject.rum_price)
        let newRumObj: any = {...rumObject, rum_stock_qty: 10}
        
        return newRumObj
    }


    const {register, handleSubmit} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => 
    {
        let newRum: any = makeRumsObj(data)
        AddNewRum(newRum)
        
    }
    return (
        <div id="modal2" className="mx-auto text-center">
            <div className="text-bg-primary w-100 rounded-top" id="instructions">
                <p>Please enter the new information for your Rum selection below.</p>
            </div>
            <div className="text-bg-warning w-100" id="instructions">
                <form onSubmit ={handleSubmit(onSubmit)}>
                    <label>Rum Name: </label>
                    <input {...register("rum_name")} name="rum_name"/>
                    <label>Rum Company: </label>
                    <input {...register("rum_company")} name="rum_company"/>
                    <label>Rum Price: </label>
                    <input {...register("rum_price")} name="rum_price"/>
                    <label>Rum Age: </label>
                    <input {...register("rum_age")} name="rum_age"/>
                    <div className="text-bg-danger w-100 rounded-bottom" id="instructions3">
                        <div style={styleValues} id="buttondiv">
                            <input type="Submit" className="w-100"/>
                        </div>
                        <button className="w-25 rounded" onClick={()=>props.cancelM()}>Cancel Add New Car</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default ModalAdd