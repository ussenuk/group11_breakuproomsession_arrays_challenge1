function solution(A, K) {
    const N = A.length;

    if (N === 0 || K % N === 0) {
        // If the array is empty or K is a multiple of N, no change is needed.
        return A;
    }

    K = K % N; // Normalize K to the range [0, N-1].

    // Slice the array and concatenate the two parts after rotation.
    const rotatedArray = A.slice(N - K).concat(A.slice(0, N - K));

    return rotatedArray;
}

// Test cases
const example1 = [3, 8, 9, 7, 6];
const k1 = 3;
console.log(solution(example1,k1))