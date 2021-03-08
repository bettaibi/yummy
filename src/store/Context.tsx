import React from 'react';
import { IRecipe, IUser } from '../models/app.model';
import { getCurrentUser } from '../services/UserService';
import axios from 'axios';

interface IContext{
    currentUser?: IUser,
    recipes?: IRecipe[];
    query: string;
}

const INITIAL_VALUE: IUser = {
    email: '',
    id: '',
    name: '',
    credential: ''
};

const Context = React.createContext<any>({currentUser: INITIAL_VALUE, recipes: [], query: ''});

const APP_ID = process.env.REACT_APP_RECIPE_ID;
const APP_KEY = process.env.REACT_APP_RECIPE_KEY;

const BaseURL = `https://api.edamam.com/search`;

class Provider extends React.Component{
    state: IContext;

    constructor(props: any){
        super(props);
        this.state = {
            currentUser: INITIAL_VALUE,
            recipes: [],
            query: 'pizza'
        };
        console.log("my provider class component")
        
    };

    componentDidMount() : void{
        console.log(this.state)
        this.getCurrentConnectedUser();
    };

    componentDidUpdate(): void{
        console.log(this.state.query)
        console.log('Context component updated')
        this.getRecipies();
    }

    async getCurrentConnectedUser(){
        try{
            const id = localStorage.getItem('token');
            if(id){
                const found = await getCurrentUser(id);
                if(found.success){
                    this.setState({currentUser: found.data});
                }
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    async getRecipies(){
        try{
            const res = await axios.get(`${BaseURL}?q=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
            const data = await res.data;
            console.log(data)
        }
        catch(err){
            throw err;
        }
    }

    updateQuery = (q: string) =>{
        this.setState({query: q});
    };

    render(): JSX.Element{

        return (
            <Context.Provider value={{state: this.state, setQuery: this.updateQuery}}>
                {this.props.children}
            </Context.Provider>
        )
    }
    
}

export  {Provider, Context};