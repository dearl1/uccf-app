import axios from 'axios';

export function cuService() {
    return new Promise((resolve, reject) => {
        let url = 'https://v1.data.uccf.io/api/christian-unions/expand'
        axios.get(url)
            .then((response) => {
                resolve(response);
            });
    });
}
