import { User } from "./types";

export const enum LoadingState {
    IDLE = "IDLE",
    REQUEST = "REQUEST",
    SUCCESS = "DONE",
    FAILURE = "FAILURE"
  }

export const defualtEmptyUser: User = {
    "id": 0,
    "name": '',
    "username": '',
    "email": '',
    "address": {
        "street": '',
        "suite": '',
        "city": '',
        "zipcode": '',
        "geo": {
            "lat": '',
            "lng": ''
        }
    },
    "phone": '',
    "website": "",
    "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    }
}