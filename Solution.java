
public class Solution {

    private static final int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

    public int maxSubarrays(int[] inputValues) {

        int minScore = Integer.MAX_VALUE;
        for (int currentValue : inputValues) {
            minScore &= currentValue;
        }

        if (minScore != 0) {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = Integer.MAX_VALUE;
        int maxNumberOfSubarraysWithMinScore = 0;

        for (int currentValue : inputValues) {
            currentScore &= currentValue;
            if (currentScore == 0) {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = Integer.MAX_VALUE;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
}
