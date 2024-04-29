import {useForm, SubmitHandler} from 'react-hook-form'
import { sendRumEdits } from '../helpers/APICalls'

interface IFormInput {
    rum_name: any,
    rum_company: any,
    rum_price: any,
    rum_age: any
}

function ModalEdit(props: any) {

    let makeRumsObj = (rumObject: any) => 
    {   
        rumObject.rum_price = parseFloat(rumObject.rum_price)
        let newRumObj: any = {...rumObject, rum_stock_qty: 10, rum_id: props[0]}
        
        return newRumObj
    }

    const preloadedValues =
    {
        rum_name: props[1],
        rum_company: props[2],
        rum_price: props[3],
        rum_age: props[4]
    }

    const {register, handleSubmit} = useForm<IFormInput>({defaultValues: preloadedValues})

    const onSubmit: SubmitHandler<IFormInput> = (data) => 
    {
        console.log(data)
        let theNewRums: object = makeRumsObj(data)
        sendRumEdits(theNewRums)
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
                    <div className="text-bg-danger w-100 rounded-bottom" id="instructions">
                        <input type="Submit" className="w-25"/>
                        <button className="w-25 rounded" onClick={()=>props.cancelM()}>Cancel Edits</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default ModalEdit