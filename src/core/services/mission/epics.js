import {combineEpics, ofType} from 'redux-observable';
import {map, switchMap} from 'rxjs/operators';
import {from} from 'rxjs';
import {AxiosResponse} from 'axios';
import {initialize} from 'redux-form';
import {
    CREATE_MISSION_ITEM_REQUEST,
    FETCH_MISSION_ITEM_REQUEST,
    FETCH_MISSION_LIST_REQUEST,
    FETCH_MISSION_SECOND_PHASE_REQUEST,
    FETCH_MISSION_THIRD_PHASE_REQUEST,
    FETCH_MISSION_FOURTH_PHASE_REQUEST,
    PATCH_MISSION_FOURTH_PHASE_REQUEST,
    PATCH_MISSION_ITEM_REQUEST,
    PATCH_MISSION_SECOND_PHASE_REQUEST,
    PATCH_MISSION_THIRD_PHASE_REQUEST
} from './constants';
import {adapter} from '../../../shared/utils/adapter';
import {fetchMissionSuccess} from './actions';
import {ROOT_NAMESPACE} from '../../../store/constants';

const getMissions = (params?: any) => {
    return from(adapter.get('/missions/', {params})).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const missionListRequestEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${FETCH_MISSION_LIST_REQUEST}`),
    switchMap((action: any) => getMissions(action.payload).pipe(
        map((response: any) => {
            return fetchMissionSuccess({
                missionList: response
            });
        })
    ))
);

const createMissionItem = missionItem => {
    return from(adapter.post('/missions/', missionItem)).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const createMissionItemRequestEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${CREATE_MISSION_ITEM_REQUEST}`),
    switchMap((action: any) => createMissionItem(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardForm', response);
        })
    ))
);

const getMissionItem = (missionItemId, params?) => {
    return from(adapter.get(`/missions/${missionItemId}/`, {params})).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const getMissionItemRequestEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${FETCH_MISSION_ITEM_REQUEST}`),
    switchMap((action: any) => getMissionItem(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardForm', response);
        })
    ))
);

const patchMissionItem = missionItem => {
    return from(adapter.patch(`/missions/${missionItem.id}/`, missionItem)).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const patchMissionItemRequestEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${PATCH_MISSION_ITEM_REQUEST}`),
    switchMap((action: any) => patchMissionItem(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardForm', response);
        })
    ))
);

const getMissionItemSecondPhase = (missionItemId, params?) => {
    return from(adapter.get(`/missions/data-uploading-steps/${missionItemId}/`, {params})).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const getMissionItemSecondPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${FETCH_MISSION_SECOND_PHASE_REQUEST}`),
    switchMap((action: any) => getMissionItemSecondPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardSecondPhaseForm', response);
        })
    ))
);

const patchMissionItemSecondPhase = missionPhaseItem => {
    return from(
        adapter.patch(`/missions/data-uploading-steps/${missionPhaseItem.id}/`, missionPhaseItem)
    ).pipe(map((response: AxiosResponse) => response.data));
};

const patchMissionItemRequestSecondPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${PATCH_MISSION_SECOND_PHASE_REQUEST}`),
    switchMap((action: any) => patchMissionItemSecondPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardSecondPhaseForm', response);
        })
    ))
);

const getMissionItemThirdPhase = (missionItemId, params?) => {
    return from(adapter.get(`/missions/expected-results-steps/${missionItemId}/`, {params})).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const getMissionItemThirdPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${FETCH_MISSION_THIRD_PHASE_REQUEST}`),
    switchMap((action: any) => getMissionItemThirdPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardThirdPhaseForm', response);
        })
    ))
);

const patchMissionItemThirdPhase = missionPhaseItem => {
    return from(
        adapter.patch(`/missions/expected-results-steps/${missionPhaseItem.id}/`, missionPhaseItem)
    ).pipe(map((response: AxiosResponse) => response.data));
};

const patchMissionItemRequestThirdPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${PATCH_MISSION_THIRD_PHASE_REQUEST}`),
    switchMap((action: any) => patchMissionItemThirdPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardThirdPhaseForm', response);
        })
    ))
);

const getMissionItemFourthPhase = (missionItemId, params?) => {
    return from(adapter.get(`/missions/mission-rules-steps/${missionItemId}/`, {params})).pipe(
        map((response: AxiosResponse) => response.data)
    );
};

const getMissionItemFourthPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${FETCH_MISSION_FOURTH_PHASE_REQUEST}`),
    switchMap((action: any) => getMissionItemFourthPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardFourthPhaseForm', response);
        })
    ))
);

const patchMissionItemFourthPhase = missionPhaseItem => {
    return from(
        adapter.patch(`/missions/mission-rules-steps/${missionPhaseItem.id}/`, missionPhaseItem)
    ).pipe(map((response: AxiosResponse) => response.data));
};

const patchMissionItemRequestFourthPhaseEpic = action$ => action$.pipe(
    ofType(`${ROOT_NAMESPACE}/${PATCH_MISSION_FOURTH_PHASE_REQUEST}`),
    switchMap((action: any) => patchMissionItemFourthPhase(action.payload).pipe(
        map((response: any) => {
            return initialize('MissionCardFourthPhaseForm', response);
        })
    ))
);

export const missionEpic = combineEpics(
    missionListRequestEpic,

    createMissionItemRequestEpic,
    getMissionItemRequestEpic,
    patchMissionItemRequestEpic,

    getMissionItemSecondPhaseEpic,
    patchMissionItemRequestSecondPhaseEpic,

    getMissionItemThirdPhaseEpic,
    patchMissionItemRequestThirdPhaseEpic,

    getMissionItemFourthPhaseEpic,
    patchMissionItemRequestFourthPhaseEpic
);
