#include <iostream>

using namespace std;

class Player{
	string name;
	int id;
	int position;
public:
	Player(string s,int i){
		name = s;
		id = i;
		position = 0;
	}
	string getName(){
		return name;
	}
	void Info(){
		cout<<"Name --> "<<name<<"\t";
		cout<<"id --> "<<id<<"\t";
		cout<<"position --> "<<position<<endl;
	}
	int getPosition(){
		return position;
	}
	void setPosition(int x){
		position = x;
	}
};