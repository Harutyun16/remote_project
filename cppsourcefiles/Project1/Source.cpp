#include <iostream>
#include <windows.h>
#include<string>
#include<cmath>
#include <fstream>
using namespace std;
void inp(int i, char c)
{
	INPUT ip;

	ip.type = INPUT_KEYBOARD;
	ip.ki.wScan = 0; // hardware scan code for key
	ip.ki.time = 0;
	ip.ki.dwExtraInfo = 0;

	// Press the "A" key
	ip.ki.wVk = c; // virtual-key code for the "a" key
	if (i == 1)
	{
		ip.ki.dwFlags = 0; // 0 for key press
		SendInput(1, &ip, sizeof(INPUT));
	}
	if (i == 0)
	{
		ip.ki.dwFlags = KEYEVENTF_KEYUP; // KEYEVENTF_KEYUP for key release
		SendInput(1, &ip, sizeof(INPUT));
	}
}

int main()
{
	string str;
	int n=1,in;
	while (n != 0)
	{
		ifstream fin ("buttonState.txt");
		fin >> str;
		for (in = 0; in < str.length(); in++)
		{
			if (str[in] != '"'&&str[in] != ':'&&str[in] != '{'&&str[in] != '}'&&str[in] != ','&&str[in] != '0'&&str[in] != '1')
			{
				inp(str[in + 3] - '0', str[in]);
				cout << str[in] << ' ' << str[in + 3] - '0'<<endl;
			}
		}
		cout << str;
		fin.close();
		Sleep(60);
	}
		return 0;
}