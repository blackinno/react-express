export function AddCounter (box) {
    return {
        type: 'ADD_COUNTER',
        payload: box
    }
}


export function DeleteCounter (id) {
    return {
        type: 'DELETE_COUNTER',
        payload: id
    }
}

export function UpdateCounter (box) {
    return {
        type: 'UPDATE_COUNTER',
        payload: box
    }
}
