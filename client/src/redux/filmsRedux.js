import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getFilms = ({ films }) => films.data;
export const getFilmsNumber = ({ films }) => films.amount;
export const getRequest = ({ films }) => films.request;
export const getSingleFilm = ({ films }) => films.singleFilm;
export const getPages = ({ films }) => Math.ceil(films.amount / films.filmsPerPage);
export const getPresentPage = ({ films }) => films.presentPage;
export const getSort = ({ films }) => films.sortBy;
export const getAddedToCart = ({ films }) => films.cart;
export const getCartTotalCash = ({ films }) => films.cartTotalCash;
export const getCartTotalPcs = ({ films }) => films.cartTotalPcs;
export const getCartTotalDiscount = ({ films }) => films.cartTotalDiscount;
export const getCartTotalDiscountPhrase = ({ films }) => films.cartTotalDiscountDB;

/* ACTION CREATOR NAME */
const reducerName = 'films';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_FILMS = createActionName('LOAD_FILMS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const LOAD_SINGLE_FILM = createActionName('LOAD_SINGLE_FILM');
export const LOAD_FILMS_RANGE = createActionName('LOAD_FILMS_RANGE');
export const CHANGE_SORTING = createActionName('CHANGE_SORTING');
export const ADD_NEW_TO_CART = createActionName('ADD_NEW_TO_CART');
export const ADD_EXISTING_TO_CART = createActionName('ADD_EXISTING_TO_CART');
export const REMOVE_PRODUCT_FROM_CART = createActionName('REMOVE_PRODUCT_FROM_CART');
export const COUNT_CART_TOTAL_CASH = createActionName('COUNT_CART_TOTAL_CASH');
export const COUNT_CART_TOTAL_PCS = createActionName('COUNT_CART_TOTAL_PCS');
export const SET_DISCOUNT_RATE = createActionName('SET_DISCOUNT_RATE');

/* ACTION CREATOR */
export const loadFilmsInRedux = payload => ({ payload, type: LOAD_FILMS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadSingleFilmInRedux = payload => ({ payload, type: LOAD_SINGLE_FILM});
export const loadFilmsRange = payload => ({ payload, type: LOAD_FILMS_RANGE });
export const changeSorting = payload => ({ payload, type: CHANGE_SORTING });
export const addNewToCart = payload => ({ payload, type: ADD_NEW_TO_CART });
export const addExistingToCart = payload => ({ payload, type: ADD_EXISTING_TO_CART });
export const removeOneProductFromCart = payload => ({ payload, type: REMOVE_PRODUCT_FROM_CART });
export const countCartTotalCash = payload => ({ payload, type: COUNT_CART_TOTAL_CASH });
export const countCartTotalPcs = payload => ({ payload, type: COUNT_CART_TOTAL_PCS });
export const setDiscountRate = payload => ({ payload, type: SET_DISCOUNT_RATE });

/* INITIAL STATE */
const initialState = {
    data: [],
    cart: [],
    cartTotalCash: 0,
    cartTotalPcs: '',
    cartTotalDiscount: 0,
    cartTotalDiscountDB: [
        { phrase: 'bfd', value: 10 },
        { phrase: 'vd', value: 20 }
    ],
    request: {
        pending: false,
        error: null,
        success: null
    },
    singleFilm: {
        id: '',
        title: '',
        titlePolish: '',
        type: '',
        year: '',
        director: '',
        stars: '',
        description: '',
        posterUrl: '',
        price: '',
        cartAmount: ''
    },
    amount: 0,
    filmsPerPage: 10,
    presentPage: 1,
    sortBy: null
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_FILMS:
            return { ...statePart, data: action.payload };
        case START_REQUEST:
            return { ...statePart, request: { pending: true, error: null, success: null } };
        case END_REQUEST:
            return { ...statePart, request: { pending: false, error: null, success: true } };
        case ERROR_REQUEST:
            return { ...statePart, request: { pending: false, error: action.error, success: false } };
        case LOAD_SINGLE_FILM:
            return { ...statePart, singleFilm: action.payload };
        case LOAD_FILMS_RANGE:
            return {
                ...statePart,
                filmsPerPage: action.payload.filmsPerPage,
                presentPage: action.payload.presentPage,
                amount: action.payload.amount,
                data: [...action.payload.films],
            }
        case CHANGE_SORTING:
            return { ...statePart, sortBy: action.payload }
        case ADD_NEW_TO_CART:
            return { ...statePart, cart: [...statePart.cart, { ...action.payload, cartAmount: 1 } ] }
        case ADD_EXISTING_TO_CART:
            return { ...statePart, cart: [...statePart.cart ] }
        case REMOVE_PRODUCT_FROM_CART:
            return { ...statePart, cart: action.payload }
        case COUNT_CART_TOTAL_CASH:
            return { ...statePart, cartTotalCash: action.payload }         
        case COUNT_CART_TOTAL_PCS:
            return { ...statePart, cartTotalPcs: action.payload }
        case SET_DISCOUNT_RATE:
            return { ...statePart, cartTotalDiscount: action.payload }
        default:
            return statePart;
    }
};

/* THUNKS */
export const discountSubmitThunkRequest = (phrase, db) => {
    return dispatch => {

        dispatch(startRequest());
        try {
            const dbObject = db.filter(item => item.phrase === phrase );
            const dbPhrase = dbObject[0].value;
            dispatch(setDiscountRate(dbPhrase));
            dispatch(endRequest());
        }

        catch(e) {
            dispatch(errorRequest(e.message));
        };
    };
};



export const countCartTotalPcsThunkRequest = (cart) => {
    return async dispatch => {

        dispatch(startRequest());
        try {
                let cartTotalPcs = 0;
                cart.forEach(el => {
                    return (cartTotalPcs += el.cartAmount);
                });
            
            const payload = cartTotalPcs;
            dispatch(countCartTotalPcs(payload));
            dispatch(endRequest());
        }

        catch(e) {
            dispatch(errorRequest(e.message));
        };
    };
};

export const countCartTotalCashThunkRequest = (cart) => {
    return async dispatch => {

        dispatch(startRequest());
        try {
                let cartTotalCash = 0;
                cart.forEach(el => {
                    return (cartTotalCash += el.price * el.cartAmount);
                });
            
            const payload = cartTotalCash;
            dispatch(countCartTotalCash(payload));
            dispatch(endRequest());
        }

        catch(e) {
            dispatch(errorRequest(e.message));
        };
    };
};

export const loadFilmsThunkRequest = () => {
    return async dispatch => {

        dispatch(startRequest());
        try {
            let res = await axios.get(`${ API_URL}/films`)
            dispatch(loadFilmsInRedux(res.data));
            dispatch(endRequest());
        }

        catch(e) {
            dispatch(errorRequest(e.message));
        };
    };
};

export const loadSingleFilmThunkRequest = id => {
    return async dispatch => {

        dispatch(startRequest());
        try {
            let res = await axios.get(`${ API_URL}/films/${id}`)
            dispatch(loadSingleFilmInRedux(res.data));
            dispatch(endRequest());
        }

        catch(e) {
            dispatch(errorRequest(e.message));
        };
    };
};

export const loadFilmsRangeThunkRequest = (page = 1 , filmsPerPage = 6, sortBy = null) => {
    return async dispatch => {
  
        dispatch(startRequest());
        try {
    
            const startAt = (page - 1) * filmsPerPage;
            const limit = filmsPerPage;
    
            let res = await axios.get(`${API_URL}/films/range/${startAt}/${limit}/${sortBy}`);
    
            const payload = {
                films: res.data.films,
                amount: res.data.amount,
                filmsPerPage,
                presentPage: page,
            };
    
            dispatch(changeSorting(sortBy));
            dispatch(loadFilmsRange(payload));
            dispatch(endRequest());
  
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const addToCartThunkRequestNew = ( id, cart ) => {
    return async dispatch => {
        dispatch(startRequest());
        try {
    
            let res = await axios.get(`${ API_URL}/films/${id}`)
            let existed_item = cart.find(item => res.data.id === item.id)

            if (existed_item) {
                const currentIndex = cart.findIndex(item => res.data.id === item.id);
                cart[currentIndex].cartAmount += 1;

                dispatch(addExistingToCart(cart));
                dispatch(endRequest());
           
            } else {
                const payload = res.data;
                dispatch(addNewToCart(payload));
                dispatch(endRequest());    
            }
        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const removeFromCartThunkRequestNew = ( id, cart ) => {
    return async dispatch => {
        dispatch(startRequest());
        try {
    
                const currentIndex = cart.findIndex(item => id === item.id);
                cart[currentIndex].cartAmount -= cart[currentIndex].cartAmount > 1 ? 1 : 0;

                dispatch(addExistingToCart(cart));
                dispatch(endRequest());

        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};

export const removeProductFromCartThunkRequestNew = ( id, cart ) => {
    return dispatch => {
        dispatch(startRequest());
        try {
                const newCart = cart.filter(item => id !== item.id);

                dispatch(removeOneProductFromCart(newCart));
                dispatch(endRequest());

        } catch(e) {
            dispatch(errorRequest(e.message));
        }
    };
};