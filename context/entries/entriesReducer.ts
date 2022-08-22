import { Entry } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType =
   | { type: '[Entry] - Add-Entry', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
   switch (action.type) {
      case '[Entry] - Add-Entry':
         return {
            ...state,
            entries: [action.payload, ...state.entries]
         }

      default:
         return state;
   }
}