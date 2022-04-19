import {FC} from 'react'
import {useForm, Controller} from 'react-hook-form'

import Meta from '../../../../utils/meta/Meta'
import {generateSlug} from '../../../../utils/string/generateSlug'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Button from '../../../ui/form-elemets/Button'
import Field from '../../../ui/form-elemets/Field'
import TextEditor from '../../../ui/form-elemets/TextEditor'
import styles from '../../../ui/form-elemets/admin-form.module.scss'
import SlugField from '../../../ui/form-elemets/slugField/SlugField'
import Heading from '../../../ui/heading/Heading'

import {IGenreEditInput} from './genre-edit.interface'
import {useGenreEdit} from './useGenreEdit'
import dynamic from "next/dynamic";

const DynamicTextEditor = dynamic(() => import('../../../ui/form-elemets/TextEditor'), {
    ssr: false
})

const GenreEdit: FC = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        getValues,
        control,
    } = useForm<IGenreEditInput>({
        mode: 'onChange',
    })

    const {isLoading, onSubmit} = useGenreEdit(setValue)
    return (
        <Meta title="Редактирование жанра">
            <AdminNavigation/>
            <Heading title={'Редактирование жанра'}/>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {isLoading ? (
                    <SkeletonLoader count={3}/>
                ) : (
                    <>
                        <div className={styles.fields}>
                            <Field
                                {...register('name', {
                                    required: 'Название жанра обязательно!',
                                })}
                                placeholder="Название жанра"
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
                            <Field
                                {...register('icon', {
                                    required: 'Иконка для жанра обязательна!',
                                })}
                                placeholder="Иконка для жанра"
                                error={errors.icon}
                                style={{width: '31%'}}
                            />
                        </div>
                        <Controller control={control} name='description' defaultValue='' render={({
                                                                                                      field: {
                                                                                                          value,
                                                                                                          onChange
                                                                                                      },
                                                                                                      fieldState: {error}
                                                                                                  }) => (
                            <DynamicTextEditor onChange={onChange} value={value} error={error}
                                               placeholder='Описание'/>
                        )}/>

                        <Button>Обновить</Button>

                    </>
                )}
            </form>
        </Meta>
    )
}

export default GenreEdit
