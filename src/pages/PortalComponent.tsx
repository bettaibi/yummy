import React from 'react';
import ReactDOM from 'react-dom';

export class PortalComponent extends React.Component{
    element: HTMLDivElement;

    constructor(props: any){
        super(props);

        this.element = document.createElement('div');
    }

    componentDidMount(): void{
        const forModal = 'flex-center'; 
        this.element.className = 'overlay-container d-flex flex-column fadeIn';
        document.body.appendChild(this.element);
    }


    componentWillUnmount(): void{
        this.element.remove();
    }

    render(){
        return(
            ReactDOM.createPortal(this.props.children, this.element)
        )
    }


}