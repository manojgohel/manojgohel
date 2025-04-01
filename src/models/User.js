import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String },
  mobile: { type: String },
  otp: { type: Number },
  role: { type: String, default: "parent" },
  gender: { type: String, values: ["male", "female", "other"], default: "male" },

  standardId: { type: mongoose.Schema.Types.ObjectId, ref: "Standard" },
  divisionId: { type: mongoose.Schema.Types.ObjectId, ref: "Division" },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.plugin(mongoosePaginate);

const User = mongoose?.models?.User || mongoose?.model("User", UserSchema);

export default User;
