export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  }
  
  export interface CartItem extends MenuItem {
    quantity: number;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface User {
    name: string;
    phone: string;
  }
  
  export interface Order {
    items: CartItem[];
    total: number;
    user: User;
    paymentMethod: PaymentMethod;
    createdAt: Date;
  }
  
  export type PaymentMethod = 'cash' | 'card' | 'upi';