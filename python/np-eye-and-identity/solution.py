import numpy

# fix output format mismatch
numpy.set_printoptions(legacy='1.13')

n, m = map(int, input().split())

print(numpy.eye(n, m, k=0))
