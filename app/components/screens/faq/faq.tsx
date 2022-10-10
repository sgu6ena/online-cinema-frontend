import { FC } from 'react'
import FaqAccordion from '../../ui/faqAccordion/Faq'
import { FAQ } from './faq.data'

const Faq: FC = () => {
	return (
		<div className={'p-layout'}>
			{FAQ.map(q=><FaqAccordion title={q.question} answer={q.answer} key={q.question}/>)}

		</div>
	)
}

export default Faq