import { RestaurantInfo } from "../RestaurantList/RestaurantList";

export const DEFAULT_FORM_STATE = {
    id: '',
    name: '',
    category: 'Other',
    cuisineType: 'Other',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    contactNumber: 0,
    ownerName: '',
    img: '',
} as RestaurantInfo