import React from 'react';

interface IBoundary{
    hasError: boolean;
}

class ErrorBoundary extends  React.Component{
    state: IBoundary;

    constructor(props: any){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }
    
    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
    }

    render(){
        const {hasError} = this.state;

        if(hasError) return(
            <h1>Oops something wrong...</h1>
        )

        return this.props.children;
    }
}

export default ErrorBoundary;