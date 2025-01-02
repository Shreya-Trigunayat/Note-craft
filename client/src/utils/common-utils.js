export const getAccessToken = () => {
    const token = sessionStorage.getItem('accessToken');
    return token ? token : '';
};
export const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
}
export const addElipsis= (str, limit)=>{
    return str.length> limit? str.substring(0,limit)+ '...': str;
}
export const getType=(value, body)=>{
    if(value.params){
        return {params: body}
    }else if(value.query){
        if(typeof body === 'object'){
            return {query: body._id}
        }else{
            return {query: body}
        }
    }
    return {};
}