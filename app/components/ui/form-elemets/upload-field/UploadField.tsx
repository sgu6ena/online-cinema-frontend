import cn from 'classnames'
import {FC} from 'react'

import {IUploadField} from '../form.interfaces'
import styles from '../form.module.scss'
import {useUpload} from '../upload-field/useUpload'
import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "@/ui/SkeletonLoader";

const UploadField: FC<IUploadField> = ({
                                           onChange,
                                           value,
                                           error,
                                           folder,
                                           isNoImage = false,
                                           placeholder,
                                           style,
                                       }) => {
    const {uploadFile, isLoading} = useUpload(onChange, folder)

    return (
        <div className={cn((styles.field, styles.uploadField))} style={style}>
            <div className={styles.uploadFiles}>
                <label>
                    <span>{placeholder}</span>
                    <input type="file" onChange={uploadFile}/>
                    {error && <div className={styles.error}>{error.message}</div>}

                    {!isNoImage && <div className={styles.uploadImageContainer}>
                        {isLoading ? <SkeletonLoader count="1" className="w-full h-full"/> :
                            <Image alt='' src={value} layout='fill' unoptimized/>}
                    </div>}
                </label>
            </div>
        </div>
    )
}

export default UploadField
