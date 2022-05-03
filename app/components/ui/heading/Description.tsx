import {FC} from 'react';
import cn from "classnames";

const Description: FC<{ text: string, className?: string }> = ({text, className = ''}) => {
    return (
        <div className={cn('text-lg font-light text-white text-opacity-60', className)}>
            {text}
        </div>
    );
};

export default Description;