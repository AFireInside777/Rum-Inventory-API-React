//@ts-nocheck
import {DataTable} from '../components/DataTable'
import Modal from '../components/Modal'
import { useState } from 'react'
import ModalEdit from '../components/ModalEdit'
import ModalEorD from '../components/ModalEorD'
import ModalAdd from '../components/ModalAdd'
import ModalDelete from '../components/ModalDelete'


function Dashboard() {

    function switchDelete (RumSelect: any) 
    {
      setModalState((prev: any) => prev = <ModalDelete {...RumSelect} cancelM={cancelModel}/>)
    }

    const AddModal = () => 
    {
      setModalState((prev: any) => prev = <ModalAdd cancelM={cancelModel}/>)
    }

    const [modalState, setModalState] = useState(<Modal addmodal={AddModal}/>)

    const cancelModel = () => 
    {
      setModalState((prev: any) => prev = <Modal addmodal={AddModal}/>)
    }

    function switchToEdit (RumSelect: any)
    {
      setModalState((prev: any) => prev = <ModalEdit {...RumSelect} cancelM={cancelModel}/>)
    }

    function collectDorE (RumSelect: any)
    {
        setModalState((prev: any) => prev = <ModalEorD {...RumSelect} switchEd={switchToEdit} cancelM={cancelModel} switchD={switchDelete}/>)
    }

  return (

    <div style={{height: "90vh", paddingTop: "30px"}} id="dashboardpage">
        <DataTable rselect={collectDorE}/>
        {modalState}
    </div>
  )
}

export default Dashboard