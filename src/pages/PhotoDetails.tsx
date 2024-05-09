import React from 'react'
import { AlbumPhotosProps } from '../types/dataTypes'

interface PhotoDetailsProps {
  photo: AlbumPhotosProps | undefined
  onGoBack: () => void
}

const PhotoDetails = (props: PhotoDetailsProps) => {
  console.log(props.photo)
  return (
    <div className="mx-auto py-32 sm:py-8 lg:py-36">
      <span className="row">
        <h1 className="text-2xl tracking-tight text-white sm:text-2xl pb-4 mr-4 pressable" onClick={props.onGoBack}>
          ←
        </h1>
        {props.photo ?
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
            {props.photo.title}
          </h1>
          : null}
      </span>

      {props.photo?.url ?
        <img className="h-auto max-w-full" src={props.photo.url} alt="" />
        : null}
    </div>
  )
}

export default PhotoDetails