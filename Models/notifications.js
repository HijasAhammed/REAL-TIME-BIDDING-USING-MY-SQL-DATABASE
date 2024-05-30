const { DataTypes } = require("sequelize")
const sequelize=require("../Config/database")
const User=require("./user")
const user = require("./user")
const notification=sequelize.define('notification',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id',
        },
        allowNull:false,
    },
    messege:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    is_read:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
    },
    created_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    },{
        timestamps:false,
        tableName:'notification'
    });
    module.exports=notification;