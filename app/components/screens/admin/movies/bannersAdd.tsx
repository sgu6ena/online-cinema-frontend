import ImageAdd from '@/screens/admin/movies/imageAdd'
import { useRouter } from 'next/router'

const BannersAdd = () => {
	const { query } = useRouter()
	const slide1 = 'https://portal.idc.md/img/slide/'+query.id+'.1.jpg'
	const slide2 ='https://portal.idc.md/img/slide/'+query.id+'.2.jpg'
	const back = 'https://portal.idc.md/img/back/'+query.id+'.2.jpg'
	return (
		<div className={'ml-8 flex gap-4 items-center'}>

			<ImageAdd title={'горизонтальный баннер'} type={'slide2'} movieId={query.id as string} link={slide2}/>
			<ImageAdd title={'вертикальный баннер (мобильный)'} type={'slide1'} movieId={query.id as string}  link={slide1}/>
			<ImageAdd title={'задник'} type={'back'} movieId={query.id as string}  link={back}/>


		</div>
	)
}

export default BannersAdd