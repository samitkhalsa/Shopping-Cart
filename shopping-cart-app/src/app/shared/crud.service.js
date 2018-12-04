"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CrudService = (function () {
    // Inject AngularFireDatabase Dependency in Constructor
    function CrudService(db) {
        this.db = db;
    }
    // Create Student
    CrudService.prototype.AddBook = function (book) {
        this.booksRef.push({
            name: book.name,
            description: book.description,
            view: book.view,
            quantity: book.quantity
        });
    };
    // Fetch Single Student Object
    CrudService.prototype.GetBook = function (id) {
        this.bookRef = this.db.object('students-list/' + id);
        return this.bookRef;
    };
    // Fetch Students List
    CrudService.prototype.GetStudentsList = function () {
        this.booksRef = this.db.list('students-list');
        return this.booksRef;
    };
    // Update Student Object
    CrudService.prototype.UpdateStudent = function (student) {
        this.bookRef.update({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            mobileNumber: student.mobileNumber
        });
    };
    // Delete Student Object
    CrudService.prototype.DeleteStudent = function (id) {
        this.bookRef = this.db.object('students-list/' + id);
        this.bookRef.remove();
    };
    CrudService = __decorate([
        // Firebase modules for Database, Data list and Single object
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;
