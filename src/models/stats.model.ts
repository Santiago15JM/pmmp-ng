import { Recommendation } from "./pet.model"

export interface Summary {
    type: string
    breed: string
    entries: SummaryEntry[]
}

export interface SummaryEntry {
    disease: string
    percentage: number
    recommendations: Recommendation[]
}
