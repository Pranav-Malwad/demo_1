import mongoose from "mongoose";

const instru_registerSchema = new mongoose.Schema(
  {
    instru_name: {
      type: String,
      required: true,
    },
    instru_about: {
      type: String,
      required: true,
    },
    instru_specialization: {
      type: String,
      required: true,
    },
    instru_qualification: {
      type: String,
      required: true,
    },
    instru_email: {
      type: String,
      required: true,
    },
    instru_password: {
      type: String,
      required: true,
    },
    instru_phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const instru_Register = new mongoose.model(
  "instru_register",
  instru_registerSchema
);
export default instru_Register;
