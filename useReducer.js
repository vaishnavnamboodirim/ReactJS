import React  from "react";
import { useReducer } from "react";


const formReducer = (state, action) => {
    switch(action.type){
        case "HANDLE INPUT TEXT":
        return{
            ...state,[action.field]:action.payload,
        };
        case "TOGGLE CONSENT":
            return {
                ...state, [action.hasConsented]: !state.hasConsented,
            }
    }
}

const  initialFormState = {
    username: "",
    email:"",
    password:"",
    hasConsented: false,
};

const Form = () => {

    
    const [formState, dispatch] = useReducer{formReducer,initialFormState};

    const handleTextChange = (e) =>{
        dispatch({
            type: "HANDLE INPUT TEXT",
            field: e.target.name,
            payload: e.target.value,
        });
    };

    return (
        <form>
            <label>
                Username:
                <input type={text} name="username" value={formState.username}
                onChange={(e)=> handleTextChange(e)} />
            </label>
            <label>
                Email:
                <input type={text} name="email" value={formState.email}
                onChange={(e)=> handleTextChange(e)} />
            </label>
            <label>
                Password:
                <input type={text} name="password" value={formState.password}
                onChange={(e)=> handleTextChange(e)} />
            </label>
            <label>
                Consent to terms and conditions:
                <input 
                type = "checkbox" checked={formState.hasConsented} value={formState.hasConsented}
                onChange={()=> dispatch({type:"TOGGLE CONSENT"})} />
            </label>
        </form>
    );

};

export default Form;
