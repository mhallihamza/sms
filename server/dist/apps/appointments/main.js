/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/appointments/src/appointment.entity.ts":
/*!*****************************************************!*\
  !*** ./apps/appointments/src/appointment.entity.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Appointment = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Appointment = class Appointment {
};
exports.Appointment = Appointment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Appointment.prototype, "appointmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "staffId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "treatmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Appointment.prototype, "appointmentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Appointment.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'pending' }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Appointment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Appointment.prototype, "updatedAt", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)('appointments')
], Appointment);


/***/ }),

/***/ "./apps/appointments/src/appointments.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/appointments/src/appointments.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppointmentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const appointments_service_1 = __webpack_require__(/*! ./appointments.service */ "./apps/appointments/src/appointments.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AppointmentsController = class AppointmentsController {
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    createAppointment(data) {
        return this.appointmentsService.createAppointment(data);
    }
    findAllAppointmennts(id) {
        return this.appointmentsService.findAllAppointments(id);
    }
    findAllAppointmentsDetails(id) {
        return this.appointmentsService.findAllAppointmentsDetails(id);
    }
    deleteAppointment(id) {
        return this.appointmentsService.deleteAppointment(id);
    }
    deleteAppointmentByCustomer(id) {
        return this.appointmentsService.deleteAppointmentByCustomer(id);
    }
    deleteAppointmentByStaff(id) {
        return this.appointmentsService.deleteAppointmentByStaff(id);
    }
    deleteAppointmentByTreatment(id) {
        return this.appointmentsService.deleteAppointmentByTreatment(id);
    }
    deleteAppointmentByService(id) {
        return this.appointmentsService.deleteAppointmentByService(id);
    }
};
exports.AppointmentsController = AppointmentsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createAppointment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AppointmentsController.prototype, "createAppointment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllAppointments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppointmentsController.prototype, "findAllAppointmennts", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findAllAppointmentsDetails' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AppointmentsController.prototype, "findAllAppointmentsDetails", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAppointment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AppointmentsController.prototype, "deleteAppointment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAppointmentByCustomer' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AppointmentsController.prototype, "deleteAppointmentByCustomer", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAppointmentByStaff' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AppointmentsController.prototype, "deleteAppointmentByStaff", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAppointmentByTreatment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AppointmentsController.prototype, "deleteAppointmentByTreatment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteAppointmentByService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AppointmentsController.prototype, "deleteAppointmentByService", null);
exports.AppointmentsController = AppointmentsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof appointments_service_1.AppointmentsService !== "undefined" && appointments_service_1.AppointmentsService) === "function" ? _a : Object])
], AppointmentsController);


/***/ }),

/***/ "./apps/appointments/src/appointments.module.ts":
/*!******************************************************!*\
  !*** ./apps/appointments/src/appointments.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppointmentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const appointments_controller_1 = __webpack_require__(/*! ./appointments.controller */ "./apps/appointments/src/appointments.controller.ts");
const appointments_service_1 = __webpack_require__(/*! ./appointments.service */ "./apps/appointments/src/appointments.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const appointment_entity_1 = __webpack_require__(/*! ./appointment.entity */ "./apps/appointments/src/appointment.entity.ts");
let AppointmentsModule = class AppointmentsModule {
};
exports.AppointmentsModule = AppointmentsModule;
exports.AppointmentsModule = AppointmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: './apps/appointments/.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [appointment_entity_1.Appointment],
                    synchronize: false,
                    migrations: [__dirname + '/migrations/*.ts'],
                    migrationsRun: configService.get('NODE_ENV') === 'production',
                    ssl: { require: true, rejectUnauthorized: false },
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([appointment_entity_1.Appointment]),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: 'CUSTOMER_SERVICE',
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('CUSTOMERS_HOST'),
                            port: 3003,
                        },
                    }),
                },
                {
                    name: 'TREATMENT_SERVICE',
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('TREATMENTS_HOST'),
                            port: 3007,
                        },
                    }),
                },
                {
                    name: 'STAFF_SERVICE',
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('STAFF_HOST'),
                            port: 3005,
                        },
                    }),
                },
            ]),
        ],
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [appointments_service_1.AppointmentsService],
    })
], AppointmentsModule);


/***/ }),

/***/ "./apps/appointments/src/appointments.service.ts":
/*!*******************************************************!*\
  !*** ./apps/appointments/src/appointments.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppointmentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const appointment_entity_1 = __webpack_require__(/*! ./appointment.entity */ "./apps/appointments/src/appointment.entity.ts");
let AppointmentsService = class AppointmentsService {
    constructor(userRepository, clientCustomer, clientTreatment, clientStaff) {
        this.userRepository = userRepository;
        this.clientCustomer = clientCustomer;
        this.clientTreatment = clientTreatment;
        this.clientStaff = clientStaff;
    }
    async createAppointment(appointment) {
        const res = await this.userRepository.save(appointment);
        console.log(res);
        return `Appointment created successfully`;
    }
    async findAllAppointments(id) {
        const appointments = await this.userRepository.find({
            where: { userId: id },
        });
        return appointments;
    }
    async findAllAppointmentsDetails(id) {
        const appointments = await this.userRepository.find({
            where: { userId: id },
        });
        const customers = await (0, rxjs_1.lastValueFrom)(this.clientCustomer.send({ cmd: 'getAllCustomers' }, id));
        const treatments = await (0, rxjs_1.lastValueFrom)(this.clientTreatment.send({ cmd: 'getAllTreatments' }, id));
        const staff = await (0, rxjs_1.lastValueFrom)(this.clientStaff.send({ cmd: 'getAllStaff' }, id));
        return appointments.map((appointment) => ({
            ...appointment,
            customer: customers.find((el) => el.customerId === appointment.customerId),
            treatment: treatments.find((el) => el.treatmentId === appointment.treatmentId),
            staff: staff.find((el) => el.staffId === appointment.staffId),
        }));
    }
    async deleteAppointment(id) {
        const appointment = await this.userRepository.findOneBy({
            appointmentId: id,
        });
        const result = await this.userRepository.remove(appointment);
        return result;
    }
    async deleteAppointmentByCustomer(id) {
        const result = await this.userRepository.delete({
            customerId: id,
        });
        return result;
    }
    async deleteAppointmentByStaff(id) {
        const result = await this.userRepository.delete({
            staffId: id,
        });
        return result;
    }
    async deleteAppointmentByTreatment(id) {
        const result = await this.userRepository.delete({
            treatmentId: id,
        });
        return result;
    }
    async deleteAppointmentByService(id) {
        const result = await this.userRepository.delete({
            serviceId: id,
        });
        return result;
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __param(1, (0, common_1.Inject)('CUSTOMER_SERVICE')),
    __param(2, (0, common_1.Inject)('TREATMENT_SERVICE')),
    __param(3, (0, common_1.Inject)('STAFF_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _d : Object])
], AppointmentsService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./apps/appointments/src/main.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const appointments_module_1 = __webpack_require__(/*! ./appointments.module */ "./apps/appointments/src/appointments.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
async function bootstrap() {
    const appContext = await core_1.NestFactory.createApplicationContext(appointments_module_1.AppointmentsModule);
    const configService = appContext.get(config_1.ConfigService);
    const app = await core_1.NestFactory.createMicroservice(appointments_module_1.AppointmentsModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: configService.get('APPOINTMENTS_HOST'),
            port: configService.get('APPOINTMENTS_PORT', 3004),
        },
    });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;