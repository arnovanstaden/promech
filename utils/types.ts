export interface IProject {
    title: string
    client: string
    location: string
    description: string
    home: boolean
    slug: {
        current: string
    }
    thumbnail: {
        asset: {
            url: string
        }
    }
    asset: string
    services: IService[]
}

export interface IService {
    category: string
    services: string[]
}