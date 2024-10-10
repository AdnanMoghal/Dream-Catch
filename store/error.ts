import {ActionTree, GetterTree, MutationTree} from "vuex";

export const state = () => ({
    error: '',
});

export const actions = {
    getErrorLogin(error) {
        console.log('error12345: ', error);
        // return error.commit('UPDATE_ERROR', error.response.data);
    }
};

export const mutations = {


    UPDATE_ERROR(state, response) {
        // console.log('work!!!', state, response);
        // return state.error = response
    }
};

export const getters = {
    LOGIN(state) {
        return state.user;
    }
};