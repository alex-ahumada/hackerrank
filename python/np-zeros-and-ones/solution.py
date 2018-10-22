import numpy

n_array = list(map(int,input().split()))
n = tuple(n_array)

print(numpy.zeros(n, dtype=numpy.int))
print(numpy.ones(n, dtype=numpy.int))
