export const SEARCH_INPUT = 'SEARCH_INPUT'

export interface searchActionType {
    type: typeof SEARCH_INPUT,
    payload: string
}

export const search = (payload: string): searchActionType => {
    return {
        type: SEARCH_INPUT,
        payload
    }
}
