export interface INews {
    nav: INav
    items: INewsItems[]
}

export interface INav {
    current: number
    total: number
}

export interface INewsItems {
    code: string
    date: number
    image: string
    link: string
    name: string
    previewText: string
    type: {
        value: string
        xmlId: string
    }
}