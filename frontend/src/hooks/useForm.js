import { useState } from "react";

export default function useForm() {
    const [inputState, setInputState] = useState({
        name: '',
        email: '',
        work: '',
        imgname: '',
    });
    const [records, setRecords] = useState([]);

    const handleOnchange = (e) => {
        const {name, value} = e.target;
        setInputState({
            ...inputState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return { inputState, handleOnchange};
}
