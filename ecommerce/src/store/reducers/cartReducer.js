import actiontypes from '../actiontypes'
import jwt from 'jsonwebtoken'

const secretKey = 'c32324glkdflkh990883920384fk9878hg'

const initState = {
    shoppingcart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

export default (state = initState, action) => {
    let itemIndex //för att inte lint-delarna ska klaga på att det redan är deklarerat

    switch(action.type) {
        case actiontypes().cart.add:
            try {
                itemIndex = state.shoppingcart.findIndex(product => product.id === action.product.id)
                itemIndex < 0 
                    ? state.shoppingcart = [...state.shoppingcart, action.product]
                    : state.shoppingcart[itemIndex].quantity += 1

                    state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                    state.totalCartAmount = getTotalAmount(state.shoppingcart)

            }
            catch {}

            return state
        
        case actiontypes().cart.remove:

            try {
                itemIndex = state.shoppingcart.findIndex(product => product.id === action.id)
                
                state.shoppingcart[itemIndex].quantity === 1
                    ? state.shoppingcart = state.shoppingcart.filter(item => item.id !== action.id)
                    : state.shoppingcart[itemIndex].quantity -= 1

                    state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                    state.totalCartAmount = getTotalAmount(state.shoppingcart)

                    localStorage.setItem('c32324glkdflkh990883920384fk9878hg', jwt.sign(state, secretKey))
            }
            catch{}

            return state

        case actiontypes().cart.clear:
            try { //inget objekt så varje sak är separat, därför inga kommatecken efter array och nollan på rad 1 och 2
                state.shoppingcart = []
                state.totalCartAmount = 0
                state.totalCartQuantity = 0

                localStorage.removeItem('c32324glkdflkh990883920384fk9878hg')
            }
            catch{}


            return state

        default: 
            let cart = jwt.decode(localStorage.getItem('c32324glkdflkh990883920384fk9878hg'))
            if(cart)
                state = cart

            return state
    }
}

const getTotalQuantity = (items) => {
    let totalQuantity = 0

    items.forEach(product => {
        totalQuantity += product.quantity
    });

    return totalQuantity
}

const getTotalAmount = (items) => {
    let totalAmount = 0

    items.forEach(product => {
        totalAmount += product.price * product.quantity
    });

    return totalAmount
}