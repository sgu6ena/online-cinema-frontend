import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import { GenreFormData, useGenre } from '@/screens/admin/genres/useGenre'
import Button from '@/ui/form-elemets/Button'
import Image from 'next/image'
import { useFAQs } from '@/screens/admin/faq/useFAQs'

const FaqEdit: FC = () => {
	const { query } = useRouter()
	const faqId = query.id && String(query.id)
	const { faqs, isLoading, updateLoading, updateAsync,  } = useFAQs()

	const { handleSubmit, formState, register } = useForm({
		mode: 'onChange',
	})

	const currentFaq = faqs.find((faq:any)=>faq.id==faqId)

	const onSave = async (data: any) => {
			await updateAsync({ ...data, id:faqId } )
	}


	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Редактирование FAQ'} />
					<Subheading title={faqs?.name || ''} />
				</div>
			</div>

			{isLoading  ? <p>загрузка...</p> :
				<form onSubmit={handleSubmit(onSave)}>

					<div className={'flex flex-col gap-4'}>
						<Field className={"w-full"} {...register('title')} defaultValue={currentFaq?.title} placeholder={'вопрос '} />
						<Field className={"w-full"} {...register('text')} type={'textarea'} defaultValue={currentFaq?.text} placeholder={'Ответ'} />

					</div>


					<div className={'flex  gap-4 my-1'}>
						<Button type='submit' disabled={!formState.isValid}>
							Сохранить изменения
						</Button>
						<Button style={{ background: 'darkgray' }}>Отмена</Button>
					</div>
				</form>
			}


		</div>
	)
}

export default FaqEdit