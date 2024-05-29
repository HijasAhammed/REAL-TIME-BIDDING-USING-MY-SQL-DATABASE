const sequelize=require("../Config/database")
const User=require("../Models/user")
const Item=require("../Models/items")
const { DataTypes } = require("sequelize")


const bid= sequelize.define('bid',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    item_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Item,
            key:'id',
        },
        allowNull:false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'id',
        },
        allowNull:false,
    },
    bid_amount:{
        type: DataTypes.DECIMAL,
        allowNull:false,
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
},
{
    timestamps:false,
    tableName:'bids',
})
module.exports=bid;