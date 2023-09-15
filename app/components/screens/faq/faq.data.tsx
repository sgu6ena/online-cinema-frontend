import { ReactElement } from 'react'
import Link from 'next/link'

export const FAQ: { question: string, answer: ReactElement<any, any> }[] = [
	{
		question: 'Что такое PORTAL?',
		answer: <div> PORTAL – это онлайн-кинотеатр, который позволяет смотреть любимые фильмы, сериалы и ТВ-шоу на
			смартфоне, планшете, компьютере, Smart TV и ТВ-приставках.</div>,
	},
	{
		question: 'Как смотреть?',
		answer: <div>
			<p><strong>Шаг 1. </strong> Скачайте и установите PORTAL</p>
			<p><strong>Шаг 2. </strong> Запустите сервис</p>
			<p><strong>Шаг 3. </strong> Пройдите авторизацию</p>
			<p><strong>Шаг 4. </strong> Выберете контент для просмотра</p>
			<p>После авторизации будет доступен к просмотру бесплатный контент.</p>
		</div>,
	},
	{
		question: 'Как смотреть платный контент?',
		answer: <div>
			<p>Для просмотра платного контента нужна подписка. Оформить ее можно в разделе{' '}
				 <Link href='/settings/subscriptions'><a className='underline underline-offset-8 hover:text-primary'>«Профиль» → «Мои подписки»</a></Link>.
			</p>
			<p>Сейчас есть подписки на 1, 3 и 6 месяцев. По окончании действия подписки она продлевается на аналогичный
				период.</p>
		</div>,
	},
	{
		question: 'Как оплатить подписку?',
		answer: <div>При оформлении подписки выберите тип оплаты - мобильный телефон или интернет. Деньги будут списываться
			с лицевого счёта.</div>,
	},
	{
		question: 'Как изменить подписку?',
		answer: <div>
			<p> Если у вас уже есть действующая подписка, при повторном заказе произойдёт автоматический отказ от действующей
				подписки.</p>
			<p> Списание денежных средств и включение новой подписки произойдёт по окончании действующей.</p>
			<p> Если у вас уже есть заказ на новую подписку, и вы хотите заказать еще одну, старый заказ автоматически
				удалится.</p>
		</div>,
	}, {
		question: 'Как отменить подписку?',
		answer: <div>
			Отменить подписку можно в разделе <Link href='/settings/subscriptions'><a className={'underline underline-offset-8 hover:text-primary'}>«Профиль» → «Мои подписки»</a></Link>, нажав
			кнопку «Отменить подписку». Отключение
			произойдёт по окончании оплаченного периода.
		</div>,
	}, {
		question: 'Что такое «14 дней за 1 рубль»?',
		answer: <div>

			<p><strong>«14 дней за 1 рубль» </strong> – это тестовый период для новых пользователей всего за 1 рубль. В
				течение 14 дней вы получаете доступ к платному контенту и можете полноценно пользоваться всеми функциями
				сервиса.</p>

			<p>По окончании тестового периода у вас автоматически включится подписка на 1 месяц за 32 рубля.</p>

		</div>,
	}, {
		question: 'На каких устройствах возможен просмотр?',
		answer: <div>
			<ol className={'list-decimal pl-4'}>
				<li> На сайте portal.idc.md</li>
				<li> Смартфоны и планшеты на Android.</li>
				<li> Смартфоны и планшеты на IOS.</li>
				<li> ТВ-приставки и телевизоры на Android TV.</li>
				<li> Smart TV Samsung ― телевизоры с Tizen 20XX года и выше.</li>
				<li> Smart TV LG ― телевизоры с WebOS 3.0 и выше.</li>
				<li> Smart TV Hisense ― телевизоры с Vidaa ХХ и выше.</li>
			</ol>
		</div>,
	}, {
		question: 'Как подключить PORTAL на телевизоре?',
		answer: <div>
			<p>
				<strong>Шаг 1. </strong>
				Установите и откройте приложение IDC PORTAL на Smart TV.
			</p>
			<p>
				<strong>Шаг 2. </strong>
				Зайдите в свой профиль на сайте или в мобильном приложении и откройте раздел <Link href={'/settings/devices'}><a className='underline underline-offset-8 hover:text-primary'>«Устройства»</a></Link>.
			</p>
			<p>
				<strong>Шаг 3. </strong>
				Введите код с экрана телевизора на сайте или в мобильном приложении и нажмите «Подключить ТВ».
			</p>
			<p>
				<strong>Шаг 4. </strong>
				Вот и всё – вы подключили PORTAL! Теперь вам доступны любимые фильмы, сериалы и ТВ-шоу в Smart TV.
			</p>
		</div>,
	}, {
		question: 'Как активировать промокод?',
		answer: <div>Промокоды на подписку PORTAL распространяются в рамках различных акций. Активировать промокод можно в
			разделе {' '}
			<Link href='/settings/promocode'><a  className='underline underline-offset-8 hover:text-primary'>«Профиль» → «Промокод»</a></Link>.
		</div>,
	},


]