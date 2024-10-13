export interface Movie {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly posterImage: string;
    readonly cast: string[];
}