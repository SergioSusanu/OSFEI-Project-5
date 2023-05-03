
export interface book{
    id:string;
    name:string | undefined;
    image:string | undefined;
    description:string | undefined;
    authors:string[] | [];
}

export interface BookCollection{
    books: book[] | undefined;
}