import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInputValue] = useState('Bob esponja');

    const onChangeInput= ({target})=>{
        setInputValue(target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const newImputValue = inputValue.trim();
        if(newImputValue.length <=1)return;

        // onNewCategory((categories)=>[inputValue,...categories]);
        onNewCategory(newImputValue)
        setInputValue('');
    }
    
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange ={onChangeInput}
        />
        
    </form>
    
  )
}
