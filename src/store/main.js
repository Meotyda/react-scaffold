import {applyMiddleware, combineReducers, createStore as createReduxStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {missionEpic} from '../core/services/mission/epics';
import {
    MISSION_ITEM_STORE_KEY,
    MISSION_LIST_STORE_KEY,
    MISSION_ITEM_SECOND_PHASE_STORE_KEY,
    MISSION_ITEM_THIRD_PHASE_STORE_KEY,
    MISSION_ITEM_FOURTH_PHASE_STORE_KEY,
    missionItemReducer,
    missionListReducer
} from '../core/services/mission/reducer';
import {ROOT_NAMESPACE} from './constants';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(missionEpic);

const featureReducer = combineReducers({
    [MISSION_LIST_STORE_KEY]: missionListReducer,
    [MISSION_ITEM_STORE_KEY]: missionItemReducer,
    [MISSION_ITEM_SECOND_PHASE_STORE_KEY]: missionItemReducer,
    [MISSION_ITEM_THIRD_PHASE_STORE_KEY]: missionItemReducer,
    [MISSION_ITEM_FOURTH_PHASE_STORE_KEY]: missionItemReducer
});

const rootReducer = combineReducers({
    [ROOT_NAMESPACE]: featureReducer,
    form: formReducer
});

export const createStore = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [epicMiddleware];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];
    const composeEnhancers = composeWithDevTools({});

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createReduxStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware), ...enhancers)
    );

    epicMiddleware.run(rootEpic);

    return store;
};
