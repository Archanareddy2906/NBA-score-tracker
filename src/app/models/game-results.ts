export interface IGameResults {
    [x: string]: any;
    data: GameResults;
}
interface GameResults {
    forEach(arg0: (teams: IGameResults) => void): unknown;
    data: GameResults;
    date: string;
    home_team: {
        id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string,
        name: string
    }
    home_team_score: number;
    id: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: {
        id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string,
        name: string
    }
    visitor_team_score: number;
}




