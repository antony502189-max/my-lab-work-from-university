#include <iostream>
#include <cmath>
#include <locale>
#include <iomanip>
#include <limits>
#include <string>

using namespace std;

void getDouble(const string& prompt, double& val) {
    bool valid = false;
    while (!valid) {
        cout << prompt;
        cin >> val;
        if (cin.fail()) {
            cout << "Ошибка: Введите только число!" << endl;
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
        else {
            char nextChar = cin.peek();
            if (nextChar == '\n'  nextChar == EOF) {
                valid = true;
            }
            else {
                cout << "Ошибка: Обнаружены лишние символы!" << endl;
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
        }
    }
}

void getN(int& n) {
    bool valid = false;
    while (!valid) {
        cout << "Введите целое число n: ";
        cin >> n;
        if (cin.fail()  n <= 0) {
            cout << "Ошибка! Пожалуйста, введите целое число больше 0." << endl;
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
        else {
            char nextChar = cin.peek();
            if (nextChar == '\n'  nextChar == EOF) {
                valid = true;
            }
            else {
                cout << "Ошибка! Обнаружены лишние символы. Введите только целое число." << endl;
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
        }
    }
}

void getMode(int& mode) {
    bool valid = false;
    while (!valid) {
        cout << "Выберите режим вывода (1 - S(x), 2 - Y(x), 3 - |Y(x) - S(x)|, 4 - все): ";
        cin >> mode;
        if (cin.fail()) {
            cout << "Ошибка! Пожалуйста, введите число (1, 2, 3 или 4)." << endl;
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
        else {
            char nextChar = cin.peek();
            if (nextChar == '\n'  nextChar == EOF) {
                if (mode >= 1 && mode <= 4) {
                    valid = true;
                }
                else {
                    cout << "Ошибка! Введите только 1, 2, 3 или 4." << endl;
                    cin.ignore(numeric_limits<streamsize>::max(), '\n');
                }
            }
            else {
                cout << "Ошибка! Обнаружены лишние символы. Введите только число (1, 2, 3 или 4)." << endl;
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
        }
    }
}

void Out_Rez(double x, double s, double y, double diff, int mode) {
    if (mode == 1  mode == 3  mode == 4) {
        cout<<fixed << setprecision(2) << setw(15) << x;
    }
    cout << fixed << setprecision(6);
    if (mode == 1) {
        cout << setw(15) << s << endl;
    }
    else if (mode == 2) {
        cout << setw(15) << y << endl;
    }
    else if (mode == 3) {
        cout << setw(15) << diff << endl;
    }
    else if (mode == 4) {
        cout << setw(15) << s << setw(15) << y << setw(15) << diff << endl;
    }
}

int main() {
    double a, b, h;
    int n, mode;
    setlocale(LC_ALL, "Russian");

    bool NormasInput = false;
    while (!NormasInput) {
        getDouble("Введите a: ", a);
        getDouble("Введите b: ", b);
        if (a > b) {
            cout << "Ошибка: a должно быть меньше или равно b!" << endl;
            continue;
        }
        getDouble("Введите h: ", h);
        if (h <= 0) {
            cout << "Ошибка: h должно быть больше 0!" << endl;
            continue; 
        }
        NormasInput = true; 
    }

    getN(n);
    getMode(mode);

    cout << fixed << setprecision(4);
