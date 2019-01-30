import { Injectable } from "@angular/core";
import { IdAndName, DayOfYear, ZDate } from "~/app/models";

@Injectable({
    providedIn: "root"
})
export class CalendarDataService {
    private calendarType: Array<IdAndName>
    private roj: Array<IdAndName>;
    private mah: Array<IdAndName>;
    private gatha: Array<IdAndName>;
    private dayOfYear: Array<DayOfYear>;
    private dayOfYearIndex: object;
    private rojIndex: object;
    private mahIndex: object;
    constructor() {
        this.calendarType = new Array<IdAndName>(
            { id: 1, name: "Shahanshahi" },
            { id: 2, name: "Kadmi" },
            { id: 3, name: "Fasli" }
        );
        this.roj = new Array<IdAndName>(
            { id: 1, name: "Hormazd" },
            { id: 2, name: "Bahman" },
            { id: 3, name: "Ardibehest" },
            { id: 4, name: "Shehrevar" },
            { id: 5, name: "Asfandarmad" },
            { id: 6, name: "Khordad" },
            { id: 7, name: "Amardad" },
            { id: 8, name: "Dae-pa-Adar" },
            { id: 9, name: "Adar" },
            { id: 10, name: "Avan" },
            { id: 11, name: "Khorshed" },
            { id: 12, name: "Mohor" },
            { id: 13, name: "Tir" },
            { id: 14, name: "Gosh" },
            { id: 15, name: "Dae-pa-Meher" },
            { id: 16, name: "Meher" },
            { id: 17, name: "Srosh" },
            { id: 18, name: "Rashna" },
            { id: 19, name: "Fravardin" },
            { id: 20, name: "Behram" },
            { id: 21, name: "Ram" },
            { id: 22, name: "Govad" },
            { id: 23, name: "Dae-pa-Din" },
            { id: 24, name: "Din" },
            { id: 25, name: "Ashishvangh" },
            { id: 26, name: "Ashtad" },
            { id: 27, name: "Asman" },
            { id: 28, name: "Zamyad" },
            { id: 29, name: "Marespand" },
            { id: 30, name: "Aneran" },
        );
        this.mah = new Array<IdAndName>(
            { id: 1, name: "Fravardin" },
            { id: 2, name: "Ardibehest" },
            { id: 3, name: "Khordad" },
            { id: 4, name: "Tir" },
            { id: 5, name: "Amardad" },
            { id: 6, name: "Shehrevar" },
            { id: 7, name: "Meher" },
            { id: 8, name: "Avan" },
            { id: 9, name: "Adar" },
            { id: 10, name: "Dae" },
            { id: 11, name: "Bahman" },
            { id: 12, name: "Asfandarmad" },
            { id: 13, name: "Gatha" },
        );
        this.gatha = new Array<IdAndName>(
            { id: 1, name: "Ahunavad" },
            { id: 2, name: "Ushtavad" },
            { id: 3, name: "Spentomad" },
            { id: 4, name: "Vohukhshathra" },
            { id: 5, name: "Vahishtoisht" },
            { id: 6, name: "Avardad-sal-Gah" },
        );
        this.dayOfYear = new Array<DayOfYear>(
            { id: 1, mahId: 1, rojId: 1 },
            { id: 2, mahId: 1, rojId: 2 },
            { id: 3, mahId: 1, rojId: 3 },
            { id: 4, mahId: 1, rojId: 4 },
            { id: 5, mahId: 1, rojId: 5 },
            { id: 6, mahId: 1, rojId: 6 },
            { id: 7, mahId: 1, rojId: 7 },
            { id: 8, mahId: 1, rojId: 8 },
            { id: 9, mahId: 1, rojId: 9 },
            { id: 10, mahId: 1, rojId: 10 },
            { id: 11, mahId: 1, rojId: 11 },
            { id: 12, mahId: 1, rojId: 12 },
            { id: 13, mahId: 1, rojId: 13 },
            { id: 14, mahId: 1, rojId: 14 },
            { id: 15, mahId: 1, rojId: 15 },
            { id: 16, mahId: 1, rojId: 16 },
            { id: 17, mahId: 1, rojId: 17 },
            { id: 18, mahId: 1, rojId: 18 },
            { id: 19, mahId: 1, rojId: 19 },
            { id: 20, mahId: 1, rojId: 20 },
            { id: 21, mahId: 1, rojId: 21 },
            { id: 22, mahId: 1, rojId: 22 },
            { id: 23, mahId: 1, rojId: 23 },
            { id: 24, mahId: 1, rojId: 24 },
            { id: 25, mahId: 1, rojId: 25 },
            { id: 26, mahId: 1, rojId: 26 },
            { id: 27, mahId: 1, rojId: 27 },
            { id: 28, mahId: 1, rojId: 28 },
            { id: 29, mahId: 1, rojId: 29 },
            { id: 30, mahId: 1, rojId: 30 },
            { id: 31, mahId: 2, rojId: 1 },
            { id: 32, mahId: 2, rojId: 2 },
            { id: 33, mahId: 2, rojId: 3 },
            { id: 34, mahId: 2, rojId: 4 },
            { id: 35, mahId: 2, rojId: 5 },
            { id: 36, mahId: 2, rojId: 6 },
            { id: 37, mahId: 2, rojId: 7 },
            { id: 38, mahId: 2, rojId: 8 },
            { id: 39, mahId: 2, rojId: 9 },
            { id: 40, mahId: 2, rojId: 10 },
            { id: 41, mahId: 2, rojId: 11 },
            { id: 42, mahId: 2, rojId: 12 },
            { id: 43, mahId: 2, rojId: 13 },
            { id: 44, mahId: 2, rojId: 14 },
            { id: 45, mahId: 2, rojId: 15 },
            { id: 46, mahId: 2, rojId: 16 },
            { id: 47, mahId: 2, rojId: 17 },
            { id: 48, mahId: 2, rojId: 18 },
            { id: 49, mahId: 2, rojId: 19 },
            { id: 50, mahId: 2, rojId: 20 },
            { id: 51, mahId: 2, rojId: 21 },
            { id: 52, mahId: 2, rojId: 22 },
            { id: 53, mahId: 2, rojId: 23 },
            { id: 54, mahId: 2, rojId: 24 },
            { id: 55, mahId: 2, rojId: 25 },
            { id: 56, mahId: 2, rojId: 26 },
            { id: 57, mahId: 2, rojId: 27 },
            { id: 58, mahId: 2, rojId: 28 },
            { id: 59, mahId: 2, rojId: 29 },
            { id: 60, mahId: 2, rojId: 30 },
            { id: 61, mahId: 3, rojId: 1 },
            { id: 62, mahId: 3, rojId: 2 },
            { id: 63, mahId: 3, rojId: 3 },
            { id: 64, mahId: 3, rojId: 4 },
            { id: 65, mahId: 3, rojId: 5 },
            { id: 66, mahId: 3, rojId: 6 },
            { id: 67, mahId: 3, rojId: 7 },
            { id: 68, mahId: 3, rojId: 8 },
            { id: 69, mahId: 3, rojId: 9 },
            { id: 70, mahId: 3, rojId: 10 },
            { id: 71, mahId: 3, rojId: 11 },
            { id: 72, mahId: 3, rojId: 12 },
            { id: 73, mahId: 3, rojId: 13 },
            { id: 74, mahId: 3, rojId: 14 },
            { id: 75, mahId: 3, rojId: 15 },
            { id: 76, mahId: 3, rojId: 16 },
            { id: 77, mahId: 3, rojId: 17 },
            { id: 78, mahId: 3, rojId: 18 },
            { id: 79, mahId: 3, rojId: 19 },
            { id: 80, mahId: 3, rojId: 20 },
            { id: 81, mahId: 3, rojId: 21 },
            { id: 82, mahId: 3, rojId: 22 },
            { id: 83, mahId: 3, rojId: 23 },
            { id: 84, mahId: 3, rojId: 24 },
            { id: 85, mahId: 3, rojId: 25 },
            { id: 86, mahId: 3, rojId: 26 },
            { id: 87, mahId: 3, rojId: 27 },
            { id: 88, mahId: 3, rojId: 28 },
            { id: 89, mahId: 3, rojId: 29 },
            { id: 90, mahId: 3, rojId: 30 },
            { id: 91, mahId: 4, rojId: 1 },
            { id: 92, mahId: 4, rojId: 2 },
            { id: 93, mahId: 4, rojId: 3 },
            { id: 94, mahId: 4, rojId: 4 },
            { id: 95, mahId: 4, rojId: 5 },
            { id: 96, mahId: 4, rojId: 6 },
            { id: 97, mahId: 4, rojId: 7 },
            { id: 98, mahId: 4, rojId: 8 },
            { id: 99, mahId: 4, rojId: 9 },
            { id: 100, mahId: 4, rojId: 10 },
            { id: 101, mahId: 4, rojId: 11 },
            { id: 102, mahId: 4, rojId: 12 },
            { id: 103, mahId: 4, rojId: 13 },
            { id: 104, mahId: 4, rojId: 14 },
            { id: 105, mahId: 4, rojId: 15 },
            { id: 106, mahId: 4, rojId: 16 },
            { id: 107, mahId: 4, rojId: 17 },
            { id: 108, mahId: 4, rojId: 18 },
            { id: 109, mahId: 4, rojId: 19 },
            { id: 110, mahId: 4, rojId: 20 },
            { id: 111, mahId: 4, rojId: 21 },
            { id: 112, mahId: 4, rojId: 22 },
            { id: 113, mahId: 4, rojId: 23 },
            { id: 114, mahId: 4, rojId: 24 },
            { id: 115, mahId: 4, rojId: 25 },
            { id: 116, mahId: 4, rojId: 26 },
            { id: 117, mahId: 4, rojId: 27 },
            { id: 118, mahId: 4, rojId: 28 },
            { id: 119, mahId: 4, rojId: 29 },
            { id: 120, mahId: 4, rojId: 30 },
            { id: 121, mahId: 5, rojId: 1 },
            { id: 122, mahId: 5, rojId: 2 },
            { id: 123, mahId: 5, rojId: 3 },
            { id: 124, mahId: 5, rojId: 4 },
            { id: 125, mahId: 5, rojId: 5 },
            { id: 126, mahId: 5, rojId: 6 },
            { id: 127, mahId: 5, rojId: 7 },
            { id: 128, mahId: 5, rojId: 8 },
            { id: 129, mahId: 5, rojId: 9 },
            { id: 130, mahId: 5, rojId: 10 },
            { id: 131, mahId: 5, rojId: 11 },
            { id: 132, mahId: 5, rojId: 12 },
            { id: 133, mahId: 5, rojId: 13 },
            { id: 134, mahId: 5, rojId: 14 },
            { id: 135, mahId: 5, rojId: 15 },
            { id: 136, mahId: 5, rojId: 16 },
            { id: 137, mahId: 5, rojId: 17 },
            { id: 138, mahId: 5, rojId: 18 },
            { id: 139, mahId: 5, rojId: 19 },
            { id: 140, mahId: 5, rojId: 20 },
            { id: 141, mahId: 5, rojId: 21 },
            { id: 142, mahId: 5, rojId: 22 },
            { id: 143, mahId: 5, rojId: 23 },
            { id: 144, mahId: 5, rojId: 24 },
            { id: 145, mahId: 5, rojId: 25 },
            { id: 146, mahId: 5, rojId: 26 },
            { id: 147, mahId: 5, rojId: 27 },
            { id: 148, mahId: 5, rojId: 28 },
            { id: 149, mahId: 5, rojId: 29 },
            { id: 150, mahId: 5, rojId: 30 },
            { id: 151, mahId: 6, rojId: 1 },
            { id: 152, mahId: 6, rojId: 2 },
            { id: 153, mahId: 6, rojId: 3 },
            { id: 154, mahId: 6, rojId: 4 },
            { id: 155, mahId: 6, rojId: 5 },
            { id: 156, mahId: 6, rojId: 6 },
            { id: 157, mahId: 6, rojId: 7 },
            { id: 158, mahId: 6, rojId: 8 },
            { id: 159, mahId: 6, rojId: 9 },
            { id: 160, mahId: 6, rojId: 10 },
            { id: 161, mahId: 6, rojId: 11 },
            { id: 162, mahId: 6, rojId: 12 },
            { id: 163, mahId: 6, rojId: 13 },
            { id: 164, mahId: 6, rojId: 14 },
            { id: 165, mahId: 6, rojId: 15 },
            { id: 166, mahId: 6, rojId: 16 },
            { id: 167, mahId: 6, rojId: 17 },
            { id: 168, mahId: 6, rojId: 18 },
            { id: 169, mahId: 6, rojId: 19 },
            { id: 170, mahId: 6, rojId: 20 },
            { id: 171, mahId: 6, rojId: 21 },
            { id: 172, mahId: 6, rojId: 22 },
            { id: 173, mahId: 6, rojId: 23 },
            { id: 174, mahId: 6, rojId: 24 },
            { id: 175, mahId: 6, rojId: 25 },
            { id: 176, mahId: 6, rojId: 26 },
            { id: 177, mahId: 6, rojId: 27 },
            { id: 178, mahId: 6, rojId: 28 },
            { id: 179, mahId: 6, rojId: 29 },
            { id: 180, mahId: 6, rojId: 30 },
            { id: 181, mahId: 7, rojId: 1 },
            { id: 182, mahId: 7, rojId: 2 },
            { id: 183, mahId: 7, rojId: 3 },
            { id: 184, mahId: 7, rojId: 4 },
            { id: 185, mahId: 7, rojId: 5 },
            { id: 186, mahId: 7, rojId: 6 },
            { id: 187, mahId: 7, rojId: 7 },
            { id: 188, mahId: 7, rojId: 8 },
            { id: 189, mahId: 7, rojId: 9 },
            { id: 190, mahId: 7, rojId: 10 },
            { id: 191, mahId: 7, rojId: 11 },
            { id: 192, mahId: 7, rojId: 12 },
            { id: 193, mahId: 7, rojId: 13 },
            { id: 194, mahId: 7, rojId: 14 },
            { id: 195, mahId: 7, rojId: 15 },
            { id: 196, mahId: 7, rojId: 16 },
            { id: 197, mahId: 7, rojId: 17 },
            { id: 198, mahId: 7, rojId: 18 },
            { id: 199, mahId: 7, rojId: 19 },
            { id: 200, mahId: 7, rojId: 20 },
            { id: 201, mahId: 7, rojId: 21 },
            { id: 202, mahId: 7, rojId: 22 },
            { id: 203, mahId: 7, rojId: 23 },
            { id: 204, mahId: 7, rojId: 24 },
            { id: 205, mahId: 7, rojId: 25 },
            { id: 206, mahId: 7, rojId: 26 },
            { id: 207, mahId: 7, rojId: 27 },
            { id: 208, mahId: 7, rojId: 28 },
            { id: 209, mahId: 7, rojId: 29 },
            { id: 210, mahId: 7, rojId: 30 },
            { id: 211, mahId: 8, rojId: 1 },
            { id: 212, mahId: 8, rojId: 2 },
            { id: 213, mahId: 8, rojId: 3 },
            { id: 214, mahId: 8, rojId: 4 },
            { id: 215, mahId: 8, rojId: 5 },
            { id: 216, mahId: 8, rojId: 6 },
            { id: 217, mahId: 8, rojId: 7 },
            { id: 218, mahId: 8, rojId: 8 },
            { id: 219, mahId: 8, rojId: 9 },
            { id: 220, mahId: 8, rojId: 10 },
            { id: 221, mahId: 8, rojId: 11 },
            { id: 222, mahId: 8, rojId: 12 },
            { id: 223, mahId: 8, rojId: 13 },
            { id: 224, mahId: 8, rojId: 14 },
            { id: 225, mahId: 8, rojId: 15 },
            { id: 226, mahId: 8, rojId: 16 },
            { id: 227, mahId: 8, rojId: 17 },
            { id: 228, mahId: 8, rojId: 18 },
            { id: 229, mahId: 8, rojId: 19 },
            { id: 230, mahId: 8, rojId: 20 },
            { id: 231, mahId: 8, rojId: 21 },
            { id: 232, mahId: 8, rojId: 22 },
            { id: 233, mahId: 8, rojId: 23 },
            { id: 234, mahId: 8, rojId: 24 },
            { id: 235, mahId: 8, rojId: 25 },
            { id: 236, mahId: 8, rojId: 26 },
            { id: 237, mahId: 8, rojId: 27 },
            { id: 238, mahId: 8, rojId: 28 },
            { id: 239, mahId: 8, rojId: 29 },
            { id: 240, mahId: 8, rojId: 30 },
            { id: 241, mahId: 9, rojId: 1 },
            { id: 242, mahId: 9, rojId: 2 },
            { id: 243, mahId: 9, rojId: 3 },
            { id: 244, mahId: 9, rojId: 4 },
            { id: 245, mahId: 9, rojId: 5 },
            { id: 246, mahId: 9, rojId: 6 },
            { id: 247, mahId: 9, rojId: 7 },
            { id: 248, mahId: 9, rojId: 8 },
            { id: 249, mahId: 9, rojId: 9 },
            { id: 250, mahId: 9, rojId: 10 },
            { id: 251, mahId: 9, rojId: 11 },
            { id: 252, mahId: 9, rojId: 12 },
            { id: 253, mahId: 9, rojId: 13 },
            { id: 254, mahId: 9, rojId: 14 },
            { id: 255, mahId: 9, rojId: 15 },
            { id: 256, mahId: 9, rojId: 16 },
            { id: 257, mahId: 9, rojId: 17 },
            { id: 258, mahId: 9, rojId: 18 },
            { id: 259, mahId: 9, rojId: 19 },
            { id: 260, mahId: 9, rojId: 20 },
            { id: 261, mahId: 9, rojId: 21 },
            { id: 262, mahId: 9, rojId: 22 },
            { id: 263, mahId: 9, rojId: 23 },
            { id: 264, mahId: 9, rojId: 24 },
            { id: 265, mahId: 9, rojId: 25 },
            { id: 266, mahId: 9, rojId: 26 },
            { id: 267, mahId: 9, rojId: 27 },
            { id: 268, mahId: 9, rojId: 28 },
            { id: 269, mahId: 9, rojId: 29 },
            { id: 270, mahId: 9, rojId: 30 },
            { id: 271, mahId: 10, rojId: 1 },
            { id: 272, mahId: 10, rojId: 2 },
            { id: 273, mahId: 10, rojId: 3 },
            { id: 274, mahId: 10, rojId: 4 },
            { id: 275, mahId: 10, rojId: 5 },
            { id: 276, mahId: 10, rojId: 6 },
            { id: 277, mahId: 10, rojId: 7 },
            { id: 278, mahId: 10, rojId: 8 },
            { id: 279, mahId: 10, rojId: 9 },
            { id: 280, mahId: 10, rojId: 10 },
            { id: 281, mahId: 10, rojId: 11 },
            { id: 282, mahId: 10, rojId: 12 },
            { id: 283, mahId: 10, rojId: 13 },
            { id: 284, mahId: 10, rojId: 14 },
            { id: 285, mahId: 10, rojId: 15 },
            { id: 286, mahId: 10, rojId: 16 },
            { id: 287, mahId: 10, rojId: 17 },
            { id: 288, mahId: 10, rojId: 18 },
            { id: 289, mahId: 10, rojId: 19 },
            { id: 290, mahId: 10, rojId: 20 },
            { id: 291, mahId: 10, rojId: 21 },
            { id: 292, mahId: 10, rojId: 22 },
            { id: 293, mahId: 10, rojId: 23 },
            { id: 294, mahId: 10, rojId: 24 },
            { id: 295, mahId: 10, rojId: 25 },
            { id: 296, mahId: 10, rojId: 26 },
            { id: 297, mahId: 10, rojId: 27 },
            { id: 298, mahId: 10, rojId: 28 },
            { id: 299, mahId: 10, rojId: 29 },
            { id: 300, mahId: 10, rojId: 30 },
            { id: 301, mahId: 11, rojId: 1 },
            { id: 302, mahId: 11, rojId: 2 },
            { id: 303, mahId: 11, rojId: 3 },
            { id: 304, mahId: 11, rojId: 4 },
            { id: 305, mahId: 11, rojId: 5 },
            { id: 306, mahId: 11, rojId: 6 },
            { id: 307, mahId: 11, rojId: 7 },
            { id: 308, mahId: 11, rojId: 8 },
            { id: 309, mahId: 11, rojId: 9 },
            { id: 310, mahId: 11, rojId: 10 },
            { id: 311, mahId: 11, rojId: 11 },
            { id: 312, mahId: 11, rojId: 12 },
            { id: 313, mahId: 11, rojId: 13 },
            { id: 314, mahId: 11, rojId: 14 },
            { id: 315, mahId: 11, rojId: 15 },
            { id: 316, mahId: 11, rojId: 16 },
            { id: 317, mahId: 11, rojId: 17 },
            { id: 318, mahId: 11, rojId: 18 },
            { id: 319, mahId: 11, rojId: 19 },
            { id: 320, mahId: 11, rojId: 20 },
            { id: 321, mahId: 11, rojId: 21 },
            { id: 322, mahId: 11, rojId: 22 },
            { id: 323, mahId: 11, rojId: 23 },
            { id: 324, mahId: 11, rojId: 24 },
            { id: 325, mahId: 11, rojId: 25 },
            { id: 326, mahId: 11, rojId: 26 },
            { id: 327, mahId: 11, rojId: 27 },
            { id: 328, mahId: 11, rojId: 28 },
            { id: 329, mahId: 11, rojId: 29 },
            { id: 330, mahId: 11, rojId: 30 },
            { id: 331, mahId: 12, rojId: 1 },
            { id: 332, mahId: 12, rojId: 2 },
            { id: 333, mahId: 12, rojId: 3 },
            { id: 334, mahId: 12, rojId: 4 },
            { id: 335, mahId: 12, rojId: 5 },
            { id: 336, mahId: 12, rojId: 6 },
            { id: 337, mahId: 12, rojId: 7 },
            { id: 338, mahId: 12, rojId: 8 },
            { id: 339, mahId: 12, rojId: 9 },
            { id: 340, mahId: 12, rojId: 10 },
            { id: 341, mahId: 12, rojId: 11 },
            { id: 342, mahId: 12, rojId: 12 },
            { id: 343, mahId: 12, rojId: 13 },
            { id: 344, mahId: 12, rojId: 14 },
            { id: 345, mahId: 12, rojId: 15 },
            { id: 346, mahId: 12, rojId: 16 },
            { id: 347, mahId: 12, rojId: 17 },
            { id: 348, mahId: 12, rojId: 18 },
            { id: 349, mahId: 12, rojId: 19 },
            { id: 350, mahId: 12, rojId: 20 },
            { id: 351, mahId: 12, rojId: 21 },
            { id: 352, mahId: 12, rojId: 22 },
            { id: 353, mahId: 12, rojId: 23 },
            { id: 354, mahId: 12, rojId: 24 },
            { id: 355, mahId: 12, rojId: 25 },
            { id: 356, mahId: 12, rojId: 26 },
            { id: 357, mahId: 12, rojId: 27 },
            { id: 358, mahId: 12, rojId: 28 },
            { id: 359, mahId: 12, rojId: 29 },
            { id: 360, mahId: 12, rojId: 30 },
            { id: 361, mahId: 13, rojId: 1 },
            { id: 362, mahId: 13, rojId: 2 },
            { id: 363, mahId: 13, rojId: 3 },
            { id: 364, mahId: 13, rojId: 4 },
            { id: 365, mahId: 13, rojId: 5 },
            { id: 366, mahId: 13, rojId: 6 },
        );
        this.dayOfYearIndex = {};
        this.dayOfYear.forEach(element => {
            var mah = this.mah[element.mahId - 1].name;
            var roj = this.getRojNameBase(element.mahId, element.rojId);
            this.dayOfYearIndex[mah] = this.dayOfYearIndex[mah] || {};
            this.dayOfYearIndex[mah][roj] = element.id;
        });
        this.rojIndex = {};
        this.roj.forEach(element => {
            this.rojIndex[element.name] = element.id;
        });
        this.mahIndex = {};
        this.mah.forEach(element => {
            this.mahIndex[element.name] = element.id;
        });
    }

