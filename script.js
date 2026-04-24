function mincost(arr) {
    let cost = 0;

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Keep combining until one rope remains
    while (arr.length > 1) {
        let first = arr.shift();   // smallest
        let second = arr.shift();  // second smallest

        let sum = first + second;
        cost += sum;

        // Put back the new rope
        arr.push(sum);

        // Sort again
        arr.sort((a, b) => a - b);
    }

    return cost;
}