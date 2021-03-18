export const required = (value) => {
    return value ? undefined : 'Поле обязательно'
}

export const maxLengthCreator = (maxLength) => (value) =>{
    return value && value.length > maxLength ? `Максимальная длина ${maxLength} символов` : undefined
}