import s from './FormsControls.module.css'


export const NewPostInput = ({input, meta, ...props}) => {
    const hasError = meta.error
    return <div className={s.newPost + ' ' + (hasError ? s.error : '')}>
        <div><input  {...input} {...props} type="text"/></div>
        {hasError ? <span>Ошибка</span> : null}
    </div>
}

export const LoginRequiredInput = ({input, meta, ...props}) => {
    const hasError = meta.touched
    return (
      <div className={s.loginRequiredBlock}>
          <div><input  {...input} {...props} type="text" /></div>
          <div>{hasError ? <span>Поле затачено</span> : null}</div>
      </div>
    )
}