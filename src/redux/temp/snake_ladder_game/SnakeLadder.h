#include <iostream>

using namespace std;


class SnakeLadder{
	int startBlock;
	int endBlock;
public:
	SnakeLadder(int start,int end):startBlock(start),endBlock(end){}

	// check if this is snake/ladder or not
	int isSnakeLadder(int point){
		if(point==startBlock){
			return endBlock;
		}
		return -1;
	}
};	