
class Authentification {
 authenticated: boolean;

    constructor(){
        this.authenticated = localStorage.getItem('token')? true: false;
    }


    isAuthentificated(){
        return this.authenticated;
    }

}

export default new Authentification(); 