import joi from "joi";

export const signinSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Email không được để trống",
    "any.required": "Trường email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  password: joi.string().required().min(6).messages({
    "string.empty": "Mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
    "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
  }),
});
export const signupSchema = joi.object({
  name: joi.string().required().messages({
    "String.empty": "Tên không được để trống",
    "any.required": "Trường tên là bắt buộc",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email không được để trống",
    "any.required": "Trường email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  phone: joi.string().required().messages({
    "string.empty": "Phone không được để trống",
    "any.required": "Trường phone là bắt buộc",
  }),
  password: joi.string().required().min(6).messages({
    "string.empty": "Mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
    "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
  }),
  confirmPassword: joi.string().required().valid(joi.ref("password")).messages({
    "string.empty": "Xác nhận mật khẩu không được để trống",
    "any.required": "Trường xác nhận mật khẩu là bắt buộc",
    "any.only": "Xác nhận mật khẩu không khớp",
  }),
});

export const userSchema = joi.object({
  _id: joi.string(),
  name: joi.string().required().messages({
    "String.empty": "Tên không được để trống",
    "any.required": "Trường tên là bắt buộc",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email không được để trống",
    "any.required": "Trường email là bắt buộc",
    "string.email": "Email không đúng định dạng",
  }),
  phone: joi.string().required().messages({
    "string.empty": "Phone không được để trống",
    "any.required": "Trường phone là bắt buộc",
  }),
  password: joi.string().required().min(6).messages({
    "string.empty": "Mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
    "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
  }),
  role: joi.string().required().messages({
    "string.empty": "Mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
  })
});