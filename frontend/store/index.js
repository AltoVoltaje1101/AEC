export const state = ()=>{
    token: ""
}
export const mutations = {
    SET_TOKEN(state, value){
        state.token = value;
    }
}