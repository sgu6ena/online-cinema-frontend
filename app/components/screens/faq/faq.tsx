import { FC } from 'react'
import FaqAccordion from '../../ui/faqAccordion/Faq'
import { FAQ } from './faq.data'
import Heading from '@/ui/heading/Heading'

const Faq: FC = () => {
	return (
		<div className={'p-layout'}>
		<Heading className={'mb-5'} title={'Вопросы и ответы'}/>

			{FAQ.map(q=><FaqAccordion title={q.question} answer={q.answer} key={q.question}/>)}

		</div>
	)
}

export default Faq