// src/lib/data.ts

// Type definitions for odds and match data
export interface Odds {
    first: string;
    sec: string;
}

export interface Match {
    match: string;
    date: string;
    tournament: string;
    status: string;
    pinned: boolean;
    tv: boolean;
    odds: {
        one: Odds;
        x: Odds;
        two: Odds;
    };
}

export interface SportMatches {
    Cricket: Match[];
}

// Match Data
export const match: SportMatches = {
    Cricket: [
        {
            match: "Tasmina Tigers VS Queensland Bulls",
            date: "03 Dec - 06:35 AM",
            tournament: "Australia One Day Cup",
            status: "live",
            pinned: false,
            tv: true,
            odds: {
                one: { first: "5.2", sec: "5.2" },
                x: { first: "", sec: "" },
                two: { first: "5.2", sec: "5.2" },
            },
        },
        {
            match: "West Indies Vs Bangladesh",
            date: "03 Dec - 06:35 AM",
            tournament: "Test Matches",
            status: "live",
            pinned: true,
            tv: false,
            odds: {
                one: { first: "3.4", sec: "4.13" },
                x: { first: "", sec: "" },
                two: { first: "3.10", sec: "8.02" },
            },
        },
        {
            match: "Tasmina Tigers VS Queensland Bulls",
            date: "03 Dec - 06:35 AM",
            tournament: "Australia One Day Cup",
            status: "",
            pinned: false,
            tv: false,
            odds: {
                one: { first: "7.20", sec: "8.12" },
                x: { first: "", sec: "" },
                two: { first: "10.2", sec: "6.02" },
            },
        },
        {
            match: "West Indies Vs Bangladesh",
            date: "03 Dec - 06:35 AM",
            tournament: "Test Matches",
            status: "new",
            pinned: false,
            tv: false,
            odds: {
                one: { first: "10.2", sec: "6.01" },
                x: { first: "", sec: "" },
                two: { first: "4.2", sec: "7.32" },
            },
        },
    ],
};
