import TagsApiService from "./tags.api.service";
import UsersApiService from "~/services/api/users.api.service";
import AuthApiService from "~/services/api/auth.api.service";

class ApiService {
    constructor() {
        this.tags = TagsApiService;
        this.users = UsersApiService;
        this.auth = AuthApiService;
    }
}

export default new ApiService();