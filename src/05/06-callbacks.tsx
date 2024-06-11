// const callback = () => {
//     alert('hey')
// }
//
// window.setTimeout(callback,1000)
import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    return <div> <textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="search" onClick={search}>search</button>
    </div>
}