import HttpService from "~/services/http.service";

export default class AuthApiService {
    static async registration({user, password, email}) {
        return HttpService.post('auth/register', {
            user,
            password,
            email
        });
    }

    static async login({email, password}) {
        return HttpService.post("auth/login", {
            email,
            password
        });
    }

    static async logOut() {
        return HttpService.post('auth/logout');
    }

    // async deleteTag({entity_id, comment_number}) {
    //     return HttpService.delete("tags", {
    //         data: {
    //             entity_id,
    //             comment_number
    //         }
    //     })
    // }
}

