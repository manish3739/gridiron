import * as url from '../config/index';
import * as type from '../../utils/Constants'

export default class Api {

    static loginAPI(action: { login: any; password: any; }) {

        const login_url = url.BASE_URL + `login`;
        const users = {
            "user": {
                "login": action.login,
                "password": action.password
            }
        }
        return fetch(login_url, {
            method: type.POST_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then((data) => {
                return data;
            })
            .catch((e) => {
                throw e;
            });
    }
 
    static getCategoriesAPI(action: any) {

        const getCategories_url = url.BASE_URL+`api/v1/categories`;
        return fetch(getCategories_url, {
            method: type.GET_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data) => {
                return data;
            })
            .catch((e) => {
                throw e;
            });
    }
}
