export enum RepositoriesTypes{
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
    
} 

export interface Repository{
    CDGRUPO:  string,
    NMGRUPO: string
    COLOR: string
}

export interface RepositoriesState{
   readonly repositories: Repository[]
   readonly loading: boolean
   readonly error: boolean
}