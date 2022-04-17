export interface ITableItem {
    _id: string
    editUrl: string
    items: string[]
}

export interface IAdminTable {
    tableItem: ITableItem
    removeHandler: () => void
}
