import {Router} from 'express'

const router = Router()

router.get('/', (req,res) => res.render('index', {title: 'Carbon Savings'} ))
router.get('/about', (req,res) => res.render('about'))
router.get('/calculator', (req,res) => res.render('calculator'))

export default router