import {useState} from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{title:string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    car: {model: string}
    food: Array<string>
}



export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props;
    const [message, setMessage] = useState<string>("Hello")
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {restProps.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}