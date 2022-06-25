export const getGenresListEach = (
    index: number,
    length: number,
    name: string
) => (index + 1 === length ? name : name + ', ')

interface IArrayItem {
    name: string
}

export const getGenresList = (array: IArrayItem[]) => array.map((i) => i.name).join(', ')
export const getGenresListAlt = (array: IArrayItem[]) => array.map((i) => i.name).join(' | ')
export const getListDot = (array: string[]) => array.filter((i) => i.length).join(' · ')