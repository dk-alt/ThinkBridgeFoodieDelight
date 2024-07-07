import { FC, useState } from "react";
import { RestaurantInfo } from "../RestaurantList/RestaurantList";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DEFAULT_FORM_STATE } from "./constant";

export const RestaurantForm: FC<{resInfo?: RestaurantInfo, onSuccess: (resData: RestaurantInfo)=>void, isAdd: boolean, isModal?: boolean}> = ({resInfo, onSuccess, isAdd, isModal=true}) => {
    const [formData, setFormData] = useState<RestaurantInfo>(resInfo ?? {...DEFAULT_FORM_STATE, id: self.crypto.randomUUID()});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        if (name.includes('address.')) {
          const addressField = name.split('.')[1];
          setFormData(prevState => ({
            ...prevState,
            address: {
              ...prevState.address,
              [addressField]: value
            }
          }));
        } else {
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        }
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        const requestOptions = {
            method: isAdd ? 'POST' : 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };
        const url = isAdd ? 'http://localhost:5000/restaurant-info' : `http://localhost:5000/restaurant-info/${formData.id}`;

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((resData)=>{
                onSuccess(resData);
                setFormData(DEFAULT_FORM_STATE);
                alert('Restaurent Data Added/Updated Succesfully!');
            });
      };
  
    return (
        <>
        {!isModal && <h1>Restaurant registration form</h1>}
        <Form onSubmit={handleSubmit} className="w-75" >
          <Form.Group as={Row} controlId="formRestaurantName">
            <Form.Label column sm={3}> Name</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter restaurant name"
                required
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formCategory">
            <Form.Label column sm={3}>Category</Form.Label>
            <Col sm={9}>
              <Form.Control 
                as="select" 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
              >
                <option value="Fast food">Fast food</option>
                <option value="Fine dine">Fine dine</option>
                <option value="Cafe">Cafe</option>
                <option value="Restro bar">Restro bar</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formCuisineType">
            <Form.Label column sm={3}>Cuisine Type</Form.Label>
            <Col sm={9}>
              <Form.Control 
                as="select" 
                name="cuisineType" 
                value={formData.cuisineType} 
                onChange={handleChange}
              >
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Continental">Continental</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formStreet">
            <Form.Label column sm={3}>Street</Form.Label>
            <Col sm={9}>
              <Form.Control 
                as="textarea"
                name="address.street" 
                value={formData.address.street} 
                onChange={handleChange} 
                placeholder="Enter street address"
                required
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formCity">
            <Form.Label column sm={3}>City</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                name="address.city" 
                value={formData.address.city} 
                onChange={handleChange} 
                placeholder="Enter city"
                required
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formState">
            <Form.Label column sm={3}>State</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                name="address.state" 
                value={formData.address.state} 
                onChange={handleChange} 
                placeholder="Enter state"
                required
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formZipCode">
            <Form.Label column sm={3}>Zip Code</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                name="address.zipCode" 
                value={formData.address.zipCode} 
                onChange={handleChange} 
                placeholder="Enter zip code"
                required
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formContactNumber">
            <Form.Label column sm={3}>Contact Number</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="tel" 
                name="contactNumber" 
                value={formData.contactNumber} 
                onChange={handleChange} 
                placeholder="Enter contact number"
                required
                pattern="[0-9]{10}"
              />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} controlId="formOwnerName">
            <Form.Label column sm={3}>Owner Name</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                name="ownerName" 
                value={formData.ownerName} 
                onChange={handleChange} 
                placeholder="Enter owner's name"
                required
              />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
        </>
    );
  };