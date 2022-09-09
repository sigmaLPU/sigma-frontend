#include <bits/stdc++.h>
#include "Board.h"
using namespace std;

int main(){
	cout<<"Working fine!!!"<<endl;

	Board b(100,2);

	b.addPlayer("Animesh",1);
	b.addPlayer("Anuj",2);

	b.Play();
	return 0;
}