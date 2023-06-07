import ImageAdd from '@/screens/admin/movies/imageAdd'
import { useRouter } from 'next/router'

const BannersAdd = () => {
	const { query } = useRouter()
	const slide1 = 'https://portal.idc.md/img/slide/'+query.id+'.1.jpg'
	const slide2 ='https://portal.idc.md/img/slide/'+query.id+'.2.jpg'
	return (
		<div className={'ml-8 flex gap-4 items-center'}>
			{/*<img className={'h-60 w-60 rounded-image'} src={slide1} alt={'вертикальный баннер'} />*/}
			<ImageAdd title={'вертикальный баннер'} type={'slide1'} movieId={query.id as string}  link={slide1}/>

			{/*<img className={'h-60 w-auto rounded-image'} src={slide2} alt={'горизонтальный баннер'} />*/}
			<ImageAdd title={'горизонтальный баннер'} type={'slide2'} movieId={query.id as string} link={slide2}/>
		</div>
	)
}

export default BannersAdd