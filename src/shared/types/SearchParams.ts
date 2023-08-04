export interface SearchParams {
    pc?:string,
    name:string;
    limit:number;
    parts?:string,
    offset:number,
    bestseller:'bestsellers',
    sortBy:'popularity' | 'expansive' | 'cheaper' | 'new';
}
