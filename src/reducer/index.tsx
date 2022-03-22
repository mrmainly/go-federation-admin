export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'notification':
            return { ...state, alert: action.payload }
        case 'tournamentId':
            return { ...state, tournamentId: action.payload }
        default:
            throw new Error();
    }
}