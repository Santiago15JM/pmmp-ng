export interface User {
  id: number,
  name: string,
  lastname: string,
  email: string,
  phone: number,
  address: string
}

export interface LoginUser extends Omit<User, "id"|"name"|"lastname"|"phone"|"address"> {
  password: string
}
