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
exports.getAllDataToTidy = void 0;
const Film_1 = __importDefault(require("../models/Film"));
function getAllDataToTidy() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const films = yield Film_1.default.find();
            console.dir(Film_1.default);
            yield convertDates(films); // Pass the films array to the convertDates function
            return films;
        }
        catch (error) {
            console.error("Error retrieving data:", error);
            return { error: "Failed to retrieve data" };
        }
    });
}
exports.getAllDataToTidy = getAllDataToTidy;
function convertDates(films) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Iterate over each film document
            for (const film of films) {
                // Convert the releaseDate from string to Date format
                const releaseDate = new Date(film.releaseDate);
                // Update the film document with the converted releaseDate
                yield Film_1.default.updateOne({ _id: film._id }, { releaseDate });
                // Alternatively, you can use the following code to update and save the document:
                // film.releaseDate = releaseDate;
                // await film.save();
            }
            console.log('Dates converted successfully.');
        }
        catch (error) {
            console.error('Error converting dates:', error);
        }
    });
}
