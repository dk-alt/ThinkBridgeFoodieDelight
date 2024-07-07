import { useEffect, useState } from "react"

import RestaurantList, { RestaurantInfo } from "../RestaurantList/RestaurantList"
import { ModalComponent } from "../Modal/Modal"
import { RestaurantForm } from "../RegistrationForm/RestaurantForm"
import { Button } from "react-bootstrap"
import { DEFAULT_FORM_STATE } from "../RegistrationForm/constant"


const Dashboard = ()=>{
    const [restaurentList, setRestaurentList] = useState<Array<RestaurantInfo>>([])
    const [selectedRestaurent,setSelectedRestaurent] = useState<RestaurantInfo | null>(null);
    const [isAdd, setIsAdd] = useState<boolean>(false);


    useEffect(()=>{
    
        fetch('http://localhost:5000/restaurant-info')
            .then(data=>data.json())
            .then((res)=>setRestaurentList(res.reverse()))
    },[])

    const onSuccess = (resData:RestaurantInfo)=>{
        if(restaurentList.some(x=>x.id===resData.id)){
            setRestaurentList([...restaurentList.map(x=>{
                if(x.id===resData.id){
                    return resData;
                }
                return x;
            })]);
        } else {
            setRestaurentList([resData, ...restaurentList]);
            setIsAdd(false);
        }

        setSelectedRestaurent(null);
    }

    const onDelete = (id: string)=> {
        setRestaurentList([...restaurentList.filter(x=>x.id!=id)]);
    }
    return (
        <>
           <Button variant="primary" onClick={()=>{setIsAdd(true); setSelectedRestaurent({...DEFAULT_FORM_STATE,id: self.crypto.randomUUID()})}}>Add new Restaurant</Button>
            <RestaurantList RestaurantList={restaurentList} onEdit={(res)=>setSelectedRestaurent(res)} onDelete={(id)=>onDelete(id)}/>
            <ModalComponent show={!!selectedRestaurent} handleClose={()=>setSelectedRestaurent(null)} title={selectedRestaurent?.name ? "Edit Restaurant Details": "Add Restaurant Details"}>
                <RestaurantForm  resInfo={selectedRestaurent!} onSuccess={(resData: RestaurantInfo)=>onSuccess(resData)} isAdd={isAdd}/>
            </ModalComponent>
        </>
    );
}

export default Dashboard;