const PORT =  process.env.PORT || 3333

import express from 'express'
import { config } from 'dotenv'

config()

const app = express()

app.get ('/', (request, response) => {
    response.send('rruning in port 3333')
})
app.listen(PORT, () => console.log("Running on port 3333"))