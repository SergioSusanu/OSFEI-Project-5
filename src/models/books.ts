
export interface localBook{
    id:string;
    title:string | undefined;
    image:string | undefined;
    description:string | undefined;
    authors:string[] | undefined;
}

export interface BookCollection{
    books: localBook[] | undefined;
}

export interface GoogleBook{
    id:string;
    volumeInfo: {
        title: string | undefined;
        authors: string[] | undefined;
        imageLinks:{
            thumbnail:string | undefined
        },
        description:string | undefined;
    };
    

}

export interface GoogleBookCollection {
    items: GoogleBook[] | undefined
}