import { Sorting, BubbleSort, MergeSort, QuickSort } from './sortingAlgorithms/index'

class FactorySortingAlgorithms {
    sortingAlgorithm: any = {
        bubbleSort: BubbleSort,
        mergeSort: MergeSort,
        quickSort: QuickSort,
    }
    
    createSorting(sorting: string): Sorting {
       return new this.sortingAlgorithm[sorting]();
    }
}

const factorySortingAlgorithms = new FactorySortingAlgorithms()
const q = factorySortingAlgorithms.createSorting('bubbleSort').sorting([8,5,6,95,62])
console.log(q)