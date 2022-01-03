#include<iostream>
using namespace std;

struct value{
	int min;
	int max;
};

struct value minMax(int arr[],int n){
	struct value minmax;
	int i;

	if (n==1){
		minmax.max=arr[0];
		minmax.min=arr[0];
	}
	
	if(arr[0] > arr[1]){
		minmax.max=arr[0];
		minmax.min=arr[1];
	}
	else{
		minmax.max=arr[1];
		minmax.min=arr[0];
	}
	
	for(i=2;i<n;i++){
		if( arr[i] >minmax.max)
			minmax.max=arr[i];
		else if ( arr[i] <minmax.min)
			minmax.min=arr[i];
			
	}
	return minmax;
}

int main(){
	int arr[100], n;
	cout<<"Enter number of inputs: ";
	cin >> n;
	cout<<"Enter "<<n<<" numbers: \n";
	for(int i=0; i<n;i++){
		cin>>arr[i];
	}
	struct value minmax=minMax(arr, n);
	cout<<"The minimum and maximum values in the given array is: ";
	cout<<"["<<minmax.min<< " , "<<minmax.max<<"]";
	return 0;
}
