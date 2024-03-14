import axios from "axios";

export const fetcher = url => {
    axios.defaults.withCredentials = true;
    return (
        axios.request({
            // headers: {
            //     'Authorization': 'Bearer ' + 'abcdefghjklm'
            // },
            method: "GET",
            url: url
        })
            .then(res => res.data)

    )
}
