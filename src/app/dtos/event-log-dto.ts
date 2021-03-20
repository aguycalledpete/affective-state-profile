export class EventLogDto {
    Title : string;
    DateTime : Date;
    ValenceLevel : number = 5;
    ArousalLevel : number = 5;
    NatureOfEvent : string;
    ActivitiesInvolved : string;
    LevelOfSocialInteractions : number = 0;
}
