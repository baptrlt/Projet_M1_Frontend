export interface Cours {
    id: number;
    libelle: string;
    nomenclature: string;
    Cycle: {libelle: string;}
    periode: { libelle: string; }
    Enseignants: {nom};
}