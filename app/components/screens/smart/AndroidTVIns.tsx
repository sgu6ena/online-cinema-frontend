
import styles from './smart.module.scss'
import { FC, ReactElement } from 'react'

const STEPS: { number: string, text: string|ReactElement, img?: string }[] = [
	{
		number: '1',
		text:'Для установки PORTAL откройте приложение Google Play.',
		img:'/images/smart/android1.jpg',
	},
	{
		number: '2',
		text: 'В разделе поиск введите "IDC Portal".',
		img:'/images/smart/android2.jpg',
	},
	{
		number: '3',
		text: 'Выберите и установите приложение "IDC Portal" на ваш телевизор.',
		img:'/images/smart/samsung/3.jpg',
	},
	{
		number: '4',
		text: 'Запустите приложение, нажав кнопку “Открыть”. ',
		img: '/images/smart/samsung/4.jpg',
	},
	{
		number: '5',
		text: 'На экране выберите "Войти с помощью мобильного приложения". Нажмите кнопку “Ок/Enter” на пульте. ',
		img: '/images/smart/samsung/5.jpg',
	},
	{
		number: '6',
		text: <>Запустите приложение PORTAL на смартфоне. <br/>
			Перейдите в раздел “Профиль” и откройте пункт “Устройства”.<br/>
			Введите код из 6 цифр с экрана телевизора. <br/>
			Нажмите кнопку “Подключить ТВ”. </>,
		img: '/images/smart/samsung/6.jpg',
	},

]
const AndroidTVIns: FC = () => {
	return (
		<div className={'flex flex-wrap'}>
			{STEPS.map(step => (
				<div key={step.number} className={step.img?'lg:w-1/2 w-full p-10':"w-3/5 m-auto"}>
					{ step.img?<img src={step.img}/>:'' }
					<div className={'flex items-center py-2 gap-6'}>
						<div className={'w-14 h-14 lg:w-20 lg:h-20 font-bold  bg-white rounded-full flex justify-center items-center btn-primary grow-0 shrink-0 text-3xl lg:text-5xl'}>{step.number}</div>
						<p className={'text-start text-white text-xl'}>{step.text}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default AndroidTVIns