export class ZCalendarEvent {
    constructor(public id: number,
        public rojId: number,
        public mahId: number,
        public sal: number,
        public title: string,
        public description: string,
        public calendarType: string
    ) { }
}
export class ZFirestoreEvent {
    constructor(public rojId: number,
        public mahId: number,
        public description: string,
        public title: string
    ) { }
}