import { FC } from 'react';

type Props = {
    src: string;
    width?: number;
    height?: number;
    className?: string;
    title?: string;
};

const Icon: FC<Props> = (props) => (
    <img
        className={props.className}
        width={props.width}
        height={props.height}
        src={props.src}
        alt="icon"
        title={props.title}
    />
);

Icon.defaultProps = {
    width: 20,
    height: 20,
    className: '',
    title: '',
};

export default Icon;
