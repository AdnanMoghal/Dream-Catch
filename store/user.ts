import {ActionTree, GetterTree, MutationTree} from "vuex";

export const state = () => ({
    user: {},
    ownUserList: {}
});

export const actions = {
    getUser({commit, state}, user) {
        commit('GET_USER', user);
    },

    getOwnUserList({commit, state}, userOwnList) {
        commit('GET_OWN_USER_LIST', userOwnList);
    }

};

export const mutations = {
   GET_USER(state, user) {
       state.user = user;
   },

   GET_OWN_USER_LIST(state, userOwnList) {
       state.ownUserList = userOwnList;
   }
};

export const getters = {

};