import { FC, useEffect, useState } from 'react'
import Field from '@/ui/form-elemets/Field'
import { useForm } from 'react-hook-form'
import Button from '@/ui/form-elemets/Button'
import { useMovieImage } from '@/screens/admin/movies/useMovieImage'
import MaterialIcon from '@/ui/MaterialIcon'

interface IImageAdd {
	title: string
	type: 'slide1' | 'slide2'
	movieId: string
	link?:string
}

const ImageAdd: FC<IImageAdd> = ({ type, title, movieId, link }) => {
	const { handleSubmit, register } = useForm({
		mode: 'onChange',
	})
	const [key, setKey] = useState(0);

	const [isComplete, setIsComplete] = useState(false)
	const { createAsync, status, isLoading } = useMovieImage()
	const submit = (data: any) => {
		data.id = movieId
		data.type = type
		createAsync(data).then(()=>setKey(key + 1))
	}
	useEffect(()=>{},[key, isComplete])
	return (
		<form className={'p-8 rounded-3xl flex flex-col justify-center align-center  air-block'}
					onSubmit={handleSubmit(submit)}>

			<h3 className={'text-3xl mb-4 '}>{title}</h3>
			<img className={'h-auto max-w-[320px] w-full rounded-image'} key={key} src={link} alt={title} />
			{status === 'idle' && <p className={'flex text-xl gap-4 items-center'}><MaterialIcon name={'MdDownload'} />загрузить баннер</p>}
			{status === 'loading' && <p className={'flex gap-4 text-xl items-center'}><MaterialIcon name={'MdDownloading'} />загрузка файла</p>}
			{status === 'success' &&<p className={'flex gap-4 text-xl items-center'}><MaterialIcon name={'MdDownloadDone'} />успешно загружено</p>}
			{status === 'error' && <p className={'flex gap-4 text-xl items-center'}><MaterialIcon name={'MdError'} />ошибка при загрзке</p>}
			<Field {...register('file')} type={'file'} placeholder={'загрузить картинку '} />
			<Button type={'submit'} disabled={status === 'loading' } >Загрузить</Button>

		</form>
	)
}

export default ImageAdd