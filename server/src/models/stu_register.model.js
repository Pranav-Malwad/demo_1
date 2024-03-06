import mongoose from "mongoose";

const stu_registerSchema = new mongoose.Schema(
  {
    stu_name: {
      type: String,
      required: true,
    },
    stu_email: {
      type: String,
      required: true,
    },
    stu_password: {
      type: String,
      required: true,
    },
    stu_phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const stu_Register = new mongoose.model("stu_register", stu_registerSchema);
export default stu_Register;
