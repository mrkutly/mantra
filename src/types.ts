export interface Album {
	title: string;
	url: string;
	href: string;
	host: string;
}

export interface Article {
	id: string;
	author: string;
	publication: string;
	pullQuote: string;
	title: string;
	url: string;
}

export interface CalendarNode {
	node: {
		concerts: Concert[];
		year: number;
	};
}

export interface Concert {
	date: string;
	location: {
		city: string;
		support: string;
		venue: string;
	};
	program: {
		composer: string;
		description: string;
		title: string;
	};
}

export enum MediaTypes {
	ALBUMS = "ALBUMS",
	VIDEOS = "VIDEOS",
}

export interface SiteLink {
	id: number;
	href: string;
	display: string;
	partial: boolean;
	isHash: boolean;
}

export interface Video {
	title: string;
	url: string;
}