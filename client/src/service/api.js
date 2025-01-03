import axios from 'axios';

import {API_NOTIFICATION_MESSAGES, SERVICE_URLS} from '../constants/config';
import {getAccessToken, getType} from '../utils/common-utils';

const API_URL= 'http://localhost:8000';
const axiosInstance= axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers:{
        "content-type": "application/json"
    }
})
axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    function (response){
        //stop global loader 
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }
)
//if success-> return {isSuccess: true, data: Object}
//if fail-> return {isFailue: true, status: string, msg: string, code: int}
const processResponse=(response)=>{
    if(response?.status ===200){
        return{
            isSuccess: true,
            data: response.data
        }
    }else{
        console.error('Non-200 response:', response);
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError=(error)=>{
    if(error.response){
        //request successfull made and server responded with a status code other than 200
        console.log('ERROR IN RESPONSE', error.toJSON());
        return{
            isError: true,
            msg: error.response.data.msg || API_NOTIFICATION_MESSAGES.responseFailure.message,
            code: error.response.status,
        }
    }else if(error.request){
        //request made but no response, means frontend not connect with backend
        console.log('ERROR IN REQUEST', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure.message,
            code: '',
        };
    }else{
        //no request and response simply a string, something happend in setting up request that triggers n error
        console.log('ERROR IN NETWORK', error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError.message,
            code: '',
        };
    }
}
const API={};

for(const [key, value] of Object.entries(SERVICE_URLS)){
    API[key]= (body, showUploadProgress, showDownloadProgress)=>{
        const config= {
            method: value.method,
            url: value.url,
            data: value.method=== 'DELETE' ? {} :body,
            responseType: value.responseType,
            headers:{
                authorization: getAccessToken()
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        };
    
        return axiosInstance(config);
    };
}
export {API};