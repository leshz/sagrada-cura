'use server'

import { fetchApi } from './api'
import { getCollections, sendContactForm } from './collections'
import { getSingles } from './singles'
import { checkout } from './checkout'

export { fetchApi, getCollections, getSingles, checkout, sendContactForm }
