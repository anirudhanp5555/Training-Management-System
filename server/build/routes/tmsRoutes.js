"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tmsController_1 = require("../controllers/tmsController");
var TmsRoutes = /** @class */ (function () {
    function TmsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    TmsRoutes.prototype.config = function () {
        this.router.get('/tms/users', tmsController_1.tmsController.usersList);
        this.router.get('/tms/user/:id', tmsController_1.tmsController.getOneUser);
        this.router.post('/tms/user', tmsController_1.tmsController.createUser);
        this.router.delete('/tms/user/:id', tmsController_1.tmsController.deleteUser);
        this.router.put('/tms/updateUser/:id', tmsController_1.tmsController.updateUser);
        this.router.get('/tms/courses', tmsController_1.tmsController.coursesList);
        this.router.get('/tms/coursesUP', tmsController_1.tmsController.coursesUPList);
        this.router.get('/tms/coursesDW', tmsController_1.tmsController.coursesDWList);
        this.router.get('/tms/course/:id', tmsController_1.tmsController.getOneCourse);
        this.router.post('/tms/course', tmsController_1.tmsController.createCourse);
        this.router.delete('/tms/course/:name', tmsController_1.tmsController.deleteCourse);
        this.router.put('/tms/updateCourse/:id', tmsController_1.tmsController.updateCourses);
        this.router.get('/tms/getCourses/:id', tmsController_1.tmsController.getCourseListForUser);
        this.router.post('/tms/addCourses', tmsController_1.tmsController.addCourseForUser);
        this.router.get('/tms/getUsers/:id', tmsController_1.tmsController.getUserListForCourse);
    };
    return TmsRoutes;
}());
var tmsRoutes = new TmsRoutes();
exports.default = tmsRoutes.router;
