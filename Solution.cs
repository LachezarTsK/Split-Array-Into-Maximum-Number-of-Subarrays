
using System;

public class Solution
{
    private static readonly int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

    public int MaxSubarrays(int[] inputValues)
    {
        int minScore = int.MaxValue;
        foreach (int currentValue in inputValues)
        {
            minScore &= currentValue;
        }

        if (minScore != 0)
        {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = int.MaxValue;
        int maxNumberOfSubarraysWithMinScore = 0;

        foreach (int currentValue in inputValues)
        {
            currentScore &= currentValue;
            if (currentScore == 0)
            {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = int.MaxValue;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
}
