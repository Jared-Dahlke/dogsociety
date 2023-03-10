import dayjs from 'dayjs'
import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
	try {
		const client = await clientPromise
		const db = client.db(process.env.NEXT_PUBLIC_DATABASE_NAME)
		const result = await db.collection('visitationwaivers').find({}).toArray()

		res.json(result)
	} catch (e) {
		console.error(e)
	}
}
