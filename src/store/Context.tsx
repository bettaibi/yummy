import React from 'react';
import { IRecipe, IUser } from '../models/app.model';
import { getCurrentUser } from '../services/UserService';

interface IContext{
    currentUser?: IUser,
    recipes?: IRecipe[];
}

const INITIAL_VALUE: IUser = {
    email: '',
    id: '',
    name: '',
    credential: ''
};

const Context = React.createContext<IContext>({currentUser: INITIAL_VALUE, recipes: []});

class Provider extends React.Component{
  
    constructor(props: any){
        super(props);
        this.state = {
            currentUser: INITIAL_VALUE,
            recipes: []
        };
        console.log("my provider class component")
    };

    componentDidMount() : void{
        this.getCurrentConnectedUser();
    };

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

    render(): JSX.Element{

        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
    
}

export  {Provider, Context};