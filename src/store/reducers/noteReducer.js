const initialState = {
        noteToEdit: {}
}

const noteReducer = (state = initialState, { type, payload }) => {
        switch (type) {

                case 'editNote':
                        return payload

                default:
                        return state
        }
}

export default noteReducer