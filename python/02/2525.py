import sys
input = sys.stdin.readline
a, b = map(int, input().split())
c = int(input())

min = b + c
hr = a
if min >= 60:
    hr += min // 60
    min %= 60
    if hr >= 24:
        hr %= 24
        
print(hr, min)