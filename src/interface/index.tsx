interface SearchInputProps {
    placeholder: string,
    width?: number
}

interface ButtonProps {
    children: any,
    onClick?: () => void,
    variant?: string,
    style?: any,
    sx?: any,
    color?: any
}

interface MyTextProps {
    children: any,
    sx?: any,
    lg?: number,
    xl?: number,
    sm?: number,
    md?: number,
    xs?: number,
    variant?: any
}


export type {
    SearchInputProps,
    ButtonProps,
    MyTextProps
}