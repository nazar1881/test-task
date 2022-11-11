export interface IJob {
    address: string
    benefits: Array<string>[]
    createdAt: string
    description: string
    email: string
    employment_type: Array<string>[]
    id: string
    location: {
        lat: number
        long: number
    }
    name: string
    phone: string
    pictures: Array<string>[]
    salary: string
    title: string
    updatedAt: string
}
