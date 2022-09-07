import { API } from "../../backend";

export const getAllUsers = (adminId, token) => {

    return fetch(`${API}/admin/getAllUsers/${adminId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}

export const updateProfile = (token) => {
    return fetch(`${API}/admin/updateRole`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllDishes = (token) => {
    return fetch(`${API}/admin/allDishes`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}

export const getAllMeshUsers = (adminId) => {
    return fetch(`${API}/admin/meshes/${adminId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))
}
