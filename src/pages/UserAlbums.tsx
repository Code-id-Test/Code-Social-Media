import React from 'react'
import { UsersProps, UserAlbumsProps as Data_UserAlbumsProps, AlbumPhotosProps } from '../types/dataTypes'

interface UserAlbumsProps {
  users: UsersProps[]
  albums: Data_UserAlbumsProps[]
  photos: AlbumPhotosProps[]
  cursors: {
    userId: number
    albumId: number
  }
  onGoBack: () => void
  onClick: (id: number) => void
}

const UserAlbums = (props: UserAlbumsProps) => {
  return (
    <div className="mx-auto py-32 sm:py-8 lg:py-36">
      <div>
        <span className="row">
          <h1 className="text-2xl tracking-tight text-white sm:text-2xl pb-4 mr-4 pressable" onClick={props.onGoBack}>
            ←
          </h1>
          {props.users ?
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
              {props.users.find(S => S.id === props.cursors.userId)?.name}'s Album
            </h1>
            : null}
        </span>
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-xl pb-4">
          {props.albums.find(S => S.id === props.cursors.albumId)?.title}
        </h1>

        {props.photos.length > 0 ?
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {props.photos?.map(item =>
              <div
                key={item.id}
                className="pressable"
                onClick={() => props.onClick(item.id)}
              >
                <img className="h-auto max-w-full rounded-lg" src={item?.thumbnailUrl} alt="" />
              </div>
            )}
          </div>
          : <p>This album photo is empty</p>}
      </div>
    </div>
  )
}

export default UserAlbums