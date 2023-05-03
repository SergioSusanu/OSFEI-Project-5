
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

export interface GoogleBook{
    id:string;
    volumeInfo: {
        title: string | undefined;
        authors: string[] | undefined;
        imageLinks:{
            thumbnail:string | undefined
        }
    };
    description:string | undefined;

}

export interface GoogleBookCollection {
    items: GoogleBook[] | []
}