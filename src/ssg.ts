
import { app } from './app'
import { toSSG } from 'hono/ssg'
import fs from 'fs/promises'

toSSG(app, fs)