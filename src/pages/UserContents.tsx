import React from 'react'
import { Table, Typography } from '../components'

interface UserContentsProps {
  posts: any
  albums: any
  users: any
  cursors: {
    userId: number
  }
  onGoBack: () => void
  onClickPost: (id: number) => void
  onClickAlbum: (id: number) => void
}

const UserContents = (props: UserContentsProps) => {
  delete (props.posts.find(S => S)?.userId)
  delete (props.albums.find(S => S)?.userId)

  return (
    <div className="mx-auto py-32 sm:py-8 lg:py-36">
      <div>
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

      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
       <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Social Media Dashboard
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div> 
        </div> */}
    </div>
  )
}

export default UserContents