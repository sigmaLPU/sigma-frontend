#include <bits/stdc++.h>

#include "Dice.h"
#include "Player.h"
#include "SnakeLadder.h"

using namespace std;

class Board{
	Dice *dice=NULL;
	queue<Player> players;
	vector<Player> winner;
	vector<SnakeLadder> snakeladder;
	int size = 100;
public:
	Board(int s,int d=1){
		dice = new Dice(d);
		size = s;
	}

	void addPlayer(string name,int id){
		Player obj(name,id);
		players.push(obj);
	}


	void setSankeLadder(int start,int end){
		if(max(start,end)>size)
			return;
		SnakeLadder obj(start,end);
		snakeladder.push_back(obj);
	}


	void Play(){
		while(players.size()>1){


			auto &p = players.front();
			players.pop();

			cout<<p.getName()<<" move press any key to move :";

			getchar();
			
			int next_pos = dice->rollDice();


			cout<<p.getName()<<" got -> "<<next_pos<<" so new position will be "<<(next_pos+p.getPosition())<<" out of "<<size<<endl;
			
			if(next_pos+p.getPosition()>=size){
				winner.push_back(p);
				cout<<endl<<p.getName()<<" Won"<<endl;
				continue;
			}
			int new_pos = next_pos+p.getPosition();
			
			// checking for ladder and snake
			for(int i=0;i<snakeladder.size();i++){
				if(snakeladder[i].isSnakeLadder(new_pos)==-1) continue;
				new_pos = snakeladder[i].isSnakeLadder(new_pos);
				cout<<"Something happen so new position is "<<new_pos<<endl;
				i=0;
			}

			p.setPosition(new_pos);
			players.push(p);

			cout<<"Final position is "<<new_pos<<endl;
		}
	}
};