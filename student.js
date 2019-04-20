// 引包
var mongoose=require('mongoose')

// 链接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// 设计数据表结构
var Schema=mongoose.Schema
var commentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["男","女"],
        dfault:"男"
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})

// 直接导出模型构造函数
module.exports=mongoose.model('Student',commentSchema)