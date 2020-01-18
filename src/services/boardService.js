import board from '../resources/board';

export const fetchBoard = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: board })
        }, 1000)
    })
}