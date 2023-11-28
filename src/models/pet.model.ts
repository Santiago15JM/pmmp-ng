export interface Pet {
    id: string
    ownerId: string
    name: string
    type: string
    breed: string
    sex: string
    age: number
    diseases: Disease[]
    vaccines: Vaccine[]
}

export interface Disease {
    id: string
    name: string
    description: string
    recommendations: Recommendation[]
}


export interface Recommendation {
    id: string
    description: string
}

export interface Vaccine {
    name: string
    description: string
    date: Date
    validity: number
}


