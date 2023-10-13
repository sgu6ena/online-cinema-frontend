import { FC, ReactElement } from 'react'
const link = 'https://portal.idc.md/dune/update/dune_plugin_portal_latest.zip'

const STEPS: { number: string, text: string|ReactElement, img?: string }[] = [
	{
		number: '1',
		text: <>Для того, чтобы воспользоваться сервисом PORTAL на медиаплеерах DuneHD, необходимо <a className={'border-b-2'} href={link}>скачать</a> и установить плагин.</>,
	},
	{
		number: '2',
		text: 'Скачайте его на флешку (без распаковки).',
	},
	{
		number: '3',
		text: 'Подключите флешку к вашему медиаплееру DuneHD.',
	},
	{
		number: '4',
		text: 'В главном меню выберите раздел «Источники», затем выберите и откройте источник «USB-накопитель». ',
		img: '/images/smart/dune/4.jpg',
	},
	{
		number: '5',
		text: 'Установите курсор на архиве плагина и нажмите на пульте кнопку ENTER. Начнется процесс установки плагина. ',
		img: '/images/smart/dune/5.jpg',
	},
	{
		number: '6',
		text: 'По завершению установки Вам будет предложено запустить плагин. Запустите его. ',
		img: '/images/smart/dune/6.jpg',
	},
	{
		number: '7',
		text: 'Для запуска приложения IDC Portal в главном меню приставки выберите раздел ТВ и нажмите на пульте кнопку ENTER. ',
		img: '/images/smart/dune/7.jpg',
	},
	{
		number: '8',
		text: 'После запуска приложения, для авторизации, нажмите на пульте зеленую «кнопку B». ',
		img: '/images/smart/dune/8.jpg',
	},
	{
		number: '9',
		text: 'Введите логин/ e-mail/ номер телефона и пароль. ',
		img: '/images/smart/dune/9.jpg',
	},
	{
		number: '10',
		text: 'Авторизация завершена.  Теперь можно наслаждаться сервисом PORTAL нового поколения.',
		img: '/images/smart/dune/10.jpg',
	},
	{
		number: '11',
		text: 'Для просмотра статуса Подписки и срока ее действия нажмите на пульте зеленую «кнопку В».',
		img: '/images/smart/dune/11.jpg',
	},

]

const DuneIns: FC = () => {
	return (
		<div className={'flex flex-wrap'}>
			{STEPS.map(step => (
				<div className={step.img?'lg:w-1/2 w-full p-10':"w-3/5 m-auto"}>
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

export default DuneIns