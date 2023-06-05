import { FC } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'


const ShowMore: FC<{totalPages?:number, setPage:(page:number)=>void, page:number}> = ({totalPages, setPage, page}) => {

	const showMore = () => {
		setPage(page + 1)
	}


	return (
		<div className={'flex justify-center'}>
			{totalPages && totalPages > page && (
				<button
					className='flex btn-primary gap-4 mt-5 pl-8 py-2 rounded-lg pr-5 items-center'
					onClick={showMore}
				>
					Показать еще <MdKeyboardArrowDown className='h-6 w-6' />
				</button>
			)}
		</div>
	)
}

export default ShowMore