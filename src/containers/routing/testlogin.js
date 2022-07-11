
export const isLogin=() => {
    localStorage.getItem('user');
    if(isLogin){
       return true;
    } else{
        return false;
    }
}