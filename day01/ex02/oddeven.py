#!/usr/bin/env python3

import sys

def number_type(n):
    if n & 1:
        return 'odd'
    else:
        return 'even'

while True:
    n = input("Enter a number: ")
    try:
        int(n)
    except EOFError:
        sys.exit(0)
    except ValueError:
        print(n + " is not a number")
    else:
        print("The number " + n + " is " + number_type(int(n)))
