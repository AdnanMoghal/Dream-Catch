const tagsModule = {
    state: () => ({
        items: []
    }),
    mutations: {
        FETCH_ITEMS(state, items) {
            state.items = items;
        }
    },
    actions: {
        fetchItems({commit}, items) {
            commit("FETCH_ITEMS", items);
        }
    },
    getters: {
        getItems: state => state.items
    }
}
