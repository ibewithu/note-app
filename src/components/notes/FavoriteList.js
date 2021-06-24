import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NotesList from './NotesList'

const FavoriteList = () => {
        useFirestoreConnect([{ collection: 'notes', where: ['favorite', '==', true], orderBy: ['createdAt', 'desc'], storeAs: 'favoriteNotes' }])
        const favoriteNotes = useSelector(state => state.firestore.ordered.favoriteNotes)
        const temp = useSelector(state => state.firestore)
        console.log(temp)
        return (
                <NotesList notes={favoriteNotes} title={'Favorites'} />
        )
}

export default FavoriteList
