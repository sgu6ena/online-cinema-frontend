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

import {IMovieEditInput} from './movie-edit.interface'
import {useMovieEdit} from './useMovieEdit'
import dynamic from "next/dynamic";

const DynamicTextEditor = dynamic(() => import('../../../ui/form-elemets/TextEditor'), {
    ssr: false
})

const MovieEdit: FC = () => {
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        getValues,
        control,
    } = useForm<IMovieEditInput>({
        mode: 'onChange',
    })

    const {isLoading, onSubmit} = useMovieEdit(setValue)
    return (
        <Meta title="Редактирование фильма">
            <AdminNavigation/>
            <Heading title={'Редактирование фильма'}/>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {isLoading ? (
                    <SkeletonLoader count={3}/>
                ) : (
                    <>
                        <div className={styles.fields}>
                            <Field
                                {...register('title', {
                                    required: 'Название фильма обязательно!',
                                })}
                                placeholder="Название жанра"
                                error={errors.title}
                                style={{width: '31%'}}
                            />{' '}
                            <SlugField
                                generate={() => {
                                    setValue('slug', generateSlug(getValues('title')))
                                }}
                                register={register}
                                error={errors.slug}
                            />

                        </div>


                        <Button>Обновить</Button>

                    </>
                )}
            </form>
        </Meta>
    )
}

export default MovieEdit
