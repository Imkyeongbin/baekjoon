import sys
input = sys.stdin.readline

n = int(input())
text = ""
for i in range(int(n/4)):
    text += 'long '
text += 'int'
print(text)