/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/treatments/src/treatment.entity.ts":
/*!*************************************************!*\
  !*** ./apps/treatments/src/treatment.entity.ts ***!
  \*************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Treatment = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Treatment = class Treatment {
};
exports.Treatment = Treatment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Treatment.prototype, "treatmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Treatment.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Treatment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Treatment.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Treatment.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Treatment.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Treatment.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Treatment.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Treatment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Treatment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Treatment.prototype, "updatedAt", void 0);
exports.Treatment = Treatment = __decorate([
    (0, typeorm_1.Entity)('treatments')
], Treatment);


/***/ }),

/***/ "./apps/treatments/src/treatments.controller.ts":
/*!******************************************************!*\
  !*** ./apps/treatments/src/treatments.controller.ts ***!
  \******************************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const treatments_service_1 = __webpack_require__(/*! ./treatments.service */ "./apps/treatments/src/treatments.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let TreatmentsController = class TreatmentsController {
    constructor(treatmentsService) {
        this.treatmentsService = treatmentsService;
    }
    createCustomer(data) {
        return this.treatmentsService.createTreatment(data);
    }
    findAllCustomers(id) {
        return this.treatmentsService.findAllTreatments(id);
    }
    deleteTreatment(id) {
        return this.treatmentsService.deleteTreatment(id);
    }
    deleteTreatmentByService(id) {
        return this.treatmentsService.deleteTreatmentByService(id);
    }
};
exports.TreatmentsController = TreatmentsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'createTreatment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TreatmentsController.prototype, "createCustomer", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getAllTreatments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TreatmentsController.prototype, "findAllCustomers", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteTreatment' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TreatmentsController.prototype, "deleteTreatment", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'deleteTreatmentByService' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TreatmentsController.prototype, "deleteTreatmentByService", null);
exports.TreatmentsController = TreatmentsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof treatments_service_1.TreatmentsService !== "undefined" && treatments_service_1.TreatmentsService) === "function" ? _a : Object])
], TreatmentsController);


/***/ }),

/***/ "./apps/treatments/src/treatments.module.ts":
/*!**************************************************!*\
  !*** ./apps/treatments/src/treatments.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const treatments_controller_1 = __webpack_require__(/*! ./treatments.controller */ "./apps/treatments/src/treatments.controller.ts");
const treatments_service_1 = __webpack_require__(/*! ./treatments.service */ "./apps/treatments/src/treatments.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const treatment_entity_1 = __webpack_require__(/*! ./treatment.entity */ "./apps/treatments/src/treatment.entity.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let TreatmentsModule = class TreatmentsModule {
};
exports.TreatmentsModule = TreatmentsModule;
exports.TreatmentsModule = TreatmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: './apps/treatments/.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [treatment_entity_1.Treatment],
                    synchronize: false,
                    migrations: [__dirname + '/migrations/*.ts'],
                    migrationsRun: configService.get('NODE_ENV') === 'production',
                    ssl: { require: true, rejectUnauthorized: false },
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([treatment_entity_1.Treatment]),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: 'APPOINTMENT_SERVICE',
                    imports: [config_1.ConfigModule],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('APPOINTMENTS_HOST'),
                            port: configService.get('APPOINTMENTS_PORT', 3004),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
        ],
        controllers: [treatments_controller_1.TreatmentsController],
        providers: [treatments_service_1.TreatmentsService],
    })
], TreatmentsModule);


/***/ }),

/***/ "./apps/treatments/src/treatments.service.ts":
/*!***************************************************!*\
  !*** ./apps/treatments/src/treatments.service.ts ***!
  \***************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const treatment_entity_1 = __webpack_require__(/*! ./treatment.entity */ "./apps/treatments/src/treatment.entity.ts");
let TreatmentsService = class TreatmentsService {
    constructor(userRepository, client) {
        this.userRepository = userRepository;
        this.client = client;
    }
    async createTreatment(treatment) {
        const res = await this.userRepository.save(treatment);
        console.log(res);
        return `Treatment created successfully`;
    }
    async findAllTreatments(id) {
        const treatments = await this.userRepository.find({
            where: { userId: id },
        });
        console.log(treatments);
        return treatments;
    }
    async deleteTreatment(id) {
        await (0, rxjs_1.lastValueFrom)(this.client.send({ cmd: 'deleteAppointmentByTreatment' }, id));
        const treatment = await this.userRepository.findOneBy({
            treatmentId: id,
        });
        const result = await this.userRepository.remove(treatment);
        return result;
    }
    async deleteTreatmentByService(id) {
        const result = await this.userRepository.delete({
            serviceId: id,
        });
        return result;
    }
};
exports.TreatmentsService = TreatmentsService;
exports.TreatmentsService = TreatmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(treatment_entity_1.Treatment)),
    __param(1, (0, common_1.Inject)('APPOINTMENT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], TreatmentsService);


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
/*!*************************************!*\
  !*** ./apps/treatments/src/main.ts ***!
  \*************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const treatments_module_1 = __webpack_require__(/*! ./treatments.module */ "./apps/treatments/src/treatments.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
async function bootstrap() {
    const appContext = await core_1.NestFactory.createApplicationContext(treatments_module_1.TreatmentsModule);
    const configService = appContext.get(config_1.ConfigService);
    const app = await core_1.NestFactory.createMicroservice(treatments_module_1.TreatmentsModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: configService.get('TREATMENTS_HOST'),
            port: configService.get('TREATMENTS_PORT', 3007),
        },
    });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;