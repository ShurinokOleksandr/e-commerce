export interface ProductType {
    id: number
    name: string
    new?: boolean
    price: number
    images: string
    in_stock?: number
    createdAt?:string
    updatedAt?: string
    popularity?: number
    vendor_code?: string
    compatibity?: string
    description?: string
    bestsellers?: boolean
    pc_manufactures?: string
    parts_manufactures?: string
}
