// const cartReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return [...state, action.payload];
//       default:
//         return state;
//     }
//   }; 

const cartReducer = (state = [], action) => {
   if (state === null) {
     return state;
   } else if (action.type === 'ADD_TO_CART') {
     return [...state, action.payload];
   }
   return state;
}; 

export default cartReducer;