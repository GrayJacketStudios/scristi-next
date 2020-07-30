import style from './mcard.module.css'

export default (props) => {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}