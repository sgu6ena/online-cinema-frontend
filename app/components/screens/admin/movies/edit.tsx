import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { useMovie } from '@/hooks/useMovie'
import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import { useGenres } from '@/screens/genres/useGenres'


const MovieEdit: FC = () => {
	const {
		movie,
		isLoading,

	} = useMovie()
	const {
		getMovie,
	} = useActions()
	const { query } = useRouter()
	const movieId = query.id && String(query.id)
	const { genres, collections } = useGenres()


	useEffect(() => {
		movieId && getMovie(movieId)
	}, [movieId])

	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Редактирование фильма'} />
					<Heading title={movie?.title || ''} className={'text-5xl'} />
				</div>

			</div>
			<div className='flex gap-4'>
				<img className={'h-60 w-44 rounded-image'} src={movie?.logo} alt={movie?.title} />
				<div>
					<Field placeholder={'название'} type={'text'} defaultValue={movie?.title} />
					<Field placeholder={'описание'} type={'textarea'} defaultValue={movie?.review} />
					<div className={'flex gap-4'}>
						<Field placeholder={'год'} type={'text'} defaultValue={movie?.year} />
						<Field placeholder={'сериал?'} type={'text'} defaultValue={movie?.serial ? 'да' : 'нет'} />
						<Field placeholder={'возрастное ограничение'} type={'text'} defaultValue={movie?.rate_age} />
						<Field placeholder={'длительность'} type={'text'} defaultValue={movie?.length} />
						<Field placeholder={'доступ'} type={'text'} defaultValue={movie?.access ? 'платно' : 'бесплатно'} />
					</div>
				</div>
			</div>

			<div className={'flex gap-2 flex-wrap'}>
				{genres.map((item) => (<label key={item.cid} className={'flex w-60 gap-2 items-center'}>
					<input type='checkbox' /> <span>{item.title}</span>
				</label>))}

			</div>
			<div className={'flex gap-2 mt-8 flex-wrap'}>{collections.map((item) => (
				<label key={item.cid} className={'flex w-60 gap-2 items-center'}>
					<input type='checkbox' /> <span>{item.title}</span>
				</label>))}</div>
		</div>
	)
}

export default MovieEdit