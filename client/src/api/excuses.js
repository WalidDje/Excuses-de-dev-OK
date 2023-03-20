import { client } from './client'

export const getExcuses = () => client.get('/excuses').then((response) => response.data)
