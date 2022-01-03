#include<iostream>
using namespace std;

int main(){
	int num;
	for (num=1;num<=100;num++){
	if(num%15==0)
		cout<<"FizzBuzz\n";
	else  if((num%3)==0)
		cout<<"Fizz\n";
	else if((num%5)==0)
		cout<<"Buzz\n";
	else
		cout<<num<<"\n";
	}
	
	return 0;
}
