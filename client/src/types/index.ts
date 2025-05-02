export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export interface CartItem extends MenuItem {
    _id: string;
    quantity: number;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface Order {
    items: CartItem[];
    total: number;
    createdAt: Date;
    _id?: string;  // Made optional with '?'
  }

