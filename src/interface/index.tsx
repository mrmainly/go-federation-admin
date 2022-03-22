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
    color?: any,
    size?: any
}

interface userNameProps {
    handleDelete: any,
    title: any,
    id: number,
    handleText: any,
    description?: any,
    type: string,
    handleText2?: any,
    required?: boolean,
    handleCheckbox?: any
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

interface MySelectProps {
    variant?: string,
    options: any,
    title: string,
    sx?: any,
    placeholder?: string,
    ref?: any,
    defaultValue: string
}

interface FormProps {
    children: any,
    sx?: any,
    onSubmit?: any
}

interface InputProps {
    ref: any,
    label?: any,
    sx?: any,
    variant: any,
    rows?: number,
    id?: any,
    multiline?: any,
    type?: string,
    required?: any,
    InputLabelProps?: any,
    size?: any
}


export type {
    SearchInputProps,
    ButtonProps,
    MyTextProps,
    MySelectProps,
    FormProps,
    InputProps,
    userNameProps
}