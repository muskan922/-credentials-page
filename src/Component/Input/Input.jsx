import './Input.css'
function Input(props) {
    return (
        <input type={props.tp} 
        placeholder={props.ph} 
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        />
    )

}
export default Input;                                                                                                                                                                                                                                                                                                                                                                                                                        