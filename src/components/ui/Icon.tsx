interface Props {
    src: string,
    alt?: string,
    hidden?: boolean,
    size?: number
}
export default function Icon({ src, alt, hidden, size }: Props) {
    return (
        <img
            src={src}
            alt={hidden ? "" : alt}
            aria-hidden={hidden}
            width={size ? size : undefined}
        />
    )
}
