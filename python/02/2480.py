import sys
input = sys.stdin.readline

a, b, c = list(map(int, input().split()))

if a == b == c:
    print(10000 + a * 1000)
elif a == b or a == c:
    print(1000 + a * 100)
elif b == c or b == a:
    print(1000 + b * 100)
elif c == a or b == c:
    print(1000 + c * 100)
else:
    print(max([a,b,c])*100)
