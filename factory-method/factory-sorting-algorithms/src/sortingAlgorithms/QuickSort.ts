import { Sorting } from './Sorting';

export class QuickSort implements Sorting {
    sorting(array: number[]): number[] {
        if(array.length === 0) return [];
        if(array.length === 1) return array;

        let pivot = array[0];

        let head = array.filter(n => n < pivot)
        let equal = array.filter(n => n === pivot)
        let tail = array.filter(n => n > pivot)

        return this.sorting(head).concat(equal).concat(this.sorting(tail));
    };
}