    getCalendarName(id: number): string {
        return this.calendarType[id - 1].name;
    }

    getTotalDaysInYear(calendarType: string, sal: number): number {
        var result = 0;
        if (calendarType == "Fasli") {
            throw "Fasli not implemented";
        } else {
            result = 365;
        }
        return result;
    }

    getRojName(dayInYear: number): string {
        var element = this.dayOfYear[dayInYear - 1];
        var rojId = element.rojId;
        return this.getRojNameBase(element.mahId, rojId);
    }
    getRojNameBase(mahId: number, rojId: number): string {
        var rojName: string;
        if (mahId === 13) {
            rojName = this.gatha[rojId - 1].name;
        } else {
            rojName = this.roj[rojId - 1].name
        }
        return rojName;
    }
    getMahName(dayInYear: number): string {
        var mahId = this.dayOfYear[dayInYear - 1].mahId;
        var mahName = this.getMahNameById(mahId);
        return mahName;
    }
    getDayInYear(roj: string, mah: string): number {
        var result = this.dayOfYearIndex[mah][roj]
        return result;
    }
    getDayInYearByIds(rojId: number, mahId: number): number {
        var mah = this.getMahNameById(mahId);
        var roj = this.roj[rojId - 1].name;
        var result = this.dayOfYearIndex[mah][roj]
        return result;
    }
    getRojId(roj: string): number {
        return this.rojIndex[roj];
    }
    getRojNameById(rojId: number) {
        return this.roj[rojId - 1].name;
    }
    getMahId(mah: string): number {
        return this.mahIndex[mah];
    }
    getMahNameById(mahId: number): string {
        return this.mah[mahId - 1].name;
    }
    getDateRange(startDate: ZDate, endDate: ZDate): Array<ZDate> {
        var startDayInYear = this.getDayInYear(startDate.roj, startDate.mah);
        var endDayInYear = this.getDayInYear(endDate.roj, endDate.mah);
        var dayInYear = startDayInYear;
        var result = new Array<ZDate>();
        var date = startDate.date;
        if (startDayInYear <= endDayInYear) {
            while (dayInYear <= endDayInYear) {
                result.push(new ZDate(this.getRojName(dayInYear), this.getMahName(dayInYear), startDate.sal, startDate.calendarType, date));
                date.setHours(24);
                dayInYear++;
            }
        } else {
            var lastDayInYear = this.getTotalDaysInYear(startDate.calendarType, startDate.sal);
            while (dayInYear <= lastDayInYear) {
                result.push(new ZDate(this.getRojName(dayInYear), this.getMahName(dayInYear), startDate.sal, startDate.calendarType, date));
                date.setHours(24);
                dayInYear++;
            }
            dayInYear = 1;
            while (dayInYear <= endDayInYear) {
                result.push(new ZDate(this.getRojName(dayInYear), this.getMahName(dayInYear), endDate.sal, startDate.calendarType, date));
                date.setHours(24);
                dayInYear++;
            }
        }
        return result;
    }
}