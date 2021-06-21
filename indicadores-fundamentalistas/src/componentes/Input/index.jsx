

const Input = (props) => {

    return (

            <input onBlur={props.loadData} type="text" value={props.valorTicker} onChange={e => props.atualizaTicker(e.target.value)} />

    );

}

export default Input;