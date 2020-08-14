import {getDataBase} from "../DataBaseSelectors";


describe('Data base selector', () => {
    const state = {
        DataBase: {
            "Телефоны": {
                examplesList: [{example: 'https://.png', exampleMake: 'Apple', id: 'appleEx'}],
                examplesForContent: {img: "phone.jpg"},
                productListArray: [{
                    name: 'iPhone Xr',
                    make: 'Apple',
                    shortDescription: ['смартфон с iOS 12'],
                    description: [],
                    price: '49 990',
                    img: 'https://069.jpeg',
                    id: 'Axr64',
                    sale: '15',
                    groupEng: 'phones'
                }],
                saleGroup: 'true',
                productMakersList: ["samsung"],
                idGroup: 'Phones',
                engGroupName: 'phones'
            }
        }
    }
    it('Should return data base', () => {
        const expected = {
            "Телефоны": {
                examplesList: [{example: 'https://.png', exampleMake: 'Apple', id: 'appleEx'}],
                examplesForContent: {img: "phone.jpg"},
                productListArray: [{
                    name: 'iPhone Xr',
                    make: 'Apple',
                    shortDescription: ['смартфон с iOS 12'],
                    description: [],
                    price: '49 990',
                    img: 'https://069.jpeg',
                    id: 'Axr64',
                    sale: '15',
                    groupEng: 'phones'
                }],
                saleGroup: 'true',
                productMakersList: ["samsung"],
                idGroup: 'Phones',
                engGroupName: 'phones'
            }
        }
        const selector = getDataBase
        expect(selector(state)).toEqual(expected)
    })
})
