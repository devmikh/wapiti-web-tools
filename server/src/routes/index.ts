import express from 'express'

const router = express.Router()

router.get('/api/check-ip', async(req, res) => {
    res.send('ok');
})

export default router