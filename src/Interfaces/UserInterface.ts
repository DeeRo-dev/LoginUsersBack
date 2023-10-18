export interface UserAttributes {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    country: string;
    address: string;
    telephone: number;
  }

  export interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}
