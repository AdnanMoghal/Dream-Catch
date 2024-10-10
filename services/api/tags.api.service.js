import HttpService from "~/services/http.service";

export default class TagsApiService {
    static async  createTag({entity_id, tag}) {
        return HttpService.post("tags", {
            entity_id,
            tag
        });
    }

    static async  getTagsForEntity({id, limit, page}) {
        return HttpService.get(`tags/${id}`, {
            params: {
                limit,
                page
            }
        });
    }

    static async  deleteTag({entity_id, comment_number}) {
        return HttpService.delete("tags", {
            data: {
                entity_id,
                comment_number
            }
        })
    }
}

