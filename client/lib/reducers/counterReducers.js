const initState = {
    box: [{
        id: Math.floor(new Date()),
        counter: 0
    }]
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return Object.assign({}, state.box, {
                box: [
                    ...state.box,
                    action.payload
                ]
            })

        case 'DELETE_COUNTER':
            return Object.assign({}, state.box, {
                box: state.box.filter(data => data.id !== action.payload)
            })

        case 'UPDATE_COUNTER':
            return Object.assign({}, state.box, {
                box: action.payload
            })

        default:
            return state;
    }
}