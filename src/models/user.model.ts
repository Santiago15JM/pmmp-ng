export interface User {
  id: number,
  name: string,
  lastname: string,
  email: string,
  password: string,
  phone: number,
  address: string
}

export interface RegisterUser extends Omit<User, "id"> { }

export interface LoginUser extends Omit<User, "id"|"name"|"lastname"|"phone"|"address"> { }
