import * as Immutable from "immutable";

export interface IPerson {
    name: string;
    surname: string;
}

export interface IPersonImmutable extends Immutable.Map<any, any> {
    get(key: "name"): string;
    get(key: "surname"): string;
}

export interface IState {
    person: IPerson;
}

export interface IStateImmutable extends Immutable.Map<any, any> {
    get(key: "person"): IPersonImmutable;
}