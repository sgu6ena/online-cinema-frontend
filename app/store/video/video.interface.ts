export interface IInitialState {
    serial: boolean
    url: string | null
    title: string
    isPlayed: boolean
    idFile: string
    urlLoading: boolean
}

export const initialState: IInitialState = {
    serial: false,
    url: '',
    urlLoading: false,
    title: '',
    idFile: '',
    isPlayed: false,
}
