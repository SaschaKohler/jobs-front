import { Company } from "./Company";

export class Job {
    id: number;
    position: string;
    date: string;
    company: Company;
    published_at: Date;
    created_at: Date;
    updated_at: Date;
    name: { name: string; };
}