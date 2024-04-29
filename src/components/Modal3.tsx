import { AddNewRum } from "../helpers/APICalls"
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
    rum_name: any,
    rum_company: any,
    rum_price: any,
    rum_age: any
}

const Modal3 = () => {

    let makeRumsObj = (rumObject: any) => 
    {   
        rumObject.rum_price = parseFloat(rumObject.rum_price)
        let newRumObj: any = {...rumObject, rum_stock_qty: 10}
        
        return newRumObj
    }

    const {register, handleSubmit} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => 
    {
        console.log(data)
        let theNewRums: object = makeRumsObj(data)
        AddNewRum(theNewRums)
    }
    return (
        <div id="modal2" className="mx-auto text-center">
            <div className="text-bg-primary w-100 rounded-top" id="instructions">
                <p>Please use the form below to provide a new Rum selection.</p>
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
                        <input type="Submit" className="w-50"/>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default Modal3