import { Disease, Pet, Vaccine } from "../pet.model"
import { User } from "../user.model"

export interface AddDiseaseDTO {
    pet: string
    disease: string
}

export interface AddVaccineDTO {
    pet: string
    vaccine: Vaccine
}

export interface ListedPet extends Omit<Pet, "ownerId"|"age"|"diseases"|"vaccines"> {}

export interface DiseaseName extends Omit<Disease, "description" | "recommendations"> { }

export interface RegisterPet extends Omit<Pet, "id"> { }

export interface RegisterUser extends Omit<User, "id"> { }

export interface LoginUser extends Omit<User, "id"|"name"|"lastname"|"phone"|"address"> { }