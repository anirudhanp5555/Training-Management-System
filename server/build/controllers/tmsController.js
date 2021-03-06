"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var TmsController = /** @class */ (function () {
    function TmsController() {
    }
    // Table - Users
    TmsController.prototype.usersList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM users')];
                    case 2:
                        users = _a.sent();
                        res.json(users);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.getOneUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM users WHERE user_id = ?', [id])];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1:
                        (_a.sent()).query('INSERT INTO users set ?', [req.body]);
                        res.json({ message: 'User Saved....!!!!' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('DELETE FROM users WHERE user_id = ?', [id])];
                    case 2:
                        _a.sent();
                        res.json({ message: 'deleting a user' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.updateUser = function (req, res) {
        res.json({ text: 'Updating a users' + req.params.id });
    };
    //Table - Training
    TmsController.prototype.coursesList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var courses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM training')];
                    case 2:
                        courses = _a.sent();
                        res.json(courses);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.coursesUPList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var courses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM training WHERE start_date >= CURDATE()')];
                    case 2:
                        courses = _a.sent();
                        res.json(courses);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.coursesDWList = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var courses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM training WHERE start_date < CURDATE()')];
                    case 2:
                        courses = _a.sent();
                        res.json(courses);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.getOneCourse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT * FROM training WHERE course_id = ?', [id])];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.createCourse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default];
                    case 1:
                        (_a.sent()).query('INSERT INTO training set ?', [req.body]);
                        console.log([req.body]);
                        res.json({ message: 'Course Saved....!!!!' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.deleteCourse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('DELETE FROM training WHERE name = ?', [name])];
                    case 2:
                        _a.sent();
                        res.json({ message: 'deleting a Course' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.updateCourses = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        console.log([req.body.name, req.body.start_date]);
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('UPDATE training set name = ?, start_date = ? WHERE course_id = ?', [req.body.name, req.body.start_date, id])];
                    case 2:
                        _a.sent();
                        res.json({ text: 'Course Updated.....!!!!' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.updCourse = function (req, res) {
        res.json({ text: 'Updating a course' + req.params.id });
    };
    //Table - User_Training
    TmsController.prototype.addCourseForUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log([req.body]);
                        return [4 /*yield*/, database_1.default];
                    case 1:
                        (_a.sent()).query('INSERT INTO user_training values (?,?)', [req.body[0], req.body[1]]);
                        res.json({ message: 'Course Saved....!!!!' });
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.getCourseListForUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT course_id FROM user_training WHERE user_id = ?', [id])];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    TmsController.prototype.getUserListForCourse = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default];
                    case 1: return [4 /*yield*/, (_a.sent()).query('SELECT user_id FROM user_training WHERE course_id = ?', [id])];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        res.json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TmsController;
}());
exports.tmsController = new TmsController();
exports.default = exports.tmsController;
