import { FC, PropsWithChildren, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
            status: 'pending',
            createdAt: Date.now(),
        }, {
            _id: uuidv4(),
            description: 'Progreso Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
            status: 'in-progress',
            createdAt: Date.now() - 100000,
        }, {
            _id: uuidv4(),
            description: 'Terminada Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
            status: 'finished',
            createdAt: Date.now() - 2000,
        }
    ]
}


export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={ {
            ...state,
        } }>

            { children }

        </EntriesContext.Provider>
    )
}