import {summonRums} from '../custom-hooks/getRumList'


export function DataTable({rselect}: any) {
   
    const {theRums}: any = summonRums()

  return (
    <div className="table-responsive-sm mx-auto mb-5">
        <table className="table table-sm table-danger table-bordered table-striped w-100 text-center mx-auto">
            <thead>
                <tr>
                    <th scope="col" className="th-sm">Rum Name</th>
                    <th scope="col">Rum Company</th>
                    <th scope="col">Rum Price</th>
                    <th scope="col">Rum Age</th>
                </tr>
            </thead>
            <tbody>
                {theRums.map((rum: any) => 
                    <tr key={rum.rum_id} id={rum.rum_id} onClick={()=>rselect([rum.rum_id, rum.rum_name, rum.rum_company, rum.rum_price, rum.rum_age])}>
                        <td>{rum.rum_name}</td>
                        <td>{rum.rum_company}</td>
                        <td>{rum.rum_price}</td>
                        <td>{rum.rum_age}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

