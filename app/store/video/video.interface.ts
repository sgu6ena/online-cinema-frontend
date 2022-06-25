export interface IInitialState {
    serial: boolean
    url: string
    title: string
    isPlayed: boolean
    idFile: string
}

export const initialState: IInitialState = {
    serial: false,
    url: '',
    title: '',
    idFile: '',
    isPlayed: false,
}
