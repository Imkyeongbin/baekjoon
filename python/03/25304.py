import sys
input = sys.stdin.readline

total_price = int(input())
total = int(input())
sum = 0
for _ in range(total):
    goods_price, goods_count = map(int, input().split())
    sum += goods_price * goods_count
if total_price == sum:
    print("Yes")
else:
    print("No")