#!/usr/bin/env python3

x = 0
for num in range(0, 999):
    x += 1
    print('X', end=('' if (x % 100 != 0) else '\n'))
