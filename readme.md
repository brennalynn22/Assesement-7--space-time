|          | Append | Insert |   |   |
|----------|--------|--------|---|---|
| tiny  [ ]   | 104.4 μs       |  49.7 μs      |   |   |
| small [ ]  |    169.7 μs    |     54.9 μs   |   |   |
| medium [ ] | 224.2 μs       |    184.3 μs    |   |   |
| large [ ]  | 1.7827 ms       |     19.7001 ms   |   |   |
| XL [ ]     |  5.1636 ms      |   1.4006802 s     |   |   |


The two functions, doublerAppend and doublerInserter both take in an array of numbers, multiply each number by 2 and then add it to a new array. However, they perform this very differently. In doublerAppend .push is used that adds one or more to the end of the array and returns a new array, while in doublerInsert, .unshift is used that adds one or more to the beginning of the array and returns a new array.  Append scales smaller because it is only adding the new numbers to the end and all the others stay in the same position, so while it takes a little longer in the beginning in terms of us when the array gets larger it is quicker since only the end is changing and everything before the new number can stay the same. DoublerInsert has a larger scale because adding numbers to the beginning of the array causes every number/addition before it to move down and change position, adding more time. So Append with .push scales better and we can tell based on how small the differences in the time is between each different sized array. It starts out around 100 us and only reaches 5.16 ms while insert/unshift starts out quicker at around 50 us but ends with over a second in run time. 