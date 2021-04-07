export class Company {
    id: number;	
    name:	"DynoMed"
    size:	'small_1_to_50' | 'medium_51_to_250' | 'large_251_to_more';
    website_url:	string;
    contact_email:	string;
    published_at:	Date;
    created_at:	Date;
    updated_at:	Date;
    logo: 	{url: string;};
    jobs:	{position:string;};
}

