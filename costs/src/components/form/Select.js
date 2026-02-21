import styles from './Select.module.css'

// Mudei 'handleChange' para 'handleOnChange' aqui embaixo:
function Select({ text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} // <--- Agora o nome bate com o ProjectForm
                value={value || ''}
            > 
                <option value="">Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
