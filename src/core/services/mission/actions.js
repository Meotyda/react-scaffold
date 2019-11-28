import {
    FETCH_MISSION_LIST_REQUEST,
    FETCH_MISSION_LIST_SUCCESS,
    CREATE_MISSION_ITEM_REQUEST,
    CREATE_MISSION_ITEM_SUCCESS,
    FETCH_MISSION_ITEM_REQUEST,
    FETCH_MISSION_ITEM_SUCCESS,
    PATCH_MISSION_ITEM_REQUEST,
    PATCH_MISSION_ITEM_SUCCESS,
    FETCH_MISSION_SECOND_PHASE_REQUEST,
    FETCH_MISSION_SECOND_PHASE_SUCCESS,
    PATCH_MISSION_SECOND_PHASE_REQUEST,
    PATCH_MISSION_SECOND_PHASE_SUCCESS,
    FETCH_MISSION_THIRD_PHASE_REQUEST,
    FETCH_MISSION_THIRD_PHASE_SUCCESS,
    PATCH_MISSION_THIRD_PHASE_REQUEST,
    PATCH_MISSION_THIRD_PHASE_SUCCESS,
    FETCH_MISSION_FOURTH_PHASE_REQUEST,
    FETCH_MISSION_FOURTH_PHASE_SUCCESS,
    PATCH_MISSION_FOURTH_PHASE_REQUEST,
    PATCH_MISSION_FOURTH_PHASE_SUCCESS
} from './constants';
import {actionCreator} from '../../../shared/utils/store';
import {ROOT_NAMESPACE} from '../../../store/constants';

export const missionActionCreator = actionCreator(ROOT_NAMESPACE);

export const fetchMissionRequest = missionActionCreator(FETCH_MISSION_LIST_REQUEST);
export const fetchMissionSuccess = missionActionCreator(FETCH_MISSION_LIST_SUCCESS);

export const createMissionItemRequest = missionActionCreator(CREATE_MISSION_ITEM_REQUEST);
export const createMissionItemSuccess = missionActionCreator(CREATE_MISSION_ITEM_SUCCESS);

export const fetchMissionItemRequest = missionActionCreator(FETCH_MISSION_ITEM_REQUEST);
export const fetchMissionItemSuccess = missionActionCreator(FETCH_MISSION_ITEM_SUCCESS);

export const patchMissionItemRequest = missionActionCreator(PATCH_MISSION_ITEM_REQUEST);
export const patchMissionItemSuccess = missionActionCreator(PATCH_MISSION_ITEM_SUCCESS);

// Mission Phases

export const fetchMissionSecondPhaseRequest = missionActionCreator(
    FETCH_MISSION_SECOND_PHASE_REQUEST
);
export const fetchMissionSecondPhaseSuccess = missionActionCreator(
    FETCH_MISSION_SECOND_PHASE_SUCCESS
);

export const patchMissionSecondPhaseRequest = missionActionCreator(
    PATCH_MISSION_SECOND_PHASE_REQUEST
);
export const patchMissionSecondPhaseSuccess = missionActionCreator(
    PATCH_MISSION_SECOND_PHASE_SUCCESS
);

export const fetchMissionThirdPhaseRequest = missionActionCreator(
    FETCH_MISSION_THIRD_PHASE_REQUEST
);
export const fetchMissionThirdPhaseSuccess = missionActionCreator(
    FETCH_MISSION_THIRD_PHASE_SUCCESS
);

export const patchMissionThirdPhaseRequest = missionActionCreator(
    PATCH_MISSION_THIRD_PHASE_REQUEST
);
export const patchMissionThirdPhaseSuccess = missionActionCreator(
    PATCH_MISSION_THIRD_PHASE_SUCCESS
);

export const fetchMissionFourthPhaseRequest = missionActionCreator(
    FETCH_MISSION_FOURTH_PHASE_REQUEST
);
export const fetchMissionFourthPhaseSuccess = missionActionCreator(
    FETCH_MISSION_FOURTH_PHASE_SUCCESS
);

export const patchMissionFourthPhaseRequest = missionActionCreator(
    PATCH_MISSION_FOURTH_PHASE_REQUEST
);
export const patchMissionFourthPhaseSuccess = missionActionCreator(
    PATCH_MISSION_FOURTH_PHASE_SUCCESS
);
