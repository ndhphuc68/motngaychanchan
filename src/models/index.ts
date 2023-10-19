export interface LoginModel {
  username: string;
  password: string;
}

export interface RegisterModel extends LoginModel {
  name: string;
  email: string;
  phone: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error: string;
  data: any;
}
