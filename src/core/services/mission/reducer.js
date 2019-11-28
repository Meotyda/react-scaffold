import {handleActions} from '../../../shared/utils/store';
import {
    createMissionItemSuccess,
    fetchMissionItemSuccess,
    fetchMissionSuccess,
    fetchMissionSecondPhaseSuccess,
    patchMissionSecondPhaseSuccess,
    fetchMissionThirdPhaseSuccess,
    patchMissionThirdPhaseSuccess,
    fetchMissionFourthPhaseSuccess,
    patchMissionFourthPhaseSuccess
} from './actions';
import {ROOT_NAMESPACE} from '../../../store/constants';

export const MISSION_LIST_STORE_KEY = 'missionList';
export const MISSION_ITEM_STORE_KEY = 'missionItem';
export const MISSION_ITEM_SECOND_PHASE_STORE_KEY = 'missionItemSecondPhaseStoreKey';
export const MISSION_ITEM_THIRD_PHASE_STORE_KEY = 'missionItemThirdPhaseStoreKey';
export const MISSION_ITEM_FOURTH_PHASE_STORE_KEY = 'missionItemFourthPhaseStoreKey';

const handleMissionActions = handleActions(ROOT_NAMESPACE);
const handleMissionItemActions = handleActions(ROOT_NAMESPACE);

const initialState = {
    isMissionListLoading: false,
    missionList: [],
    error: null
};

export const missionListReducer = handleMissionActions(
    {
        [fetchMissionSuccess]: (state, {payload}) => payload
    },
    initialState
);

export const missionItemReducer = handleMissionItemActions(
    {
        [createMissionItemSuccess]: (state, {payload}) => payload,
        [fetchMissionItemSuccess]: (state, {payload}) => payload,
        [fetchMissionSecondPhaseSuccess]: (state, {payload}) => payload,
        [patchMissionSecondPhaseSuccess]: (state, {payload}) => payload,
        [fetchMissionThirdPhaseSuccess]: (state, {payload}) => payload,
        [patchMissionThirdPhaseSuccess]: (state, {payload}) => payload,
        [fetchMissionFourthPhaseSuccess]: (state, {payload}) => payload,
        [patchMissionFourthPhaseSuccess]: (state, {payload}) => payload
    },
    initialState
);
