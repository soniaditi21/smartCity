import express from 'express';
import { userSignup,userLoginIn,adminLoginIn,adminInfo} from './controller/user-controller.js';
import {getAtm,postAtm,postHospital,getHospital} from './controller/item-controller.js';

const router = express.Router();


//signup is a post api so this function will save data to mongodb
router.post('/signup',userSignup);
router.post('/login',userLoginIn);

router.post('/admin',adminLoginIn);
router.get('/admin',adminInfo);

router.post('/addatm',postAtm);
router.get('/addatm',getAtm);

router.post('/addhospital',postHospital);
router.get('/addhospital',getHospital);


export default router;
