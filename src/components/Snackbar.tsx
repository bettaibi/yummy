import React, { useImperativeHandle, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ComponentState{
    message: string;
    isShown: boolean;
    type: string;
}

enum SnackbarType{
    ERROR = 'error',
    SUCCESS = 'success'
}

const defaultType = SnackbarType.SUCCESS;

const Snackbar = React.forwardRef<HTMLDivElement, any>((props, forwardedRef: any) => {
    const portal = document.getElementById('portal');
    const [snackbarState, setSnackbarState] = useState<ComponentState>({message: '', isShown: false, type: defaultType});
    useImperativeHandle(forwardedRef, () => ({
        openSackbar
    }));

    const openSackbar = (message: string, type?: string) =>{
        setSnackbarState({isShown: true, message: message, type: type || defaultType });
    }

    useEffect(()=>{
        if(snackbarState.isShown){
          var timer = setTimeout(()=>{
                setSnackbarState({isShown: false, message: '', type: defaultType });
            },3000);
        }

        return ()=>{
            clearTimeout(timer)
        }
    }, [snackbarState.isShown]);
 
    if(!portal) return null;
    if (!snackbarState.isShown) return null;
    
    return (
        ReactDOM.createPortal(
         <div className={`snackbar open ${snackbarState.type}`} ref={forwardedRef}>
            <span>
                {snackbarState.message}
            </span>   
          </div>,
          portal
        )
    )
})

const useSnackbar = () =>{
    const snackbarRef = useRef<any>(null);
    
    const showMsg = (msg: string, type?: string) =>{
        snackbarRef.current.openSackbar(msg, type);
    }

    return{
        snackbarRef,
        showMsg
    }
}


export  { Snackbar, useSnackbar, SnackbarType }
