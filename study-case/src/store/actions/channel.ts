import request from "@/utils/request";

export const getChannels = () => {
    return async () => {
        const {data} = await request.get('/channels')
        console.log(data)
    }
}