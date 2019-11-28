const identity = v => v;

export const handleActions = namespace => {
    return (actionsHandlerMap, defaultState) => {
        const handlerKeys = Object.keys(actionsHandlerMap);
        const handlers = handlerKeys.reduce((acc, key) => {
            const action = actionsHandlerMap[key];
            const isFunction = typeof action === 'function';
            const handler = {
                next: isFunction ? action : action.next || identity,
                throw: isFunction ? action : action.throw || identity
            };

            return Object.assign(acc, {[`${namespace}/${key}`]: handler});
        }, {});

        return (state = defaultState, action: any) => {
            const actionType = action.type;
            const isError = action.error === true;
            const handler = handlers[actionType];

            if (handler) {
                return (isError ? handler.throw : handler.next)(state, action);
            }

            return state;
        };
    };
};

const finalPayloadCreator = (payloadCreator?, ...args) => {
    if (payloadCreator) {
        return payloadCreator instanceof Error ? payloadCreator : payloadCreator(...args);
    }

    return args[0];
};

export const actionCreator = namespace => {
    return (actionType, payloadCreator?, metaCreator?) => {
        // eslint-disable-next-line no-shadow
        const actionCreator: any = (...args: Array<any>) => {
            const payload = finalPayloadCreator(payloadCreator, ...args);
            const action = {type: `${namespace}/${actionType}`};

            if (payload instanceof Error) {
                action.error = true;
            }

            if (payload !== undefined) {
                action.payload = payload;
            }

            if (metaCreator) {
                action.meta = metaCreator(...args);
            }

            return action;
        };

        actionCreator.toString = () => actionType;

        return actionCreator;
    };
};
