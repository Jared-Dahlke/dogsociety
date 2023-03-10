import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

export default function Home() {
	return (
		<div className='isolate bg-white h-screen'>
			<button onClick={() => signIn()}>Sign In</button>
		</div>
	)
}
