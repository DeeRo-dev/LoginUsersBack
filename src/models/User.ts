import { Table, Model, Column, DataType} from 'sequelize-typescript';

interface UserAttributes {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    country: string;
    address: string;
    telephone: number;
  }

  interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

@Table({
    timestamps: false,
    tableName: 'users'
})

class User extends Model<UserAttributes, UserCreationAttributes> {

     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     nombre!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     lastname!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     email!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     password!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     country!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     address!: string;
     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     telephone!: number;
}


export default User;