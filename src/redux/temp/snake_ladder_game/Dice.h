#include <iostream>
#include <random>

using namespace std;

class Dice{
	int number_of_dice;
	int range_l;
	int range_u;

	void setRanges(){
		range_l = number_of_dice;
		range_u = number_of_dice*6;
	}
public:
	Dice():number_of_dice(1){setRanges();}
	Dice(int x):number_of_dice(x){setRanges();}

	int rollDice(){
		return range_l + ( std::rand() % ( range_u - range_l + 1 ) );
	}
};