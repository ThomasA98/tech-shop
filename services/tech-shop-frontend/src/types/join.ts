
export type CommonKeys<T, U> = {
    [ K in keyof T & keyof U ]: T[K] extends U[K] ? K : never
}[ keyof T & keyof U ]

export type Join<T, U> = {
    [ K in CommonKeys<T, U> ]: T[K]
}