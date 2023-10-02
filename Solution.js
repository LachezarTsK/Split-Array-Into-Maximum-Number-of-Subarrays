
/**
 * @param {number[]} inputValues
 * @return {number}
 */
var maxSubarrays = function (inputValues) {

    const NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;
    
    let minScore = Number.MAX_SAFE_INTEGER;
    for (let currentValue of inputValues) {
        minScore &= currentValue;
    }

    if (minScore !== 0) {
        return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
    }

    let currentScore = Number.MAX_SAFE_INTEGER;
    let maxNumberOfSubarraysWithMinScore = 0;

    for (let currentValue of inputValues) {
        currentScore &= currentValue;
        if (currentScore === 0) {
            ++maxNumberOfSubarraysWithMinScore;
            currentScore = Number.MAX_SAFE_INTEGER;
        }
    }

    return maxNumberOfSubarraysWithMinScore;
};
