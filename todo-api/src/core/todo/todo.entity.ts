export interface Todo {
    id?: string
    userId: string
    description: string
    status: string
    completeAt?: Date
    deletedAt?: Date | null
}