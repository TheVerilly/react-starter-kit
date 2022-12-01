import { FC } from 'react';

type Props = {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    title?: string;
};

const Icon: FC<Props> = ({ width = 20, height = 20, src = '', title = '', className = '' }) => {
    return <img className={className} width={width} height={height} src={src} alt="icon" title={title} />;
};

export default Icon;
