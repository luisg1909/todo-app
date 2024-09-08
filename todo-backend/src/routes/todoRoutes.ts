import { Router } from 'express';

const router = Router();

router.use((req, res, next) => {
    var a:any=req
    var msn:any=a.session
   
    if (!msn.userId) {
        return res.status(401).send('Unauthorized');
    }
    next();
});





export default router;
