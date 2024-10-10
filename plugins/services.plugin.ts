import TagsService from "~/services/tags.service";
import AuthService from "~/services/auth.service";
import ErrorService from "~/services/error.service";
import UsersService from "~/services/users.service";
import HttpService from "@/services/http.service";

let $service: any

declare module 'vue/types/vue' {
    interface Vue {
        $service: any
    }
}

export default async ({ app, store }, inject) => {
    ErrorService.init(store);
    await HttpService.init();

    $service = {
        tags: new TagsService(store),
        auth: new AuthService(store),
        users: new UsersService(store),
    };

    inject('service', $service);
};
