export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  age: string;
  created: Date;
}

export interface UserApi {
  resultCode: number;
  resultDescription: User[];
}

export interface LoginApi {
   resultCode: number;
  resultDescription: User;
}

export interface RegisterApi {
  resultCode: number;
  resultDescription: string;
}