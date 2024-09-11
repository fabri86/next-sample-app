import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-store',
    next: {
      revalidate: 10,
    },
  })

  const users: User[] = await res.json()

  return (
    <ul className="p-4">
      {users.map((user) => (
        <li className="list-none my-2" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  )
}

export default UsersPage
