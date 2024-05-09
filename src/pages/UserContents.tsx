import React from 'react'
import { Table, Typography } from '../components'
import { UserAlbumsProps, UserPostsProps, UsersProps } from '../types/dataTypes'

interface UserContentsProps {
  posts: UserPostsProps[]
  albums: UserAlbumsProps[]
  users: UsersProps[]
  cursors: {
    userId: number
  }
  onGoBack: () => void
  onClickPost: (id: number) => void
  onClickAlbum: (id: number) => void
}

const UserContents = (props: UserContentsProps) => {
  if (props.posts) {
    delete (props.posts.find(S => S)?.userId)
  }
  if (props.albums) {
    delete (props.albums.find(S => S)?.userId)
  }

  return (
    <div className="mx-auto py-32 sm:py-8 lg:py-36">
      <span className="row">
        <h1 className="text-2xl tracking-tight text-white sm:text-2xl pb-4 mr-4 pressable" onClick={props.onGoBack}>
          ←
        </h1>
        {props.users ?
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
            {props.users.find(S => S.id === props.cursors.userId)?.name}'s
          </h1>
          : null}
      </span>
      <h1 className="text-xl font-semibold tracking-tight text-white sm:text-xl pb-4">
        Posts
      </h1>
      {props.posts ?
        <Table heads={Object.keys(props.posts.find(S => S) ?? '')}>
          {props.posts.map(item => (
            <tr
              key={item.id}
              className="hover-bar even:bg-blue-gray-50/50"
              onClick={() => props.onClickPost(item.id)}
            >
              <td className="p-4 pressable" style={{ width: 10 }}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.id ?? '-'}
                </Typography>
              </td>
              <td className="p-4 pressable">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.title ?? '-'}
                </Typography>
              </td>
              <td className="p-4 pressable">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.body ?? '-'}
                </Typography>
              </td>
            </tr>
          ))}
        </Table>
        : null}

      <h1 className="text-xl font-semibold tracking-tight text-white sm:text-xl pb-4 py-12">
        Albums
      </h1>
      {props.albums ?
        <Table heads={Object.keys(props.albums.find(S => S) ?? '')}>
          {props.albums.map(item => (
            <tr
              key={item.id}
              className="hover-bar even:bg-blue-gray-50/50"
              onClick={() => props.onClickAlbum(item.id)}
            >
              <td className="p-4 pressable w-fit">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.id ?? '-'}
                </Typography>
              </td>
              <td className="p-4 w-full pressable">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.title ?? '-'}
                </Typography>
              </td>
              {/* <td className="p-4">
                 <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                   Edit
                 </Typography>
               </td> */}
            </tr>
          ))}
        </Table>
        : null}
    </div>
  )
}

export default UserContents