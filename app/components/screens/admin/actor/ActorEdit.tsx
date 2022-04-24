import {FC} from 'react'
import {useForm, Controller} from 'react-hook-form'

import Meta from '../../../../utils/meta/Meta'
import {generateSlug} from '../../../../utils/string/generateSlug'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Button from '../../../ui/form-elemets/Button'
import Field from '../../../ui/form-elemets/Field'
import styles from '../../../ui/form-elemets/admin-form.module.scss'
import SlugField from '../../../ui/form-elemets/slugField/SlugField'
import Heading from '../../../ui/heading/Heading'

import {IActorEditInput} from './actor-edit.interface'
import {useActorEdit} from './useActorEdit'
import dynamic from "next/dynamic";

const DynamicTextEditor = dynamic(() => import('../../../ui/form-elemets/TextEditor'), {
    ssr: false
})

const ActorEdit: FC = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        getValues,
        control,
    } = useForm<IActorEditInput>({
        mode: 'onChange',
    })

    const {isLoading, onSubmit} = useActorEdit(setValue)
    return (
        <Meta title="Редактирование актера">
            <AdminNavigation/>
            <Heading title={'Редактирование актера'}/>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {isLoading ? (
                    <SkeletonLoader count={3}/>
                ) : (
                    <>
                        <div className={styles.fields}>
                            <Field
                                {...register('name', {
                                    required: 'Название актера обязательно!',
                                })}
                                placeholder="Имя актера"
                                error={errors.name}
                                style={{width: '31%'}}
                            />{' '}
                            <SlugField
                                generate={() => {
                                    setValue('slug', generateSlug(getValues('name')))
                                }}
                                register={register}
                                error={errors.slug}
                            />

                        </div>
                        {/*<Controller control={control} name='description' defaultValue='' render={({*/}
                        {/*                                                                              field: {*/}
                        {/*                                                                                  value,*/}
                        {/*                                                                                  onChange*/}
                        {/*                                                                              },*/}
                        {/*                                                                              fieldState: {error}*/}
                        {/*                                                                          }) => (*/}
                        {/*    <DynamicTextEditor onChange={onChange} value={value} error={error}*/}
                        {/*                       placeholder='Описание'/>*/}
                        {/*)}/>*/}

                        <Button>Обновить</Button>

                    </>
                )}
            </form>
        </Meta>
    )
}

export default ActorEdit
