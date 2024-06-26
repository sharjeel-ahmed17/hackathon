import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import '../node_modules/react-toastify/dist/ReactToastify.css';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const ToastNotifications = () => {
    const notifySuccess = () => {
        toast.success('This is a success message!', {

        });
    };

    const notifyError = () => {
        toast.error('This is an error message!', {

        });
    };

    const notifyWarning = () => {
        toast.warn('This is a warning message!', {

        });
    };

    const notifyInfo = () => {
        toast.info('This is an info message!', {
        });
    };

    return (
        <div>
            <button onClick={notifySuccess}>Show Success</button>
            <button onClick={notifyError}>Show Error</button>
            <button onClick={notifyWarning}>Show Warning</button>
            <button onClick={notifyInfo}>Show Info</button>
            <ToastContainer />
        </div>
    );
};

export default ToastNotifications;
