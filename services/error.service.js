import api from "~/services/api/api.service";

export default class ErrorService {
    static store;

    static init(store) {
        ErrorService.store = store;
    }

    static async wrongLogin(error) {
        // console.log(error);
        // console.log(this.store);

        // await this.store.dispatch('error/getErrorLogin', error);
        // console.log(this.store.dispatch('error/getErrorLogin'));
       // await this.store.dispatch('auth/getError', error.data);
    }
}