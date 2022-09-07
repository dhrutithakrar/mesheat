import { API } from '../../backend'

export const signup = user => {

    return fetch(`${API}/auth/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}

export const signin = user => {
    return fetch(`${API}/auth/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

export const signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/auth/signout`, {
            method: "GET"
        })
            .then(res => console.log("Sign out successfully"))
            .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window !== "object") {
        return false;
    }

    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false;
    }
}