import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'


interface Props {
    status: EntryStatus,

}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => (
        entries.filter(entry => entry.status === status)
    ), [entries])

    return (

        <div>
            <Paper sx={ { height: 'calc(100vh - 165px)', overflowY: 'auto', backgroundColor: 'transparent', padding: '0px 8px' } }>
                <List sx={ { opacity: 1 } }>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
