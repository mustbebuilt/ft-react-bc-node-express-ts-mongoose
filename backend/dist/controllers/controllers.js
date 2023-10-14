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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.createData = exports.getDataByDateRange = exports.getDataByCertificate = exports.getDataByFilmTitle = exports.getDataById = exports.getAllData = void 0;
const Film_1 = __importDefault(require("../models/Film"));
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const films: IFilm[] = await Film.find();
            const films = yield Film_1.default.find().select("filmTitle");
            console.dir(Film_1.default);
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getAllData = getAllData;
function getDataById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const film = yield Film_1.default.findById(id);
            return film;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getDataById = getDataById;
function getDataByFilmTitle(filmTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const regex = new RegExp(filmTitle, "i"); // Create a case-insensitive regular expression
            const films = yield Film_1.default.find({ filmTitle: regex });
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getDataByFilmTitle = getDataByFilmTitle;
function getDataByCertificate(filmCertificate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const films = yield Film_1.default.find({ filmCertificate: filmCertificate });
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getDataByCertificate = getDataByCertificate;
// Date range query
function getDataByDateRange(startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const films = yield Film_1.default.find({
                releaseDate: {
                    $gte: startDate,
                    $lte: endDate // Less than or equal to endDate
                }
            });
            console.log(films);
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getDataByDateRange = getDataByDateRange;
function createData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newDocument = yield Film_1.default.create(data);
            console.log(newDocument);
            return newDocument;
        }
        catch (error) {
            console.error("Error creating data:", error);
            return { error: "Failed to create data" };
        }
    });
}
exports.createData = createData;
function updateData(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedDocument = yield Film_1.default.findByIdAndUpdate(id, data, {
                new: true,
            });
            return updatedDocument;
        }
        catch (error) {
            console.error("Error updating data:", error);
            return { error: "Failed to update data" };
        }
    });
}
exports.updateData = updateData;
function deleteData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedDocument = yield Film_1.default.findByIdAndDelete(id);
            return deletedDocument;
        }
        catch (error) {
            console.error("Error deleting data:", error);
            return { error: "Failed to delete data" };
        }
    });
}
exports.deleteData = deleteData;
