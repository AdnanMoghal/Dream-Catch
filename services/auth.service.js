import api from "~/services/api/api.service";
import HttpService from "@/services/http.service";

export default class AuthService {
    constructor(store) {
        this.store = store;
    }

    async login({email, password}) {
        const data = await api.auth.login({email, password});

        if (data) {
            localStorage.setItem('atoken', JSON.stringify(data.data.tokens));
            localStorage.setItem('user', JSON.stringify(data.data.user));
            localStorage.setItem('isLogin', 'true');
            await HttpService.setToken();
        }

        if (!data) return;
    }

    async logOut() {
        localStorage.clear();
        await HttpService.removeToken();
    }

    async fetchTags({id, limit, page}) {
        const data = await api.tags.getTagsForEntity({id, limit, page});

        if (!data) return;

        await this.store.dispatch("tags/fetchItems", data);
    }
}