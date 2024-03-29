const mongoose = require('mongoose');

const asgSchema = mongoose.Schema(
    {
     
      name: {
        type: String,
        required: true,
     },
      instructor:
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "instructor",
        },
       
        lastDate: {
            type: Date,
            default: Date.now,
        }



      
    }
      
  )

  module.exports = mongoose.model("assignment",asgSchema);