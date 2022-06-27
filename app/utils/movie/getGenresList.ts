export const getGenresListEach = (
    index: number,
    length: number,
    name: string
) => (index + 1 === length ? name : name + ', ')

interface IArrayItem {
    name: string
}
interface IGetGenreList{
    (array: IArrayItem[], separator?:string):string
}
export const getGenresList:IGetGenreList = (array, separator=',') => array.map((i) => i.name).join(` ${separator} `)
export const getListDot = (array: string[]) => array.filter((i) => i.length).join(' · ')