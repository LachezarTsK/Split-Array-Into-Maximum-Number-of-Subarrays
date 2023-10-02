
#include <vector>
using namespace std;

class Solution {
    
    static const int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

public:
    int maxSubarrays(const vector<int>& inputValues) const {

        int minScore = INT_MAX;
        for (const auto& currentValue : inputValues) {
            minScore &= currentValue;
        }

        if (minScore != 0) {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = INT_MAX;
        int maxNumberOfSubarraysWithMinScore = 0;

        for (const auto& currentValue : inputValues) {
            currentScore &= currentValue;
            if (currentScore == 0) {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = INT_MAX;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
};
