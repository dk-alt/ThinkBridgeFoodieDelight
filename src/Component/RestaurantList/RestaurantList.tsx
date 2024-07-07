
import { Button } from 'react-bootstrap';
import './RestaurantList.css';

type Address = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
};

export type RestaurantInfo = {
    id: string;
    name: string;
    category: 'Fast food' | 'Fine dine' | 'Cafe' | 'Restro bar' | 'Other';
    cuisineType: 'Indian' | 'Chinese' | 'Continental' | 'Other';
    address: Address;
    contactNumber: number;
    ownerName: string;
}

type RestaurantInfoProps = {
    resInfo: RestaurantInfo;
    onEdit: (res: RestaurantInfo)=>void
    onDelete: (id: string)=>void
}

type RestaurantListProps = {
    RestaurantList:Array<RestaurantInfo>;
    onEdit: (res: RestaurantInfo)=>void;
    onDelete: (id: string)=>void
}
const RestaurentInfo: React.FC<RestaurantInfoProps> = ({resInfo, onEdit, onDelete})=> {
    const {name, category, cuisineType, address, contactNumber,id} = resInfo;

    const handleDelete = ()=>{
        const requestOptions = {
            method: 'DELETE',
        };
        const url =  `http://localhost:5000/restaurant-info/${id}`;

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(()=>onDelete(id));
    }
    return (
        <div className="res-info">
            <div className="res-name">
                <h4>{name} <sup>{category}, {cuisineType}</sup></h4>
                <div>
                <span>{address.street}</span>
                <br/>
                <a href={`tel:${contactNumber}`}>{contactNumber}</a>
                </div>
            </div>
            <div className='d-flex gap-2'>
                <Button onClick={()=>onEdit(resInfo)}>Edit</Button>
                <Button variant='danger' onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    )
}

const RestaurantList: React.FC<RestaurantListProps> = ({RestaurantList, onEdit, onDelete})=> {
    return (
        <div className="res-list">
            {RestaurantList.map((data: RestaurantInfo)=>
                    <RestaurentInfo  resInfo={data} key={data.id} onEdit={onEdit} onDelete={onDelete}/>
            )}
        </div>
    )
}

export default RestaurantList;