// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// answer
// function, merge 2 sorted arr into single arr
// arr -> int, +/-, sorted, no duplicates

function mergeArrays(a, b) {
        let merge = [...a, ...b].sort()
        let unique = new Set(merge)
        return Array.from(unique).sort((a,b)=> a-b)
}
  
  // test cases
  // 