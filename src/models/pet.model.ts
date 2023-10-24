export interface Pet {
    id: number;
    name: string;
    type: string;
    breed: string;
    sex: string;
    age: number;
    diseases: Disease[];
    recommendations: Recommendation[];
    vaccines: Vaccine[];
}

export interface Disease {
    id: number;
    name: string;
    description: string;
    // recommendations: Recommendation[];
}

export interface Recommendation {
    id: number;
    description: string;
}

export interface Vaccine {
    id: number;
    name: string;
    description: string;
    // validity: Time;
    date: Date;
    revaccination: Date;
}