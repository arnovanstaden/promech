type TImage = {
    asset: {
        url: string
    }
}

export interface IProject {
    title: string
    client: string
    location: string
    description: string
    home: boolean
    year: number
    slug: {
        current: string
    }
    thumbnail: {
        asset: {
            url: string
        }
    }
    images: TImage[]
    services: IService[]
}

export interface IService {
    category: string
    services: string[]
}