import dynamic from 'next/dynamic'
import {FC} from 'react'
import {Controller, useForm} from 'react-hook-form'

import Meta from '../../../../utils/meta/Meta'
import {generateSlug} from '../../../../utils/string/generateSlug'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Button from '../../../ui/form-elemets/Button'
import Field from '../../../ui/form-elemets/Field'
import styles from '../../../ui/form-elemets/admin-form.module.scss'
import SlugField from '../../../ui/form-elemets/slugField/SlugField'
import UploadField from '../../../ui/form-elemets/upload-field/UploadField'
import Heading from '../../../ui/heading/Heading'

import {IMovieEditInput} from './movie-edit.interface'
import {useAdminActors} from './useAdminActors'
import {useAdminGenres} from './useAdminGenres'
import {useMovieEdit} from './useMovieEdit'
import Select from "../../../ui/form-elemets/select/Select";

const DynamicSelect = dynamic(
    () => import('../../../ui/form-elemets/select/Select'),
    {
        ssr: false,
    }
)

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
    const {isLoading: isActorLoading, data: actors} = useAdminActors()
    const {isLoading: isGenresLoading, data: genres} = useAdminGenres()
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
                                placeholder="Название фильма"
                                error={errors.title}
                            />
                            <SlugField
                                generate={() => {
                                    setValue('slug', generateSlug(getValues('title')))
                                }}
                                register={register}
                                error={errors.slug}
                            />

                            <Field
                                {...register('parameters.country', {
                                    required: 'URL фильма обязательно!',
                                })}
                                placeholder="Страна"
                                error={errors.title}
                                style={{width: '31%'}}
                            />
                            <Field
                                {...register('parameters.duration', {
                                    required: 'URL фильма обязательно!',
                                })}
                                placeholder="Продолжительность фильма"
                                error={errors.title}
                                style={{width: '31%'}}
                            />
                            <Field
                                {...register('parameters.year', {
                                    required: 'URL фильма обязательно!',
                                })}
                                placeholder="Год выхода"
                                error={errors.title}
                                style={{width: '31%'}}
                            />
                        </div>
                        <div className={styles.fields}>
                            <Controller
                                control={control}
                                name="genres"

                                render={({
                                             field,
                                             fieldState: {error},
                                         }) => (
                                    <DynamicSelect options={genres || []} error={error} placeholder="Жанры" isMulti
                                                   isLoading={isGenresLoading} field={field}/>

                                )}
                                rules={{required: 'Выберите хотя бы 1 жанр'}}
                            />

                            <Controller
                                control={control}
                                name="actors"

                                render={({
                                             field,
                                             fieldState: {error},
                                         }) => (
                                    <DynamicSelect options={actors || []} error={error} placeholder="Актеры" isMulti
                                                   isLoading={isGenresLoading} field={field}/>

                                )}
                                rules={{required: 'Выберите хотя бы 1 актера'}}
                            />
                        </div>
                        <div className={styles.fields} style={{marginTop: '20px'}}>
                            <Controller
                                control={control}
                                name="poster"
                                defaultValue=""
                                render={({
                                             field: {value, onChange},
                                             fieldState: {error},
                                         }) => (
                                    <UploadField
                                        onChange={onChange}
                                        value={value}
                                        placeholder={'Постер'}
                                        error={error}
                                        folder={'poster'}
                                    />
                                )}
                                rules={{required: 'Постер обязательно'}}
                            />
                            <Controller
                                control={control}
                                name="bigPoster"
                                defaultValue=""
                                render={({
                                             field: {value, onChange},
                                             fieldState: {error},
                                         }) => (
                                    <UploadField
                                        onChange={onChange}
                                        value={value}
                                        placeholder={'Большой постер'}
                                        error={error}
                                        folder={'bigposter'}
                                    />
                                )}
                                rules={{required: 'Большой постер обязательно'}}
                            />
                            <Controller
                                control={control}
                                name="videoUrl"
                                defaultValue=""
                                render={({
                                             field: {value, onChange},
                                             fieldState: {error},
                                         }) => (
                                    <UploadField
                                        onChange={onChange}
                                        value={value}
                                        placeholder={'Видео'}
                                        error={error}
                                        folder={'movies'}
                                        isNoImage
                                    />
                                )}
                                rules={{required: 'Видео обязательно'}}
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
