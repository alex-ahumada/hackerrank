#!/bin/python3

import re

n, m = map(int, input().split())
array = ''.join([''.join(t) for t in zip(*[input() for _ in range(n)])])
print(re.sub(r'\b[^a-zA-Z0-9]+\b', r' ', array))