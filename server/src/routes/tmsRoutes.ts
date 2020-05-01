import {Router} from 'express';
import { tmsController } from '../controllers/tmsController';


class TmsRoutes{


    public router:Router = Router();
    
    constructor(){

        this.config();

    }

    config():void{

        this.router.get('/tms/users',tmsController.usersList);
        this.router.get('/tms/user/:id',tmsController.getOneUser);
        this.router.post('/tms/user',tmsController.createUser);
        this.router.delete('/tms/user/:id',tmsController.deleteUser);
        this.router.put('/tms/updateUser/:id',tmsController.updateUser);

        this.router.get('/tms/courses',tmsController.coursesList);
        this.router.get('/tms/coursesUP',tmsController.coursesUPList);
        this.router.get('/tms/coursesDW',tmsController.coursesDWList);
        this.router.get('/tms/course/:id',tmsController.getOneCourse);
        this.router.post('/tms/course',tmsController.createCourse);
        this.router.delete('/tms/course/:name',tmsController.deleteCourse);
        this.router.put('/tms/updateCourse/:id',tmsController.updateCourses);

        this.router.get('/tms/getCourses/:id',tmsController.getCourseListForUser);
        this.router.post('/tms/addCourses',tmsController.addCourseForUser);
        this.router.get('/tms/getUsers/:id',tmsController.getUserListForCourse);

    }

}


const tmsRoutes = new TmsRoutes();
export default tmsRoutes.router;