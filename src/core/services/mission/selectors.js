import {ROOT_NAMESPACE} from '../../../store/constants';
import {
    MISSION_ITEM_STORE_KEY,
    MISSION_LIST_STORE_KEY,
    MISSION_ITEM_SECOND_PHASE_STORE_KEY,
    MISSION_ITEM_THIRD_PHASE_STORE_KEY,
    MISSION_ITEM_FOURTH_PHASE_STORE_KEY
} from './reducer';

export const missionListSelector = state => {
    return state[ROOT_NAMESPACE][MISSION_LIST_STORE_KEY].missionList;
};

export const missionItemSelector = state => {
    return state[ROOT_NAMESPACE][MISSION_ITEM_STORE_KEY].missionItem;
};

export const missionItemSecondPhaseSelector = state => {
    return state[ROOT_NAMESPACE][MISSION_ITEM_SECOND_PHASE_STORE_KEY].missionItemSecondPhase;
};

export const missionItemThirdPhaseSelector = state => {
    return state[ROOT_NAMESPACE][MISSION_ITEM_THIRD_PHASE_STORE_KEY].missionItemThirdPhase;
};

export const missionItemFourthPhaseSelector = state => {
    return state[ROOT_NAMESPACE][MISSION_ITEM_FOURTH_PHASE_STORE_KEY].missionItemFourthPhase;
};
