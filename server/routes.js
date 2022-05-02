import express from 'express';
import { userSignup,userLoginIn,adminLoginIn,adminInfo} from './controller/user-controller.js';
import {getAtm,postAtm,postHospital,getHospital, postCollege, getCollege, postHotel, getHotel, postLibrary, getLibrary, postSchool, getSchool, postShoppingMall, getShoppingMall, postTemple, getTemple, postTourism, getTourism, postTransport, getTransport} from './controller/item-controller.js';

const router = express.Router();


//signup is a post api so this function will save data to mongodb
router.post('/signup',userSignup);
router.post('/login',userLoginIn);

router.post('/admin',adminLoginIn);
router.get('/admin',adminInfo);

router.post('/addatm',postAtm);
router.get('/addatm',getAtm);

router.post('/addcollege',postCollege);
router.get('/addcollege',getCollege);

router.post('/addhospital',postHospital);
router.get('/addhospital',getHospital);

router.post('/addhotel',postHotel);
router.get('/addhotel',getHotel);

router.post('/addlibrary',postLibrary);
router.get('/addlibrary',getLibrary);

router.post('/addschool',postSchool);
router.get('/addschool',getSchool);

router.post('/addshoppingMall',postShoppingMall);
router.get('/addshoppingMall',getShoppingMall);

router.post('/addtemple',postTemple);
router.get('/addtemple',getTemple);

router.post('/addTourism',postTourism);
router.get('/addTourism',getTourism);

router.post('/addtransport',postTransport);
router.get('/addtransport',getTransport);


export default router;
