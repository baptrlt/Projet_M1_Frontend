export interface Cours {
    id: number;
    libelle: string;
    nomenclature: string;
    description: string;
    syllabusObjectif: string;
    syllabusReference: string;
    Cycle: {libelle: string;}
    periode: {libelle: string;}
    Referent: { nom: string; }
    Enseignants: {nom: string;}
    TypeEvaluation: {libelle: string; }
    Prerequis: { libelle: string;}
    PiEspaces: { libelle: string;}
}