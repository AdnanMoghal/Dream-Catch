import {ActionTree, GetterTree, MutationTree} from "vuex";


export interface ServerPostAnswer {
    user: any,
    message: string,
    tokens: any,
}

export const state = () => ({
    status: '',
    tokens: {},
    user: {},
});

export const actions = {
    getError(error) {
        console.log('error12345: ', error);
        // return error.commit('UPDATE_ERROR', error.response.data);
    }
};

export const mutations = {
    UPDATE_TOKEN: (state, response: ServerPostAnswer) => {
        state.tokens = response.tokens;
        state.tokens ? state.status = 'isLogin' : '';
    },

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