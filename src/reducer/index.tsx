export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'notification':
            return { ...state, alert: action.payload }
        default:
            throw new Error();
    }
}