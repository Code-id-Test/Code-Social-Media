import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Comments, Loading, Table, Typography } from "../components"
import { getAlbumPhotos, getPostComments, getPostDetails, getUserAlbums, getUserPosts, getUsers } from "../store/actions"
import { PostCommentsProps, PostDetailsProps, UserAlbumsProps, UserPostsProps, UsersProps } from "../types/dataTypes"
import UserContents from "./UserContents"

const Dash = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(0)
  const [selectedPostId, setSelectedPostId] = useState(0)
  const [selectedAlbumId, setSelectedAlbumId] = useState(0)
  const [page, setPage] = useState<'Dash' | 'UserContents' | 'PostDetails' | 'UserAlbums'>('Dash');
  const { data: usersQuery } = useSelector(
    (state: any) => state.users
  )
  const { data: userPostsQuery } = useSelector(
    (state: any) => state.userPosts
  )
  const { data: postDetailsQuery } = useSelector(
    (state: any) => state.postDetails
  )
  const { data: postCommentsQuery } = useSelector(
    (state: any) => state.postComments
  )
  const { data: userAlbumsQuery } = useSelector(
    (state: any) => state.userAlbums
  )
  const { data: albumPhotosQuery } = useSelector(
    (state: any) => state.albumPhotos
  )
  const [users, setUsers] = useState<UsersProps[]>([])
  const [userPosts, setUserPosts] = useState<UserPostsProps[]>([])
  const [postDetails, setPostDetails] = useState<PostDetailsProps>()
  const [postComments, setPostComments] = useState<PostCommentsProps[]>([])
  const [userAlbums, setUserAlbums] = useState<UserAlbumsProps[]>([])
  const [albumPhotos, setAlbumPhotos] = useState<UserAlbumsProps[]>([])

  const renderer = () => {
    if (loading) {
      return <Loading />
    }
    if (page === 'Dash') {
      return (
        <div className="mx-auto py-32 sm:py-8 lg:py-36">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
              Users
            </h1>
            {users ?
              <Table heads={Object.keys(users.find(S => S) ?? '')}>
                {users.map((item) => (
                  <tr
                    key={item.id}
                    className="hover-bar even:bg-blue-gray-50/50"
                    onClick={() => {
                      setSelectedUserId(item.id)
                      setPage('UserContents')
                    }}
                  >
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.id ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.name ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.username ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.email ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}` ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.phone ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.website ?? '-'}
                      </Typography>
                    </td>
                    <td className="p-4 pressable">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {item.company.name ?? '-'}
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
    if (page === 'UserContents') {
      return (
        <UserContents
          users={users}
          posts={userPosts}
          albums={userAlbums}
          cursors={{ userId: selectedUserId }}
          onGoBack={() => {
            setPage('Dash')
          }}
          onClickPost={(id) => {
            setSelectedPostId(id)
            setPage('PostDetails')
          }}
          onClickAlbum={(id) => {
            setSelectedAlbumId(id)
            setPage('UserAlbums')
          }}
        />
      )
    }
    if (page === 'PostDetails') {
      return (
        <div className="mx-auto py-32 sm:py-8 lg:py-36">
          <div>
            <span className="row">
              <h1 className="text-2xl tracking-tight text-white sm:text-2xl mr-4 pressable" onClick={() => {
                setPage('Dash')
              }}>
                ←
              </h1>
              {users ?
                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
                  Post Details
                </h1>
                : null}
            </span>
            <h1 className="text-xl font-semibold tracking-tight text-white sm:text-xl pb-4">
              {postDetails?.title}
            </h1>
            <p className="text-white pb-8">{postDetails?.body}</p>
            <Comments comments={postComments} />
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
    if (page === 'UserAlbums') {
      return (
        <div className="mx-auto py-32 sm:py-8 lg:py-36">
          <div>
            <span className="row">
              <h1 className="text-2xl tracking-tight text-white sm:text-2xl pb-4 mr-4 pressable" onClick={() => {
                setPage('Dash')
              }}>
                ←
              </h1>
              {users ?
                <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4">
                  {users.find(S => S.id === selectedUserId)?.name}'s Album
                </h1>
                : null}
            </span>
            <h1 className="text-xl font-semibold tracking-tight text-white sm:text-xl pb-4">
              {userAlbums.find(S => S.id)?.title}
            </h1>

            {albumPhotos.length > 0 ?
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {albumPhotos?.map(item =>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src={item?.url} alt="" />
                  </div>
                )}
              </div>
              : <p>This album photo is empty</p>}
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
  }

  useEffect(() => {
    setLoading(true)
    dispatch(
      getUsers({
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
  }, [])

  useEffect(() => {
    setLoading(true)
    dispatch(
      getUserPosts({
        userId: selectedUserId,
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
  }, [selectedUserId])

  useEffect(() => {
    setLoading(true)
    dispatch(
      getPostDetails({
        id: selectedPostId,
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
    dispatch(
      getPostComments({
        postId: selectedPostId,
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
  }, [selectedPostId])

  useEffect(() => {
    setLoading(true)
    dispatch(
      getUserAlbums({
        id: selectedUserId,
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
  }, [selectedUserId])

  useEffect(() => {
    setLoading(true)
    dispatch(
      getAlbumPhotos({
        albumId: selectedAlbumId,
        onSuccess: () => setLoading(false),
        onError: () => setLoading(false),
      })
    )
  }, [selectedUserId])

  useEffect(() => {
    setUsers(usersQuery)
  }, [usersQuery])
  useEffect(() => {
    setUserPosts(userPostsQuery)
  }, [userPostsQuery])
  useEffect(() => {
    setUserAlbums(userAlbumsQuery)
  }, [userAlbumsQuery])
  useEffect(() => {
    setPostDetails(postDetailsQuery)
  }, [postDetailsQuery])
  useEffect(() => {
    setPostComments(postCommentsQuery)
  }, [postCommentsQuery])
  useEffect(() => {
    setAlbumPhotos(albumPhotosQuery)
  }, [albumPhotosQuery])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {renderer()}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] dark:bg-gray-800"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

    </div>
  )
}

export default Dash