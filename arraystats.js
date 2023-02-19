function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0]; //changed from original post
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,)
    }
    return [max, min, sum]; //changed from original post
}
console.log(maxMinAvg([40,30,10,5,25]));
