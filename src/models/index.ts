export interface LoginModel {
  username: string;
  password: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error: string;
  data: any;
}
