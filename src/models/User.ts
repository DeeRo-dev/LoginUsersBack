import { Table, Model, Column, DataType} from 'sequelize-typescript';
import { UserAttributes, UserCreationAttributes } from '../Interfaces/UserInterface';


@Table({
    timestamps: false,
    tableName: 'users',
    modelName: 'User'
})

class User extends Model<UserAttributes, UserCreationAttributes> {

     @Column({
        type: DataType.STRING,
        allowNull: false,
     })
     name!: string;

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
        type: DataType.INTEGER,
        allowNull: false,
     })
     telephone!: number;
}


 export default User;