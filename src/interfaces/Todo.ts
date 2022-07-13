export default interface iTodo {
    id:          number | string;
    title:       string;
    completed:   boolean;
    created:     Date;
    description: string;
}