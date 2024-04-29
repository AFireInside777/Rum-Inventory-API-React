let token = '5851f02799465790ec795ddf5c2b8d12527eacbb2b8bf386'

export let fetchRum = async () => 
{
  let response = await fetch('https://rum-inventory-api.onrender.com/api/getrums',
    {
      method: 'GET',
      headers: 
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token': `Bearer ${token}`,
      },
      mode: 'cors'
      
    }
 
  )

  if (!response.ok) 
  {
    throw new Error('Failed to fetch data from the server')
  }
  let result: any = await response.json()

  console.log(result)
  return result
}


export let sendRumEdits = async ( newrums: any) => {

  console.log(newrums)
  const cid: string = newrums.rum_id
  console.log(cid)
  
  let response = await fetch(`https://rum-inventory-api.onrender.com/api/editrum/${cid}`, 
  {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': `Bearer ${token}`,
          
      },
      mode: "cors",
      body: JSON.stringify(newrums)
      
  });
  if (!response.ok) {
      throw new Error('Failed to fetch data from the server')
  }
  let result = await response.json()
  window.location.reload()
  return result
}


export const AddNewRum = async ( newrum: object ) => 
  {
      const response = await fetch(`https://rum-inventory-api.onrender.com/api/addrum`,
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'x-access-token': `Bearer ${token}`
          },
          body: JSON.stringify(newrum)

      })

      if (!response.ok) {
          throw new Error('Failed to create new data on the server')
      }
      
      window.location.reload()
      return await response.json()
  }


export const DeleteTheRum = async (rumdelete: any) =>

  {
      let cid: string = rumdelete[0]

      const response = await fetch(`https://rum-inventory-api.onrender.com/api/deleterum/${cid}`,
      {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'x-access-token': `Bearer ${token}`
          },

      })

      if (!response.ok) {
          throw new Error('Failed to delete the data on the server')
      }
      
      // let confirm: any = await response.json()
      
      window.location.reload()

  }