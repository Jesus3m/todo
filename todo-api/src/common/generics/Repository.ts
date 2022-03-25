export interface Repository<T> {
    getAll(params?: any): Promise<T[]>
    getOne(params?: any): Promise<T>
    save(data?: T): Promise<T>
    update(id: string, data?: T): Promise<T>
    remove(id?: string): Promise<boolean>
}