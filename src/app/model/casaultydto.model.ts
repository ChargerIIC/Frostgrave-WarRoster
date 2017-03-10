import { Minion } from './minion.model';

export class CasaultyDto{
    warbandMember : Minion;
    killed: boolean; //if true, than the member was killed
}