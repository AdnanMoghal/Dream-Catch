import api from "~/services/api/api.service";

export default class TagsService {
    constructor(store) {
        this.store = store;
    }

    async fetchTags({id, limit, page}) {
        const data = await api.tags.getTagsForEntity({id, limit, page});

        if (!data) return;

        await this.store.dispatch("tags/fetchItems", data);
    }
}