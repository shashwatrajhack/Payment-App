const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{type:string,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:30

    },
    password:{type:string,
        require:true,
        minlenght:6
    },
    firstName:{type:string,
        required:true,
        trim:true,
        maxlength:50
    },
    lastName:{type:string,
        require:true,
        trim:true,
        maxlength:50
    },

});

const User = mongoose.model("User",userSchema);
module.exports = {
    user
}
