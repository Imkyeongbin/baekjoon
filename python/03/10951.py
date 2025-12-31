import sys
input = sys.stdin.readline
while True:
    try:
        a, b = map(int, input().split())
    except:
        break
    print(a + b)

# for i in sys.stdin:
#     a, b = map(int, i.split())
#     print(a + b)